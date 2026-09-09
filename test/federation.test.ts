import test from 'node:test';
import assert from 'node:assert/strict';
import { assign, chooseRuntime, type Packet, type RuntimeNode } from '../src/index.js';
import { transition } from '../src/state.js';
import { makeReceipt } from '../src/receipt.js';
import { runProofBearingAssignment } from '../src/closed-loop.js';

const nodes: RuntimeNode[] = [
  {runtime_id:'CALI_PRIME',class:'CALI_PRIME',capabilities:['packet-execution','estate-routing'],health:'healthy',authority_max:'bounded-execution',failure_route:'CALI_AUDIT'},
  {runtime_id:'CALI_AUDIT',class:'CALI_AUDIT',capabilities:['packet-execution','verification','repair'],health:'healthy',authority_max:'audit-repair',failure_route:'JANUS'},
];

test('routes verification to CALI_AUDIT', () => {
  const packet: Packet = {packet_id:'P1',objective:'verify',capabilities:['verification'],authority:'bounded',evidence_class:'SECA'};
  assert.equal(chooseRuntime(packet,nodes).runtime_id,'CALI_AUDIT');
});

test('emits deterministic assignment and receipt', () => {
  const packet: Packet = {packet_id:'P2',objective:'execute',capabilities:['packet-execution'],authority:'bounded',evidence_class:'proof'};
  const a = assign(packet,nodes,new Date('2026-09-09T00:00:00Z'));
  assert.equal(a.packet_id,'P2');
  assert.equal(makeReceipt(a,['test:pass'], 'SECA', new Date('2026-09-09T00:00:01Z')).state,'VERIFIED');
});

test('blocks invalid promotion', () => {
  assert.throws(() => transition('RUNNING','CLOSED'));
  assert.equal(transition('VERIFIED','RECEIPTED'),'RECEIPTED');
});

test('requires evidence for receipts', () => {
  const packet: Packet = {packet_id:'P3',objective:'execute',capabilities:['packet-execution'],authority:'bounded',evidence_class:'proof'};
  const a = assign(packet,nodes);
  assert.throws(() => makeReceipt(a,[]));
});

test('closes proof-bearing loop', () => {
  const packet: Packet = {packet_id:'P4',objective:'execute',capabilities:['packet-execution'],authority:'bounded',evidence_class:'proof'};
  const result = runProofBearingAssignment(packet,nodes,['unit:test']);
  assert.equal(result.state,'CLOSED');
  assert.equal(result.receipt.state,'VERIFIED');
});

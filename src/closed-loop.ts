import { assign, type Packet, type RuntimeNode } from './index.js';
import { makeReceipt } from './receipt.js';
import { transition, type PacketState } from './state.js';

export function runProofBearingAssignment(packet: Packet, nodes: RuntimeNode[], evidence: string[]) {
  let state: PacketState = 'RECEIVED';
  state = transition(state, 'VALIDATED');
  const assignment = assign(packet, nodes);
  state = transition(state, 'ASSIGNED');
  state = transition(state, 'RUNNING');
  state = transition(state, 'EXECUTED');
  state = transition(state, 'VERIFYING');
  state = transition(state, 'VERIFIED');
  const receipt = makeReceipt(assignment, evidence);
  state = transition(state, 'RECEIPTED');
  state = transition(state, 'CLOSED');
  return { state, assignment, receipt };
}

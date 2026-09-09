export type PacketState = 'RECEIVED'|'VALIDATED'|'ASSIGNED'|'RUNNING'|'EXECUTED'|'VERIFYING'|'VERIFIED'|'RECEIPTED'|'CLOSED'|'REJECTED'|'BLOCKED'|'FAILED'|'REPAIRING'|'HELD';

const transitions: Record<PacketState, PacketState[]> = {
  RECEIVED:['VALIDATED','REJECTED'],
  VALIDATED:['ASSIGNED','BLOCKED'],
  ASSIGNED:['RUNNING','FAILED'],
  RUNNING:['EXECUTED','FAILED'],
  EXECUTED:['VERIFYING','FAILED'],
  VERIFYING:['VERIFIED','REPAIRING','HELD'],
  VERIFIED:['RECEIPTED','HELD'],
  RECEIPTED:['CLOSED','HELD'],
  CLOSED:[],
  REJECTED:[],
  BLOCKED:['VALIDATED'],
  FAILED:['REPAIRING','BLOCKED'],
  REPAIRING:['ASSIGNED','FAILED'],
  HELD:['VERIFYING','BLOCKED']
};

export function transition(from: PacketState, to: PacketState): PacketState {
  if (!transitions[from].includes(to)) throw new Error(`Invalid CALI-CRF state transition ${from} -> ${to}`);
  return to;
}

import type { Assignment } from './index.js';

export interface Receipt {
  packet_id: string;
  assignment_id: string;
  runtime_id: string;
  state: 'VERIFIED' | 'CLOSED';
  evidence: string[];
  completed_at: string;
  outputs?: Record<string, unknown>;
  verifier?: string;
}

export function makeReceipt(assignment: Assignment, evidence: string[], verifier = 'SECA', now = new Date()): Receipt {
  if (evidence.length === 0) throw new Error('Receipt requires evidence');
  return {
    packet_id: assignment.packet_id,
    assignment_id: assignment.assignment_id,
    runtime_id: assignment.runtime_id,
    state: 'VERIFIED',
    evidence,
    completed_at: now.toISOString(),
    verifier,
  };
}

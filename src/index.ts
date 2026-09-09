export type RuntimeClass = 'CALI_PRIME' | 'CALI_CAMPAIGN' | 'CALI_AUDIT' | 'CALI_ARCHIVE';

export interface Packet {
  packet_id: string;
  objective: string;
  capabilities: string[];
  authority: string;
  evidence_class: string;
  priority?: number;
}

export interface RuntimeNode {
  runtime_id: string;
  class: RuntimeClass;
  capabilities: string[];
  health: 'healthy' | 'degraded' | 'offline';
  authority_max: string;
  failure_route: string;
  concurrency?: number;
}

export interface Assignment {
  assignment_id: string;
  packet_id: string;
  runtime_id: string;
  reason: string[];
  created_at: string;
}

export function chooseRuntime(packet: Packet, nodes: RuntimeNode[]): RuntimeNode {
  const healthy = nodes.filter((node) => node.health === 'healthy');
  const compatible = healthy.filter((node) => packet.capabilities.every((cap) => node.capabilities.includes(cap)));
  if (compatible.length === 0) throw new Error(`No compatible CALI runtime for packet ${packet.packet_id}`);

  const classBias: Record<RuntimeClass, number> = {
    CALI_PRIME: 0,
    CALI_CAMPAIGN: packet.capabilities.includes('campaign') || packet.capabilities.includes('sustained-work') ? -20 : 10,
    CALI_AUDIT: packet.capabilities.some((c) => ['verification', 'inspection', 'repair'].includes(c)) ? -30 : 20,
    CALI_ARCHIVE: packet.capabilities.some((c) => ['archive', 'replay', 'receipt-normalization', 'evidence-preservation'].includes(c)) ? -30 : 30,
  };

  return [...compatible].sort((a, b) => classBias[a.class] - classBias[b.class] || a.runtime_id.localeCompare(b.runtime_id))[0];
}

export function assign(packet: Packet, nodes: RuntimeNode[], now = new Date()): Assignment {
  const node = chooseRuntime(packet, nodes);
  return {
    assignment_id: `${packet.packet_id}:${node.runtime_id}`,
    packet_id: packet.packet_id,
    runtime_id: node.runtime_id,
    reason: ['healthy', 'capability-match', `class:${node.class}`],
    created_at: now.toISOString(),
  };
}

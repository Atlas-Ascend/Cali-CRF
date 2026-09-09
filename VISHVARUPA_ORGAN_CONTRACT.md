# Cali-CRF — VISHVARUPA Organ Contract

Status: SEEDED
Organism: VISHVARUPA
Organ class: Local runtime / field control framework

## Mission
Cali-CRF bridges governed estate intent into local device/runtime operations on the EDEN/Cali body while preserving hardware boundaries, capability declarations, telemetry, and proof.

## Authority
May expose declared local capabilities, report node health, accept bounded execution packets, and return execution receipts. May not accept undeclared privileged work, bypass hardware policy, or conceal local failures.

## Inputs
- CrownGrid-routed capability requests
- Packet OS execution payloads
- EDEN node state and local hardware inventory
- JANUS/ODIN operational policy

## Outputs
- local execution results
- hardware/runtime health telemetry
- node capability advertisements
- execution and attestation receipts

## Handoffs
Upstream: CrownGrid, Packet-OS, Janus-Odin, EDEN
Downstream: local tools/models/filesystems, Runtime Observatory, SECA, ProofGrid, Thoth/MAAT

## Events
Consumes: local.execute.requested, node.policy.updated, capability.requested
Emits: cali.execution_started, cali.execution_completed, cali.execution_failed, node.attested, capability.advertised

## Proof requirements
Every local action records node identity, capability used, packet id, result, timestamps, and evidence reference. Sensitive hardware inventory follows VISHVARUPA redaction/attestation policy.

## Definition of integrated
A Packet OS task can route through CrownGrid to a live Cali/EDEN capability, execute locally, emit telemetry, receive SECA verification, and return proof to the estate.
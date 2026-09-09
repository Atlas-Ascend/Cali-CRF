# 05 — Interfaces and Schemas

LocalExecutionRequest: packet_id, route_receipt_id, node_id, capability_id, inputs, constraints, permissions, timeout, proof_required.

LocalExecutionResult: status, outputs/artifact_refs, logs/evidence refs, duration, node/runtime version, errors, attestation_ref.
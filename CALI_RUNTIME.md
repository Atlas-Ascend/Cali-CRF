# CALI Runtime Contract

A CALI runtime is an execution body with declared capabilities, health, locality, authority ceiling, concurrency ceiling, evidence requirements, and failure routing.

Required runtime properties:
- runtime_id
- class
- capabilities
- locality
- health
- authority_max
- packet_classes
- evidence_classes
- failure_route
- heartbeat strategy
- concurrency

CALI-CRF treats runtime bodies as replaceable execution nodes while preserving Packet OS identity, lineage, and ProofGrid evidence continuity.

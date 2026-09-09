# 10 — Receipts and Proof

Every assignment and terminal state emits a receipt or receipt reference.

Minimum receipt fields:
- packet_id
- assignment_id
- runtime_id
- state
- started_at / completed_at when available
- outputs
- evidence
- verifier
- repair lineage
- content hashes when available

ProofGrid is the external evidence sink. CALI-CRF retains normalized receipt state for routing continuity.

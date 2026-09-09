# CALI-CRF

**CALI Runtime Federation** — distributed execution and federation control plane for the Ghost Atlas / Vishvarupa estate.

CALI-CRF coordinates CALI runtime bodies, Packet OS work packets, Workforce Spine handoffs, verification, repair, receipts, and state promotion across the estate.

## Runtime bodies

- `CALI_PRIME` — default/core execution body
- `CALI_CAMPAIGN` — bounded sustained campaign execution
- `CALI_AUDIT` — verification, inspection, repair-oriented execution
- `CALI_ARCHIVE` — preservation, replay, receipt and completed-state handling

## Closed loop

`Packet -> Intake -> Preflight -> Federation -> Node Assignment -> Execution -> Verification -> Repair -> Receipt -> Routing -> Thoth/ProofGrid -> JANUS/EDEN visibility`

## Governing rule

No work is promoted as complete without an authorized packet, bounded assignment, execution result, verification outcome, and proof-bearing receipt.

See `build-truth/` for the canonical design, `contracts/` for machine-readable interfaces, `nodes/` for runtime manifests, and `docs/` for handoffs and proof criteria.

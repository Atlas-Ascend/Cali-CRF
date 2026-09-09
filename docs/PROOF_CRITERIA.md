# Proof Criteria

A CALI-CRF build may claim repository-level PASS only when:
- TypeScript typecheck passes
- build passes
- federation unit tests pass
- one packet is assigned deterministically
- invalid state promotion is rejected
- receipt generation rejects empty evidence
- four runtime manifests exist
- Packet OS integration contract exists

Production PASS additionally requires deployed runtime health, integration evidence, SECA verification where required, and ProofGrid receipt evidence.

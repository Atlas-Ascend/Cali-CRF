# 08 — Routing

Default routing:
- normal bounded execution -> CALI_PRIME
- sustained campaign -> CALI_CAMPAIGN
- verification/inspection/repair -> CALI_AUDIT
- completed/replay/preservation -> CALI_ARCHIVE

Escalation:
- execution failure -> Workforce Spine -> MetaForge or operator route
- verification failure -> DevOS/SECA -> repair packet -> CALI_AUDIT
- proof failure -> ProofGrid hold; no completion promotion
- authority/security denial -> Medusa/JANUS hold

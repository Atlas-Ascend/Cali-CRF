# Handoffs

| Producer | Consumer | Artifact | Failure route |
|---|---|---|---|
| JANUS | Packet OS | authorized intent | operator hold |
| Packet OS | CALI-CRF | work packet | packet rejection |
| CALI-CRF | Workforce Spine | assignment | requeue |
| Workforce Spine | CALI runtime | bounded task | alternate runtime |
| CALI runtime | DevOS/SECA | execution evidence | repair |
| DevOS/SECA | MetaForge | defect/repair request | JANUS escalation |
| MetaForge | CALI_AUDIT | repair packet | blocked |
| SECA | CALI-CRF | verification outcome | held |
| Medusa | CALI-CRF | security policy outcome | held/denied |
| CALI-CRF | ProofGrid | receipt/evidence refs | proof hold |
| CALI-CRF | Thoth | terminal memory artifact | retry queue |
| CALI-CRF | JANUS/EDEN | status/health | degraded visibility |

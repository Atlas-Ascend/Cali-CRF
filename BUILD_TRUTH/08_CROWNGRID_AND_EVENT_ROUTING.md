# 08 — CrownGrid and Event Routing

Consumes: local.execute.requested, node.policy.updated, capability.requested, route.dispatched.
Emits: cali.execution_started, cali.execution_completed, cali.execution_failed, node.attested, capability.advertised, runtime.degraded.

CrownGrid selects Cali only when capability/health/policy match.
# 09 — State Model

Nominal lifecycle:
`RECEIVED -> VALIDATED -> ASSIGNED -> RUNNING -> EXECUTED -> VERIFYING -> VERIFIED -> RECEIPTED -> CLOSED`

Failure substates:
`REJECTED`, `BLOCKED`, `FAILED`, `REPAIRING`, `HELD`

Only VERIFIED work carrying a valid receipt may move through RECEIPTED to CLOSED.

# Estate Position

CALI-CRF is the execution federation seam between command and distributed body execution.

```text
Architect
  -> JANUS / EDEN
  -> Packet OS
  -> CALI-CRF
  -> Workforce Spine
  -> CALI runtime bodies
  -> MetaForge / DevOS / SECA
  -> ProofGrid / Thoth
  -> CrownGrid visibility and external I/O
```

Its design goal is one command-to-proof loop across cloud, local, phone, workstation, and future embodied nodes without allowing any runtime to become its own source of authority or proof.

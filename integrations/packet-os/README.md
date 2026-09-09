# Packet OS Adapter

Accept canonical Packet OS work packets and map them into CALI-CRF packet validation, capability resolution, assignment, execution-state tracking, and receipt output.

Required invariants:
- preserve packet identity
- preserve authority ceiling
- preserve evidence class
- preserve correlation lineage
- never silently mutate the source packet

Transport may be HTTP, events, files, or CLI; transport must not alter the domain packet model.

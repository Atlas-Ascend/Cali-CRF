# Installer Conventions

CALI-CRF installers must be idempotent, inspect before mutate, preserve existing lineages, emit receipts, and never silently overwrite operator-owned configuration.

Every installer must support or document:
- dry-run behavior
- deterministic paths
- rollback procedure
- dependency checks
- health verification
- proof artifact output
- existing-state preservation

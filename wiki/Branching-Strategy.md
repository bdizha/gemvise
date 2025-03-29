# Branching Strategy

GemVise follows a modified GitFlow workflow optimized for quantum-inspired development.

## Main Branches

### `main`
- Production-ready code
- Tagged releases only
- Protected branch
- Requires PR review
- No direct commits

### `develop`
- Integration branch
- Latest delivered development changes
- Base for feature branches
- Continuous integration testing
- Nightly builds

## Supporting Branches

### Feature Branches
- Branch from: `develop`
- Merge back to: `develop`
- Naming: `feature/quantum-entanglement`
- Purpose: New features development
- Lifecycle:
  1. Branch off from `develop`
  2. Develop feature
  3. Create PR to `develop`
  4. Code review
  5. Merge via PR

### Release Branches
- Branch from: `develop`
- Merge back to: `main` and `develop`
- Naming: `release/v1.1.0`
- Purpose: Release preparation
- Actions:
  1. Version bump
  2. Last-minute fixes
  3. Documentation updates
  4. No new features

### Hotfix Branches
- Branch from: `main`
- Merge back to: `main` and `develop`
- Naming: `hotfix/v1.0.1`
- Purpose: Critical production fixes
- High priority
- Immediate deployment

## Version Control

### Versioning Strategy
- Following SemVer: `MAJOR.MINOR.PATCH`
- Example: `v1.0.0`
  - MAJOR: Breaking changes
  - MINOR: New features
  - PATCH: Bug fixes

### Tags
- All releases tagged
- Format: `v1.0.0`
- Include release notes
- Signed tags preferred

## Workflow Example

1. Start a new feature:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/quantum-entanglement
   ```

2. Complete feature:
   ```bash
   git add .
   git commit -m "feat: implement quantum entanglement"
   git push origin feature/quantum-entanglement
   ```

3. Create PR to develop
4. Review & merge
5. Prepare release:
   ```bash
   git checkout develop
   git checkout -b release/v1.1.0
   # Version bumps and final touches
   ```

6. Merge to main:
   ```bash
   git checkout main
   git merge release/v1.1.0
   git tag -a v1.1.0 -m "Version 1.1.0"
   git push origin main --tags
   ```

## Protection Rules

### Branch Protection
- `main`:
  - Require PR reviews
  - Require CI checks
  - No direct pushes
  
- `develop`:
  - Require PR reviews
  - Allow maintainer bypass
  - Require CI checks

### Commit Guidelines
- Conventional commits
- Signed commits preferred
- Clear, descriptive messages
- Reference issues/tickets

## CI/CD Integration
- PR checks automated
- Build verification
- Test coverage requirements
- Style guide enforcement
- Security scanning

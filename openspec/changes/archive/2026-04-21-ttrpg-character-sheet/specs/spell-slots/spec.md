## ADDED Requirements

### Requirement: Spell slot table derivation
The system SHALL derive spell slot counts by spell level (1st through 9th) from the character's class and level using a static class progression table.

#### Scenario: Full caster spell slots at level 5
- **WHEN** the character is a Wizard at level 5
- **THEN** the spell slot table shows 4/3/2 slots for levels 1/2/3 and 0 for levels 4–9

#### Scenario: Non-caster class shows no spell slots
- **WHEN** the character class does not have spellcasting (e.g., Fighter)
- **THEN** the spell slot section is either hidden or shows all zeros

### Requirement: Spell slot table display
The system SHALL display the current spell slot counts in a table with one row per spell level that has at least one slot available.

#### Scenario: Only available spell levels shown
- **WHEN** a class/level combination provides slots only for levels 1–3
- **THEN** levels 4–9 are not shown in the table

### Requirement: Spell slot table updates on class or level change
The system SHALL recalculate and re-render the spell slot table whenever the character's class or level changes.

#### Scenario: Level increase adds higher-level slots
- **WHEN** the user increases the character level from 3 to 5 for a full caster
- **THEN** the spell slot table immediately reflects the new slot counts for all levels

## Requirements

### Requirement: Saving throws display
The system SHALL display a Saving Throws block on the character sheet showing the five saving throw targets (Doom, Ray, Hold, Blast, Spell) for the character's currently selected class and level. The values SHALL be read from the class advancement data. The block SHALL be hidden when no class is selected. The block SHALL update immediately when the class or level changes.

#### Scenario: Block hidden with no class selected
- **WHEN** the character has no class selected
- **THEN** the Saving Throws block is not rendered on the sheet

#### Scenario: Block visible with class selected
- **WHEN** the character has a class selected
- **THEN** the Saving Throws block is rendered showing all five save targets for that class at the current level

#### Scenario: Values reflect current level
- **WHEN** the user changes the character's level
- **THEN** the saving throw values update to reflect the advancement row for the new level

#### Scenario: Values reflect current class
- **WHEN** the user changes the character's class
- **THEN** the saving throw values update to reflect the new class's advancement data at the current level

#### Scenario: Level beyond advancement table
- **WHEN** the character's level exceeds the highest level in the class advancement table (level 15)
- **THEN** the Saving Throws block is not rendered

### Requirement: Saving throws layout
The Saving Throws block SHALL be displayed full-width, spanning both columns of the character sheet grid, horizontally beneath the Identity and Ability Scores blocks. The five saves SHALL be presented side by side in a single horizontal row.

#### Scenario: Full-width horizontal layout
- **WHEN** the Saving Throws block is visible
- **THEN** it spans the full width of the sheet grid and shows Doom, Ray, Hold, Blast, and Spell targets in a horizontal row

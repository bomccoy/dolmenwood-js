## Requirements

### Requirement: Character name entry
The system SHALL allow the user to enter and edit the character's name as a free-text string.

#### Scenario: Name is saved
- **WHEN** the user types a name into the character name field
- **THEN** the name is reflected in the displayed character sheet and persisted to localStorage

### Requirement: Level entry
The system SHALL allow the user to set character level as an integer between 1 and 20 (inclusive).

#### Scenario: Valid level accepted
- **WHEN** the user enters a number between 1 and 20 in the level field
- **THEN** the character's level updates and all level-derived values (spell slots, proficiency bonus) recalculate

#### Scenario: Out-of-range level rejected
- **WHEN** the user enters a number outside 1–20
- **THEN** the field is marked invalid and the character level does not update

### Requirement: Kindred selection
The system SHALL allow the user to select a kindred from a predefined list. On selection the system SHALL display the kindred's type and native languages within the Identity block. Kindred traits SHALL NOT be displayed in the Identity block; they are displayed in the separate Kindred Traits block.

#### Scenario: Kindred selection shows type and languages
- **WHEN** the user selects a kindred from the dropdown
- **THEN** the kindred's type (e.g. Mortal, Fairy) and native languages are displayed in the Identity block

#### Scenario: Traits not shown in Identity block
- **WHEN** the user selects a kindred from the dropdown
- **THEN** kindred traits are not rendered inside the Identity block

### Requirement: Class selection
The system SHALL allow the user to select a class from a predefined list. Changing the class SHALL update the spell slot table immediately.

#### Scenario: Class change updates spell slots
- **WHEN** the user selects a different class
- **THEN** the spell slot table updates to reflect the new class's progression at the current level

### Requirement: HP tracker in Identity block
The Identity block SHALL include an HP tracker section at its bottom, containing Current HP and Max HP inputs, a life bar, and an HP dice reminder. The HP tracker SHALL use the character's current class and level to derive the HP dice reminder.

#### Scenario: HP tracker rendered in Identity block
- **WHEN** the Identity block is displayed
- **THEN** the HP tracker section is visible at the bottom of the block

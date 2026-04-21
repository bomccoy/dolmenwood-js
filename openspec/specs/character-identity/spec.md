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
The system SHALL allow the user to select a kindred from a predefined list. On selection the system SHALL display the kindred's type, native languages, and traits.

#### Scenario: Kindred selection shows type and languages
- **WHEN** the user selects a kindred from the dropdown
- **THEN** the kindred's type (e.g. Mortal, Fairy) and native languages are displayed on the sheet

#### Scenario: Kindred selection shows traits
- **WHEN** the user selects a kindred from the dropdown
- **THEN** the kindred's named traits and their descriptions are listed on the sheet

### Requirement: Class selection
The system SHALL allow the user to select a class from a predefined list. Changing the class SHALL update the spell slot table immediately.

#### Scenario: Class change updates spell slots
- **WHEN** the user selects a different class
- **THEN** the spell slot table updates to reflect the new class's progression at the current level

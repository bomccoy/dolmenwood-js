## ADDED Requirements

### Requirement: Base ability score entry
The system SHALL allow the user to enter a base value for each of the six ability scores: Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma. Each base score SHALL be an integer between 1 and 30.

#### Scenario: Valid base score accepted
- **WHEN** the user enters an integer 1–30 for an ability score
- **THEN** the value is stored and used as the base for modifier calculations

#### Scenario: Invalid base score rejected
- **WHEN** the user enters a value outside 1–30 or a non-integer
- **THEN** the field is marked invalid and the score does not update

### Requirement: Ability modifier display
The system SHALL compute and display the ability modifier for each final ability score using the formula `floor((score - 10) / 2)`.

#### Scenario: Positive modifier shown
- **WHEN** the final ability score is 16
- **THEN** the displayed modifier is +3

#### Scenario: Negative modifier shown
- **WHEN** the final ability score is 8
- **THEN** the displayed modifier is -1

#### Scenario: Zero modifier shown
- **WHEN** the final ability score is 10 or 11
- **THEN** the displayed modifier is +0

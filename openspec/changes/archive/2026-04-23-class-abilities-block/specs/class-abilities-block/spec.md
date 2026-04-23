## ADDED Requirements

### Requirement: Class abilities are displayed when a class is selected
The system SHALL render a Class Abilities block showing all abilities for the selected class. Each ability SHALL display its name in bold followed by its description text. The block SHALL only render when a class is selected.

#### Scenario: Class selected
- **WHEN** a class is selected on the character sheet
- **THEN** a Class Abilities block appears listing all abilities for that class with bold names

#### Scenario: No class selected
- **WHEN** no class is selected
- **THEN** no Class Abilities block is rendered

### Requirement: Class abilities use the same visual style as Kindred Traits
The Class Abilities block SHALL use the same formatting as the Kindred Traits block: a section heading, and a bulleted list where each item has a bold ability name followed by its description.

#### Scenario: Ability formatting
- **WHEN** the Class Abilities block is rendered
- **THEN** each ability appears as a bullet with the name in bold and description following inline

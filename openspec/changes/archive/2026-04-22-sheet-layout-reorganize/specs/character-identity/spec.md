## MODIFIED Requirements

### Requirement: Kindred selection
The system SHALL allow the user to select a kindred from a predefined list. On selection the system SHALL display the kindred's type and native languages within the Identity block. Kindred traits SHALL NOT be displayed in the Identity block; they are displayed in the separate Kindred Traits block.

#### Scenario: Kindred selection shows type and languages
- **WHEN** the user selects a kindred from the dropdown
- **THEN** the kindred's type (e.g. Mortal, Fairy) and native languages are displayed in the Identity block

#### Scenario: Traits not shown in Identity block
- **WHEN** the user selects a kindred from the dropdown
- **THEN** kindred traits are not rendered inside the Identity block

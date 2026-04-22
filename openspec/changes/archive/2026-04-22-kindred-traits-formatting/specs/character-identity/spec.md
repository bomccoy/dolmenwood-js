## MODIFIED Requirements

### Requirement: Kindred selection
The system SHALL allow the user to select a kindred from a predefined list. On selection the system SHALL display the kindred's type, native languages, and traits. Traits SHALL be rendered as a bulleted list with each trait name displayed in bold, followed by its description.

#### Scenario: Kindred selection shows type and languages
- **WHEN** the user selects a kindred from the dropdown
- **THEN** the kindred's type (e.g. Mortal, Fairy) and native languages are displayed on the sheet

#### Scenario: Kindred selection shows traits
- **WHEN** the user selects a kindred from the dropdown
- **THEN** the kindred's named traits and their descriptions are listed on the sheet

#### Scenario: Traits displayed as bulleted list
- **WHEN** a kindred with traits is selected
- **THEN** each trait is shown as a bullet point with the trait name in bold followed by a colon and its description

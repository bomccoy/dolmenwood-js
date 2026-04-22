## ADDED Requirements

### Requirement: Kindred traits block
The system SHALL display a dedicated Kindred Traits block showing all traits for the selected kindred. Each trait SHALL be rendered as a bulleted list item with the trait name in bold followed by a colon and its description. The block SHALL be hidden when no kindred is selected. The block SHALL update immediately when the kindred changes.

#### Scenario: Block hidden with no kindred selected
- **WHEN** the character has no kindred selected
- **THEN** the Kindred Traits block is not rendered on the sheet

#### Scenario: Block visible with kindred selected
- **WHEN** the character has a kindred selected
- **THEN** the Kindred Traits block is rendered showing all traits for that kindred

#### Scenario: Traits rendered as bulleted bold list
- **WHEN** the Kindred Traits block is visible
- **THEN** each trait is shown as a bullet point with the trait name in bold followed by a colon and its description

#### Scenario: Block updates on kindred change
- **WHEN** the user selects a different kindred
- **THEN** the Kindred Traits block updates immediately to show the new kindred's traits

### Requirement: Kindred traits layout
The Kindred Traits block SHALL be displayed full-width, spanning both columns of the sheet grid, positioned below the Saving Throws block.

#### Scenario: Full-width placement below saving throws
- **WHEN** the Kindred Traits block is visible
- **THEN** it spans the full width of the sheet grid and appears below the Saving Throws block

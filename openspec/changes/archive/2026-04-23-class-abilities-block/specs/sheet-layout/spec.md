## ADDED Requirements

### Requirement: Kindred traits layout
The Kindred Traits block SHALL be displayed below the Saving Throws block. When a class is also selected, Kindred Traits SHALL occupy the left column of a two-column row, with the Class Abilities block in the right column. When no class is selected, Kindred Traits SHALL span the full width of the sheet grid.

#### Scenario: Full-width when no class selected
- **WHEN** a kindred is selected but no class is selected
- **THEN** the Kindred Traits block spans the full width of the sheet grid below Saving Throws

#### Scenario: Side-by-side with Class Abilities when class is selected
- **WHEN** both a kindred and a class are selected
- **THEN** Kindred Traits occupies the left column and Class Abilities occupies the right column in the same row

#### Scenario: Class Abilities alone when no kindred selected
- **WHEN** a class is selected but no kindred is selected
- **THEN** only the Class Abilities block is rendered in that row (right column or full-width)

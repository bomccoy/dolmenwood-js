## ADDED Requirements

### Requirement: HP tracker in Identity block
The Identity block SHALL include an HP tracker section at its bottom, containing Current HP and Max HP inputs, a life bar, and an HP dice reminder. The HP tracker SHALL use the character's current class and level to derive the HP dice reminder.

#### Scenario: HP tracker rendered in Identity block
- **WHEN** the Identity block is displayed
- **THEN** the HP tracker section is visible at the bottom of the block

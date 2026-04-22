## Requirements

### Requirement: HP inputs
The system SHALL provide Current HP and Max HP number inputs at the bottom of the Identity block. Both inputs SHALL use native number spinners (up/down arrows). Current HP SHALL be clamped to a minimum of 0 and a maximum equal to Max HP. Max HP SHALL accept any non-negative integer. Both values SHALL be manually entered by the player and persisted as part of the character.

#### Scenario: Player increments current HP
- **WHEN** the player clicks the up arrow on the Current HP input
- **THEN** Current HP increases by 1, up to the value of Max HP

#### Scenario: Player decrements current HP
- **WHEN** the player clicks the down arrow on the Current HP input
- **THEN** Current HP decreases by 1, with a minimum of 0

#### Scenario: Current HP cannot exceed Max HP
- **WHEN** the player types a value greater than Max HP into the Current HP input
- **THEN** Current HP is set to Max HP

#### Scenario: HP values persist on reload
- **WHEN** the player sets Current HP and Max HP and reloads the page
- **THEN** both values are restored from localStorage

### Requirement: Life bar
The system SHALL display a coloured life bar below the HP inputs reflecting the ratio of Current HP to Max HP. The bar SHALL change colour according to health percentage: green when above 50%, orange when above 25% and at or below 50%, and red when at or below 25%. When Max HP is 0 the bar SHALL be displayed as empty (zero width) in a neutral colour.

#### Scenario: Full health — green bar
- **WHEN** Current HP is greater than 50% of Max HP
- **THEN** the life bar is green and its filled width reflects the current ratio

#### Scenario: Half health — orange bar
- **WHEN** Current HP is greater than 25% and at or below 50% of Max HP
- **THEN** the life bar is orange

#### Scenario: Nearly empty — red bar
- **WHEN** Current HP is at or below 25% of Max HP
- **THEN** the life bar is red

#### Scenario: Zero max HP — empty bar
- **WHEN** Max HP is 0
- **THEN** the life bar is displayed at zero width in a neutral colour

### Requirement: HP dice reminder
The system SHALL display a small text label showing the HP die for the character's current class and level (e.g. "+1d6"), sourced from the class advancement table. The reminder SHALL be visible only when a class is selected. It SHALL update immediately when the class or level changes.

#### Scenario: HP die shown for selected class and level
- **WHEN** a class is selected
- **THEN** the HP dice reminder shows the `hp` value from the advancement row matching the current level (e.g. "1d6" at level 1, "+1d6" at higher levels)

#### Scenario: HP die hidden with no class
- **WHEN** no class is selected
- **THEN** the HP dice reminder is not displayed

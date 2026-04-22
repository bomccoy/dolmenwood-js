## MODIFIED Requirements

### Requirement: Auto-save to localStorage
The system SHALL automatically save the entire character object to `localStorage` under the key `dolmenwood_character` whenever any character field changes. The character object SHALL include `currentHp` and `maxHp` fields. When loading a character that was saved before these fields existed, the system SHALL default both to `0`.

#### Scenario: Change persists on reload
- **WHEN** the user updates any field and then reloads the page
- **THEN** the character sheet is restored to the last saved state

#### Scenario: First visit shows empty sheet
- **WHEN** `localStorage` contains no character data
- **THEN** the character sheet loads with all fields empty or at defaults, including `currentHp` and `maxHp` both at 0

#### Scenario: Legacy save migrated on load
- **WHEN** `localStorage` contains character data without `currentHp` or `maxHp`
- **THEN** the character loads successfully with `currentHp` and `maxHp` defaulting to 0

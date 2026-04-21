## ADDED Requirements

### Requirement: Persist theme preference
The system SHALL store the user's theme preference in `localStorage` under the key `theme` with a value of `"light"` or `"dark"`.

#### Scenario: Theme key is written on toggle
- **WHEN** the user toggles the theme
- **THEN** `localStorage.setItem("theme", "<new-value>")` is called with the updated value

#### Scenario: Theme key is independent of character data
- **WHEN** the user clears or imports character data
- **THEN** the `theme` key in `localStorage` is not affected

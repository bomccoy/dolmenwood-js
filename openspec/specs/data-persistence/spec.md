## Requirements

### Requirement: Auto-save to localStorage
The system SHALL automatically save the entire character object to `localStorage` under the key `dolmenwood_character` whenever any character field changes.

#### Scenario: Change persists on reload
- **WHEN** the user updates any field and then reloads the page
- **THEN** the character sheet is restored to the last saved state

#### Scenario: First visit shows empty sheet
- **WHEN** `localStorage` contains no character data
- **THEN** the character sheet loads with all fields empty or at defaults

### Requirement: JSON export
The system SHALL allow the user to export the current character as a JSON file download.

#### Scenario: Export downloads valid JSON
- **WHEN** the user clicks the export button
- **THEN** the browser downloads a `.json` file whose contents, when parsed, represent the current character object

### Requirement: JSON import
The system SHALL allow the user to import a character from a previously exported JSON file, replacing the current character data.

#### Scenario: Valid file replaces character
- **WHEN** the user selects a valid character JSON file via the import control
- **THEN** the character sheet updates to reflect the imported data and the new data is saved to localStorage

#### Scenario: Invalid file shows error
- **WHEN** the user selects a file that is not valid character JSON (malformed JSON or missing required fields)
- **THEN** an error message is displayed and the existing character data is not modified

### Requirement: Persist theme preference
The system SHALL store the user's theme preference in `localStorage` under the key `theme` with a value of `"light"` or `"dark"`.

#### Scenario: Theme key is written on toggle
- **WHEN** the user toggles the theme
- **THEN** `localStorage.setItem("theme", "<new-value>")` is called with the updated value

#### Scenario: Theme key is independent of character data
- **WHEN** the user clears or imports character data
- **THEN** the `theme` key in `localStorage` is not affected

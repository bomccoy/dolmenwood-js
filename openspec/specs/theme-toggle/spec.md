## Requirements

### Requirement: Toggle between light and dark mode
The system SHALL provide a visible toggle control that switches the UI between light and dark themes.

#### Scenario: Toggle switches to dark mode
- **WHEN** the user clicks the theme toggle while light mode is active
- **THEN** the `dark` class is added to `<html>` and dark Tailwind styles are applied

#### Scenario: Toggle switches back to light mode
- **WHEN** the user clicks the theme toggle while dark mode is active
- **THEN** the `dark` class is removed from `<html>` and light styles are restored

### Requirement: Persist theme preference in localStorage
The system SHALL save the user's theme preference to `localStorage` under the key `theme` and restore it on page load.

#### Scenario: Preference survives page reload
- **WHEN** the user sets a theme preference and reloads the page
- **THEN** the same theme is applied before first paint (no flash of wrong theme)

#### Scenario: No stored preference defaults to light
- **WHEN** `localStorage` contains no `theme` value
- **THEN** the app loads in light mode

## ADDED Requirements

### Requirement: Add inventory item
The system SHALL allow the user to add an item to the inventory by providing at minimum a name and optionally a quantity and notes.

#### Scenario: Item added with name only
- **WHEN** the user enters a name and submits the add-item form
- **THEN** the item appears in the inventory list with quantity defaulting to 1 and empty notes

#### Scenario: Item added with all fields
- **WHEN** the user enters a name, quantity, and notes and submits
- **THEN** the item appears in the inventory list with all provided values

### Requirement: Remove inventory item
The system SHALL allow the user to remove any item from the inventory list.

#### Scenario: Item removed
- **WHEN** the user clicks the remove button for an item
- **THEN** the item is deleted from the inventory list immediately

### Requirement: Edit inventory item
The system SHALL allow the user to modify the name, quantity, or notes of any existing inventory item in place.

#### Scenario: Quantity updated
- **WHEN** the user changes the quantity field of an existing item
- **THEN** the updated quantity is reflected immediately and persisted

#### Scenario: Notes updated
- **WHEN** the user edits the notes field of an existing item
- **THEN** the updated notes are saved on blur or form submission

### Requirement: Inventory item count display
The system SHALL display the total number of items in the inventory.

#### Scenario: Item count updates on add
- **WHEN** the user adds an item
- **THEN** the item count increments by one

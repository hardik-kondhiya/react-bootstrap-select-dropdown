# v1.3.11

- Bug fixes:
  => Reset selected value if does not exist on option list items change
  => Use "defaultOptions" prop to set or reset value.

# v1.3.10

- Update readme file.

# v1.3.9

- Bug fixes: Set selected key in an array.

# v1.3.8

- Bug fixes: Set isSelected value as label on option change.

# v1.3.7

- Bug fixes: Remove "defaultOptions" update dependency.

# v1.3.6

- Bug fixes: Update options state only if options are not same as previous.

# v1.3.5

- Bug fixes: Update selected option to none if required to set as blank using set "defaultOptions" to [].

# v1.3.4

- Bug fixes: Update selected option to none if required to set as blank using set "defaultOptions" to [].

# V1.3.3

- Bug fixes: Update options' list on change in option list array.
- Allowed to add additional attributes to drowdown wrapper element.

# V1.3.2

- Bug fixes: While return object on change or close, it was contains "labelValue" only and not key. Now, returned object contains "labelKey" and "labelValue" both in parent object "selectedOptions".

# V1.3.1

- Bug fixes: In "defaultOptions". It was not working as expected when there is "isSelected" sets to true in options' array for single select dropdown.

# V1.3.0

- Add new prop "defaultOptions". It's allow to set default option(s) manually on load even if "isSelected" is not set in option's object. Array item(s) must contain value same as "labelKey" of options.
- Minor bugs fixes.

# V1.1.0

- Return select values list in same sequence as option listed
- onClose event call only if value change
- Add custom style attr to each option
- Add custom class to each option

# react-bootstrap-select-dropdown

A custom Bootstrap select / multiselect using dropdown button, designed to behave like regular select form control. Bootstrap Select/Multiselect developed to use with **React 16+** and **Bootstrap 4**.

# Installation

`npm i react-bootstrap-select-dropdown --save`

# Usage

### Quick Usage

**Import _BootstrapSelect_ component**

`import BootstrapSelect from 'react-bootstrap-select-dropdown';`

**Use of component**

`<BootstrapSelect options={options} />`

**Required JSON to list _{options}_**

```
"options": [
	{
		"labelKey": "optionItem1",
		"value": "Option item 1"
	},
	{
		"labelKey": "optionItem2",
		"value": "Option item 2"
	}
]
```

### Use of callback function

```
const handleChange = (selectedOptions) => {
	console.log(selectedOptions);
}

<BootstrapSelect options={options} onChange={handleChange} />

```

## Optional key support in **{options}** JSON

| Key        | Type       | Default | Description                                                                                        |
| ---------- | ---------- | ------- | -------------------------------------------------------------------------------------------------- |
| isSelected | boolean    |         | It is used to set option selected default on component load.                                       |
| isDisabled | boolean    |         | It is used to set option disabled and user will unable to select.                                  |
| icon       | string     |         | Class name of an icon to show before option text. You can define multiple classes with icon class. |
| className  | string     |         | Add custom class to each option                                                                    |
| style      | style JSON |         | Add custom style attr to each option                                                               |

```
"options": [
	{
		"labelKey": "optionItem1",  // Required
		"value": "Option item 1", // Required
		"isSelected": true, // Optional
		"isDisabled": false,  // Optional
		"icon": "icon-class-name" //Optional
		"className": "custom-class-name" //Optional
		"style": { //Optional
			"backgroundColor":"#000000",
			"color": "#FFFFFF"
		}
	}
]
```

## **Props** support in BootstrapSelect

| Prop           | Type                | Default            | Description                                                                                                                                                              |
| -------------- | ------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| options        | array               |                    | An array of option's objects to list in dropdown menu                                                                                                                    |
| defaultOptions | array               |                    | It's allow to set default option(s) manually on load even if "isSelected" is not set in option's object. Array item(s) must contain value same as "labelKey" of options. |
| isMultiSelect  | boolean             | false              | Allow to select multiple options.                                                                                                                                        |
| showTick       | boolean             | false              | To display tick with option on select.                                                                                                                                   |
| showSearch     | boolean             | false              | Allow to search from options list.                                                                                                                                       |
| showAction     | boolean             | false              | Enable actions buttons select/deselect all options, will work only if **isMultiSelect** sets to _true_.                                                                  |
| disabled       | boolean             | false              | It's allow you disable boostrap select on component load                                                                                                                 |
| selectStyle    | string              | btn-light          | Apply custom style by using custom class or bootstrap btn style classes.                                                                                                 |
| actionBtnStyle | string              | btn-outline-dark   | Apply custom style to action buttons (select/deselect all) by using custom class or bootstrap btn style classes. Will work only if **isMultiSelect** sets to _true_.     |
| menuSize       | 'auto'/false/number | 'auto'             | Allows to set max. options to list with vertical scrollbar if many options.                                                                                              |
| showCountOn    | number              |                    | Show selected options number as selected value in select.                                                                                                                |
| className      | string              |                    | Add classes to outer most tag.                                                                                                                                           |
| placeholder    | string              | No option selected | Set custom placeholder if no option selected.                                                                                                                            |
| onChange       | function            |                    | An **onChange** handler passed to the Toggle component                                                                                                                   |
| onClose        | function            |                    | An **onClose** handler passed to the Toggle component                                                                                                                    |

## Dependencies

Make sure _Bootstrap 4_ is installed in you project or required to install it and css needs to imported in project:

**Installation bootstrap**

`npm install bootstrap@4.6.0`

**Import bootstrap css**

`import 'bootstrap/dist/css/bootstrap.min.css';`

# TESTING

* [Testing](#testing)
  * [Validation](#Validation)
  * [Testing](#testing)
  * [Bugs](#bugs)


--- 

## Validation

### W3C validator

I used [W3C](https://validator.w3.org/) to validator the HTML. 
I got one warning for having two values on the attribute `data-icon`. But because it works, I left it as it is because I needed two icons for these input fields.

[HTML validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fantoniodegou.github.io%2Fgradlist-mod2%2F)


The CSS error is all related to Bootstrap, not my code.

[CSS validation](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fantoniodegou.github.io%2Fgradlist-mod2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=pt-BR)



### Lighthouse 

I got max scores in google chrome's lighthouse.

<img src="https://raw.githubusercontent.com/antoniodegou/gradlist-mod2/main/img/lighthouse.jpg" width="60%" alt="Lighthouse">

### WAVE

The accessibility check passed with no errors.

![Wave](https://raw.githubusercontent.com/antoniodegou/gradlist-mod2/main/img/wave.jpg)



### ViteJS

Due to its nature, it will not live-reload as soon as there is any error on CSS or javascript, and it also says where it found the error.

---
 
## Testing

### Tools for testing

1. Macbook pro m1 2021
2. Google Chrome
3. firefox
4. Safari
5. Hoverify (emulates an Extensive Mobile devices list)
6. Google Dev Tools
7. Huawei Mate 20
8. iMac 2019

### Converter section

* Convert between colour formats (HEX, RGB, HSL, CSS colour names)
* Add Colour to spot colours with the "Add Colour" button


|                   | **Input in focus** | **Inputs not in focus**        | **Add button** | **Right tick symbol** | **Wrong cross symbol** |
| ----------------- | ------------------ | ------------------------------ | -------------- | --------------------- | ---------------------- |
| **Valid value**   | Validate           | Gets converted and shows value | Gets enabled   | Appears               | Dissapears             |
| **Invalid value** | Invalidates        | “No!” Text                     | Gets disabled  | Dissapears            | Appears                |


* Get formats from the colour picker

The colour picker works in all instances, and all the other inputs get converted from the colour picker colour.


### Header

Toggle (dark/light mode) works in all devices that I tested in as well as all the browsers.
It all captures users light/dark preferences and presents that first.


### Spot Colours Section

* Visualise added colours

Colours are only added if the "add colour" button is enabled.

* Delete any of the spot colours

Colour spot colours can be deleted in any order; the list gets continuously updated.
The preview gets updated.
The final list, as well as colour swatches, get updated.

* Visualise a gradient made of spot colours

Gradient previews get updated with the "add colours" or "remove colours" buttons.


### List options

* change gradient mode
* changing gradient steps between colours
* change text before and after the list
* Change text before and after each colour

All fields affect the user's final list and the colour swatches.
The changes in any field affect the intended areas.
The text fields are added to the list.
And the radio inputs affect the colour formats or the gradient format.


4. Your List
* visualise list

The list changed with all the changes in the input fields or adding or removing colours.

* visualise list colour swatches

The swatches are updated as the User list changes.

* use copy Button to copy the list to the system clipboard

Copy button always works as long as there is text.


## Responsiveness

### Hoverify and google dev tools

I used Hoverify, which allows me to test several devices simultaneously in live time. 

![Lighhouse](https://raw.githubusercontent.com/antoniodegou/gradlist-mod2b/main/img/hoverify.jpg)

---
## Bugs

* The icon on the colour picker doesn't appear on Firefox. 

* On the converter section, I need to have two icons, but I get a warning that I have an attribute with two elements, but regardless it works.

* I have some repeated CSS code for dark and light modes, and I wonder if there is a way of making the code cleaner.



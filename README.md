# Gradlist 

GradList is a versatile application that empowers users to generate custom colour gradients by choosing their preferred colours and specifying the number of steps to include between them. Whether creating generative art, defining arrays, or crafting CSS, GradList offers a user-friendly solution for exploring and refining a wide range of colour palettes. With GradList, users can easily experiment with different colour combinations and gradients to achieve the desired visual effect, making it an indispensable tool for designers, artists, and anyone seeking to enhance their creative output.


Visit the deployed site: [GradList](https://antoniodegou.github.io/gradlist-mod2b/)



![Antonio de gou is responsive](https://raw.githubusercontent.com/antoniodegou/gradlist-mod2b/main/img/reponsiveMockUP.jpg)

---

## CONTENTS



* [User Experience](#user-experience-ux)
  * [Initial discussion](#initial-discussion)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colours)
  * [Typography](#typography)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General](#general)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)


* [Testing](#testing-&-bugs)

* [Credits](#credits)

- - - 

## User Experience (UX)

### Initial Discussion

GradList came from several necessities I've found as a generative artist.
First, I want a colour converter to generate lists of gradients between a list of chosen spot colours.

This makes it easier to prototype artwork colours quickly by just iterating over the list/array rather than wasting time building an algorithm for a secondary feature.

There are a lot of converters over the web and gradient list generators, but as far as I am aware, GradList is the only one that lets you make a list with more than just 2 Spot colours. 

Grad List also has an extensive options list format that lets you customise lists to be usable for several systems, from JAVA to CSS, from P5.js to OPENNRDR.

The primary audience is generative artists or people who must work with colour lists.

#### Essential information about the website

* Colour converter section
 	* between HEX, RGB, HSL and CSS colour names and a Colour picker
* Spot Colours section
	* Colours selected by the user plus a preview of the gradient of those colours
* List Options Section
	* Options on list formatting, colour format and colour formatting.
* Output List Section
	* Generated list plus colour swatch section


### User Stories

#### Client goals, first-time and returning visitors 


1. Converter Section
* Convert between colour formats (HEX, RGB, HSL, CSS colour names)
* Get formats from the colour picker
* Add Colour to spot colours with the "Add Colour" button

2. Spot Colour Section
* Visualise added colours
* Delete any of the spot colours
* Visualise a gradient made of spot colours

3. List Options Section
* change gradient mode
* changing gradient steps between colours
* change text before and after the list
* Change text before and after each colour

4. Your List
* visualise list
* visualise list colour swatches
* use copy Button to copy the list to the system clipboard



___

## Design

Because this app works with colours, the design must be functional. The Aesthetics can't overpower the function or, more specifically, the view of the colours.
The Shapes are simple and intuitive so that it informs the performance.

I implemented the dark and light mode, where users can test their colours against a light or dark background with the switch. All styles change with it in a very pleasing off-white and off-black.




### Colours

Because of the nature of the App, the colour has to be based on black and white, with neutral tones to support the selection of colours.

Nowadays, black and white can feel a bit dated, jarring, and painful to the eye. So I decided to have off tones for dark mode and white mode. To have a sense of sophistication and modernity.

<img src="https://raw.githubusercontent.com/antoniodegou/gradlist-mod2b/main/img/baseColours.jpg" width="60%" alt="Base Colours">


Because of form validation, I decided to rely on green for valid and red for invalid; the respective tones are slightly adjusted when in dark or white mode. Therefore, I decided to rely on the traffic light system and used yellow as the accent colour for the rest of the website.

<img src="https://raw.githubusercontent.com/antoniodegou/gradlist-mod2b/main/img/othercolours1.jpg" width="60%" alt="valid invalid dark mode">

<img src="https://raw.githubusercontent.com/antoniodegou/gradlist-mod2b/main/img/othercolours2.jpg" width="60%" alt="valid invalid light mode">



### Typography

I choose two types that are pretty contrasting with each other.
First, Clash is clean and impactful sans serif, while Sentient is more readable and it has serif.

ClashDisplay - For the Headings and general text
Sentient - for code text and warnings

Icomoon -  I used icomoon to produce a font with all the icons I needed.

![typography](https://raw.githubusercontent.com/antoniodegou/gradlist-mod2b/main/img/types.jpg)

### Wireframes

Wireframes were made with Adobe XD.

<details>
<summary>See Desktop</summary>

![Desktop Mockup](https://raw.githubusercontent.com/antoniodegou/gradlist-mod2b/main/img/mockup-laptop.jpg) 
</details>

<details><summary>See Tablet</summary> 

![Tablet Mockup](https://raw.githubusercontent.com/antoniodegou/gradlist-mod2b/main/img/mockup-mobile.jpg) 
</details>

<details><summary>See Mobile</summary> 

![Mobile Mockup](https://raw.githubusercontent.com/antoniodegou/gradlist-mod2b/main/img/mockup-tablet.jpg) 
</details>


___

## Features

### General

* A favicon and title in the browser tab.
* Web page title app
* input type switch for dark and light mode

### Sections


#### Converter:

<img src="https://raw.githubusercontent.com/antoniodegou/gradlist-mod2b/main/img/feat_converter.jpg" width="60%" alt="Converter">

The GradList app features a versatile converter section that includes five input options: Hex, RGB, HSL, CSS colours, and a colour picker. Each field has built-in form validation to ensure the correct input format. Users can easily identify valid inputs with a green tick symbol, while invalid inputs are marked with a red cross.

The Hex and RGB fields use regex patterns to screen for validation, while HSL employs a custom function. Additionally, the app checks CSS keywords against a prepopulated list using the Color-Convert API.

An event listener connects all fields, and once a valid input is detected, all other fields automatically update to the correct format. The "add colour" button is only enabled when all fields contain valid inputs.

The app updates the list of colours automatically as the user types in a field or presses the enter key. With these intuitive features, the GradList converter offers users a seamless and user-friendly experience for generating custom colour palettes.

#### Spot Colours:

<img src="https://raw.githubusercontent.com/antoniodegou/gradlist-mod2b/main/img/feat_spot.jpg" width="60%" alt="Spot Colours">

In the Spot Colour section of the website, users can view and manage the colours they have added by clicking the "add colour" button. Each colour is displayed as a swatch, with a minus button that allows users to delete the colours they no longer require.

The website also features a preview gradient div, showing users the chosen colour gradients. As users add or subtract spot colours, the preview gradient automatically updates to reflect the changes made. This feature allows users to experiment with different combinations of colours and preview the results in real time.

The Spot Colour section is a user-friendly tool enabling users to easily manage their colour selections, making it a valuable resource for designers, marketers, and other professionals who need to work with precise and consistent colours.

#### Options:

<img src="https://raw.githubusercontent.com/antoniodegou/gradlist-mod2b/main/img/feat_options.jpg" width="60%" alt="Options">


The options on the list are pretty extensive without being overwhelming.

* gradient interpolation mode

Concerns with how the colour travels on the RGB or HSL spectrum.

* before and after list

Concert with the final list and the type of text you want at the beginning and end of the list.

* list colour format

The final format of all colours of the list.
You can choose the text before and after each element of colour.
The options are HEX, RGB and HSL.

The list is updated automatically once you unfocus from the field or press enter. 
 


#### Output:

<img src="https://raw.githubusercontent.com/antoniodegou/gradlist-mod2b/main/img/feat_output.jpg" width="60%" alt="Output">
 

It shows a window with the user's final list output.

A copy button that copies the text to the clipboard so the user can paste it into their work.

The user output list is formatted with the `<pre> HTML` element to account for spaces and is easy to preview.

A circle swatch collection demonstrates all the colours of the list separately.

#### Footer

Also, an "all right reserved" text and symbol.
With the help of javascript, the year is continuously updated without the need to hardcode.

### Future Implementations

1. Have more colour formats to convert.
2. Have more colour formats in the output list.
3. Add an extra option of the user's output for the list to be Inline or Block.
4. On the spot colours section, I would like to implement a drag option where you could alter the order of the list instead of just deleting colours.


### Accessibility

* Accessibility has been considered since the inception of this project.
* I used semantic HTML.
* The buttons have a hover and disabled/abled state. 
* All the links have an Aria label.
* The colours passed the contrast test on Wave.
* I analysed with Wave and got Zero errors.
* The Form has labels.


---

## Technologies Used

### Languages

* HTML CSS and JavaScript

### libraries

* Bootstrap 5.2
* SASS 1.58

### front end tools

* ViteJS
* Visual studio code
* iTerm (terminal tool)
* Git
* GitHub
* Google Dev Tools (To troubleshoot and test features and solve issues with responsiveness and styling)
* Hoverify (responsiveness testing on several devices)
* freeformatter.com - to prettify HTML CSS and javascript files
* WAVE (accessibility testing)


### Design tools

* Adobe XD (for the wireframes)
* Adobe Illustrator (for graphic design and favicon)
* Fontshare (Fonts for the APP)
* ImageOptim (OSX app to compress images for README files)

### APIs

* Color-convert

I `Color-convert` to populate the CSS keyword with all existing css colour names.
I also used it to handle the conversion on my converter section.

[npm color-convert](https://www.npmjs.com/package/color-convert)

* Colorjs.io

I used `Colorjs.io` to calculate my gradient steps and output a list.

[ColorJS.io](https://colorjs.io/)

___

### Local Development

#### How to Fork
To fork the repository:

1. Login (or sign up) to Github.
2. Go to the repository for this project, antoniodegou/web-portfolio-mod1.
3. Click the Fork button in the top right corner.

#### How to Clone
To clone the repository:

1. Login (or sign up) to GitHub.
2. Go to the repository for this project, antoniodegou/web-portfolio-mod1.
3. Click the code button, select whether you want to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and paste the link you copied in step 3. Press enter.

#### When developing with ViteJS when cloned

##### Installing all dependencies

```
cd "folder of the project."
npm install
```

##### Getting started with live reloading
```
npm run dev
```
A link with the localhost will appear in the command line. Just click it, and you will be directed.

##### Install new dependencies

```
npm add -D "dependency"
```

##### Deploying

This will build all deployed files to the docs folder.

```
npm run build
```
You can have a preview of the website in the docs folder.
```
npm run preview
```

The deployment settings are in the "vite.config.js" file at the project's root.

___

## Testing & Bugs
See TESTING.md for the full breakdown of testing & bugs
[here](https://github.com/antoniodegou/gradlist-mod2b/blob/main/TESTING.md)

___

## Credits

1. Styling the input type "Color" is challenging, and I had to use this resource:
	* https://www.youtube.com/watch?v=9Ds6dzhda0c

2. Validation of input for hex and RGB format with the help of regular expressions
	* https://stackoverflow.com/questions/70213968/how-input-accepts-only-hex-numbers
	* https://stackoverflow.com/questions/20319781/regular-expression-to-validate-rgb-string-value

3. Understand form validation of form for javascript

	* https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/

4. Dark Mode

	* https://javascript.plainenglish.io/how-to-create-a-dark-mode-with-sass-scss-and-vanilla-javascript-e1c7835cf474

5. Style Check Box

	* https://codepen.io/mburnette/pen/LxNxNg

6. Add icons to input text as pseudo element

	* https://stackoverflow.com/questions/2587669/can-i-use-a-before-or-after-pseudo-element-on-an-input-field

7. input whole number validation

	* https://stackoverflow.com/questions/8808590/number-input-type-that-takes-only-integers

8. prevent enter keyboard key from having an effect

	* https://stackoverflow.com/questions/28411555/disable-enter-key-press-in-type-button

9. DOM manipulation

	* https://www.w3schools.com/js/js_htmldom.asp
	* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

10. Copy to the clipboard

	* https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

11. Bootstrap API

	* https://getbootstrap.com/docs/5.2/customize/components/

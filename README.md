# Bagel Shop Build and Burn

Build and rebuild each of the stories until you can do it based solely on the story label. Check out the [finished site](https://bagel-shop-fis.firebaseapp.com/) for reference. You can also see the completed code at each commit to compare with your solution. 

You can checkout specific commits to practice particular steps or start part-way through the build. These commits may not have all of the instructions, so make a copy of this file to reference or refer to the README on GitHub before you start.

## Definition Of Done

* Functional
* Styled
* Refactored
* Deployed

## API Endpoints

* `GET https://bagel-shop-fis.herokuapp.com/bagels`, returns all the bagels
* `GET https://bagel-shop-fis.herokuapp.com/bagels/1`, returns a single bagel
* `POST https://bagel-shop-fis.herokuapp.com/bagels`, returns the new record
* `PUT https://bagel-shop-fis.herokuapp.com/bagels/1`, returns nothing
* `DELETE https://bagel-shop-fis.herokuapp.com/bagels/1`, returns nothing

## Stories

### As a customer, I want to be able to identify the site

* `git checkout -b id-site e1bf2`
* Add a header and main area
* Put the name "Bagel Shop" in the header
* Identify the site as "Coming soon!" in the main area
* Reset the browser styles
* Set the body typeface to Montserrat
* Style the header
* Style the main area
* Initialize a deployment
* Commit changes and merge to master
* Do a production build
* Deploy the site

### As a customer, I want to see a list of bagels

* `git checkout -b list-bagels 72371`
* Create a section for the bagels with the heading "Bagels"
* Create a hard-coded list of bagels inside the section with types and ratings
* Style the list of bagels as cards
* Move the list of bagels to state and iterate through it
* Fetch the list of bagels from the appropriate endpoint, filter out any null types or ratings, and set state with it
* Move the list of bagel elements to a `BagelList` component
* Move the individual bagel elements to a `BagelListing` component
* Commit changes and merge to master
* Do a production build
* Deploy the site

### As an admin, I want to add bagels to the list

* `git checkout -b add-bagels a951f`
* Create a new bagel section at the bottom of the `App` component with the heading "Add a new bagel"
* Add a form to the bottom of the new section that accepts a type and a rating between 1 and 10
* Bind the form values to state
* Make the forms update state
* When the form is submitted, post the bagel data to the correct endpoint, add the returned bagel to state, and reset the form
* Style the form to make give the inputs a consistent size and padding
* Make the form render conditionally when a `+` button is clicked at the bottom of the form
* When the form is rendered, change the `+` to a `-`
* Style the toggle button as a circle
* When a form is submitted, hide the form
* Move the form and any styles into a `BagelForm` component
* Commit changes and merge to master
* Do a production build
* Deploy the site

### As a customer, I want to filter the list of bagels based on a search term

* `git checkout -b filter-bagels 01f1c`
* Add a form above the bagel list with a single text input with the placholder text "Find bagel" and no submit button
* Binding the input's value to state and update state on input change
* Create a computed property for filtered bagels that only returns bagel names _or_ ratings that include the value of the input 
* Pass the computed property into the `BagelList` component instead of all the bagels
* Style the input to be visually consistent with the inputs on the new bagel form
* Extract the form into a component called `BagelFilter`
* Commit changes and merge to master
* Do a production build
* Deploy the site

### As an admin, I want to be able to delete bagels

* `git checkout -b delete-bagels c40ef`
* Add a glyph library to the app
* Add a cross icon to each bagel listing
* When the icon is clicked, delete the bagel from the server and state
* The cross should start grey, and turn red on hover
* Commit changes and merge to master
* Do a production build
* Deploy the site

### As a customer, I want to be able to edit bagels

* `git checkout -b edit-bagels 36608`
* Add an edit icon to the left of the cross icon on each bagel listing
* When the icon is clicked, toggle rendering the `BagelForm` component inside the listing
* Modify the `BagelForm` component as follows:
    * It should accept optional default values as props and set them to state on mount
    * It should accept a dynamic label for the submit button and pass in "Edit" in the bagel listing and "Add" in the new bagel form
* When the edit form is submitted, it should make the appropriate API call and update state, as well as closing the edit form
* Style the pencil icon to be grey, blue on hover, and blue while the edit form is showing
* Commit changes and merge to master
* Do a production build
* Deploy the site

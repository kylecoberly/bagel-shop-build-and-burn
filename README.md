# Bagel Shop Build and Burn

Build and rebuild each of the stories until you can do it based solely on the story label.

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
* Commit changes and merge to master
* Initialize a deployment
* Do a production build
* Deploy the site

### As a customer, I want to see a list of bagels

### As an admin, I want to add bagels to the list

### As a customer, I want to filter the list of bagels based on a search term

### As an admin, I want to be able to delete bagels

### As a customer, I want to be able to edit bagels


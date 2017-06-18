# Setup

### Node App

#### Requirements
- Node (>= v8.0.0)
- npm (>= 5.0.0)
- nodemon (optional)

#### Starting the app

##### Install dependencies (once)
```
    $ npm install
```

##### Start with npm

```
    $ npm start
```

##### Start with npm + watcher

```
    $ npm run start-watch
```

##### Start with node

```
    $ node bin/www
```

The application will start on port 3000 by default, you can change it by setting
the PORT environment variable

# Node.js & AngularJS practice app

Fork this repository and commit to your repository

Create a node.js express app to render using nunjucks template system.
When finished, create the same app in angular js 1.x

For styling, you should use basic Bootstrap 3.

# General template

```
GIVEN a user is on any page
THEN show a menu with two links: Products, Contact
```

All pages should include a menu

# Products Page

```
GIVEN a user is on the Products Page
THEN list product titles
```

```
GIVEN a user clicks on a product title
THEN redirect them to product details page
```

Tehnical Note:

You can retrieve the products from products.json

# Product details

```
GIVEN a user is on a product details page
THEN show product image, title and description
```

# Contact Page

```
GIVEN a user is on the contact page
THEN show the user a form with : First Name, Last Name, Message
```

```
GIVEN a user is on the contact page
AND users cliks the submit button
THEN log the form details to console
```

# Project Exam 2 - Holidaze

![image](https://res.cloudinary.com/dhd2paq70/image/upload/v1654681030/holidaze_x4owk1.jpg)

Screenshot of the projects hero at the homepage.

## Description

Holidaze is an accomodation booking site for a local tourist
agancy located in Bergen, Norway. The site is coded with React based
on React-Bootstrap components and styled using Sass. The site
has a customer facing side with booking functionality, and a
admin section that can be accessed with the use of JWT tokens.
In the admin section, contact and booking enquiries can be
handled as well the option to add new establishments.

The WP WooCommerce API is used for the establishments, customer reviews and authentication, while an
API from Strapi hosted on Heroku is used to store and fetch data
from booking- and contact enquiries. In addition a Google Maps API is used to fetch live map data from hotel addresses.

This project is an assignment from Noroff's Frontend course second year and was delivered in May 2022. The timeframe was 7 weeks, and the project requirements are listed in the next section.

#### Sign in as admin:

- Username: 7oiden
- Password: Exam_4060

<hr/>

## Assignment requirements:

### Customer side

- Homepage
- Searchbar typehead
- A results page with all hotels
- The hotel specific page which displays all details about the hotel
- An enquiry page, either modal or separate page
- A contact page which goes to the admin

### Admin side

- Create a login section that makes use of JWT tokens
- List of enquiries and new enquiries appear when users submits the form on the enquiry page
- List of messages from the contact form
- The admin can create a new establishment.

<hr/>

## Built With

You can list a the tech stack that you've used over here

- [React.js](https://reactjs.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Sass](https://sass-lang.com)

## API

### Created with

- [Strapi](https://strapi.io)
- [Wordpress](https://wordpress.com)
- [WooCommerce (WP plugin)](https://woocommerce.com)
- JWT Authentication (WP plugin)

### Map API

- [Google Maps Platform](https://developers.google.com/maps)

### Strapi database hosted on

- [Heroku](https://heroku.com)

## NPM packages

- HTTP client: [Axios](https://axios-http.com/docs/intro)
- Routing: [React Router](https://reactrouter.com/)
- Components: [React-Bootstrap](https://react-bootstrap.github.io/)
- Styling: [Node Sass](https://www.npmjs.com/package/node-sass)
- Array utilities: [Loadash](https://lodash.com/)
- Form validation: [React Hook Form](https://react-hook-form.com/)
- Form valdidation: [Yup](https://github.com/jquense/yup)
- Date formatting: [Moment](https://momentjs.com/)
- Icons: [Font Awesome](https://fontawesome.com/v5/docs/web/setup/use-package-managers)
- Icons: [Material Design Icons](https://materialdesignicons.com/)

## Getting Started

### Installing

This is where you list how to get the project started. It typically just includes telling a person to clone the repo and then to install the dependencies e.g.

1. Clone the repo:

```bash
git clone git@github.com:Noroff-FEU-Assignments/project-exam-2-7oiden.git
```

2. Install the dependencies:

```
npm install
```

### Running

To run the app, run the following commands:

```bash
npm run start
```

## Contact

Get in touch at [LinkedIn](https://www.linkedin.com/in/tommy-j-16b56678/)

## Acknowledgments

Thanks to my fellow student Dennis Alekseev for performing a code review of my code.

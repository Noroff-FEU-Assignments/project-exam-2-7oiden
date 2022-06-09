# Project Exam 2 - Holidaze

![image](https://res.cloudinary.com/dhd2paq70/image/upload/v1654681030/holidaze_x4owk1.jpg)

Image of the sites hero at the homepage.

## Description

Holidaze is an accomodation booking site for a local tourist
agancy located in Bergen, Norway. The site is coded with ReactJS based
on React Bootstrap components and styled using Sass. The site
has a customer facing side with booking functionality, and a
admin section that can be accessed with the use of JWT tokens.
In the admin section, contact and booking enquiries can be
handled as well as adding new establishments.

The WP WooCommerce API is used for the establishments, customer reviews and authentification, while a
API from Strapi hosted on Heroku is used to store and fetch data
from booking- and contact enquiries. In addition a Google Maps API i used to fetch live map data from hotel addresses.

#### Sign in as admin:

- Username: 7oiden
- Password: Exam_4060

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

## Built With

You can list a the tech stack that you've used over here

- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)
- [Sass](https://sass-lang.com)

## API

### Created with

- [Strapi](https://strapi.io)
- [Wordpress](https://wordpress.com)
- [WooCommerce (WP plugin)](https://woocommerce.com)
- JWT Authentication (WP plugin)

### Strapi database hosted on

- [Heroku](https://heroku.com)

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

Get in touch at:

[LinkedIn](https://www.linkedin.com/in/tommy-j-16b56678/)

## Acknowledgments

Thanks to Dennis Alekseev for performing a code review of my code.

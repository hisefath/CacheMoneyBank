# Banking Portal with Node & Express

Live at: http://cachemoneybank.herokuapp.com/
Simple Banking Portal with Node & Express. There are seven different routes that will include index, profile, savings, checking, credit, transfer and payment. Used EJS for view engine. Used Express router to make the application more modular. Used JSON files for current DB.

---

# Setup

## Installation

Run the following command from root folder of the cloned project to install all dependencies.

`npm install`

## Serve on Localhost

Run `npm start` to start the application, and when you visit `http://localhost:3000` in a browser, you should see your components rendered.

## Alright bois this branch is a complete make over of this app, using MERN stack

------
------
------
------
------

## DevNotes
*I'm working on a Mac*
But to get started: 
1. I'm using 
- MongoDB shell version v4.2.8
- Express v
- Angular 10.0.1
2. This is how my directory and files look now
```
.
├── README.md
├── app.js
├── client
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── serviceWorker.js
│       └── setupTests.js
├── package-lock.json
├── package.json
└── routes
    ├── index.js
    └── users.js

4 directories, 23 files
```
//react front end, express node backend
3. Lets make some simple react components, as our main goal right now is to just get passport authentication working.
```
src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components
    │   ├── Dashboard.jsx
    │   ├── Login.jsx
    │   ├── Profile.jsx
    │   └── Signup.jsx
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```
4. Need two packages, react router dom, and axios in client folder
```
npm install react-router-dom axios --save
```
5. In passportjs, theres different strategies offered for atuhentication. we'll be installing local first only. But the way im setting up my directory, i can implement multiple new strategies in the future. Also make sure to have the og npm passport package so these stragetegies be implemented. Lastly we'll be using cookie sessions over express session to not store any states in our server. 
```
npm install passport cookie-session passport-local -S

https://www.npmjs.com/package/passport
http://www.passportjs.org/packages/passport-local/
https://www.npmjs.com/package/cookie-session
```
6. Created a passport folder where all of our passport implementation will exist, in one place. Benifit is it's modular a movable into other projects

7. Since i'll be authenticating users, I need a db to post to so I can store those users. I'll be using mongodb and mongoose. With this comes my .env file to keep my secret info secret.
```
npm install mongoose
npm install dotenv --save-dev
```






------
------
------
------
------
## App Idea Notes
1. Need db to hold users for sure, but since this is cache money bank, I need my user schema to be hold a couple things:
  {
    "email": "doublescoop@strawberry.com",
    "password": "42PSherman,WallabyWay,Sydney",
    "accounts": [ 
        { //checking, savings, credit acc_ids to be appended }
        ],
    "subscriptions": [ 
        { //daily coffee, amazon prime, spotify, etc to be appended }
        ]
  }

2. The idea is to have users log into a virtual bank that also tells them small financial advice as a feature. they put in things like "coffee" as a subscription and get back their weekly, monthly, annual savings if they used alternatives

3. Sefath pls make that script that takes your liked songs from spotify and does a youtube to mp3 and saves it to your itunes library. The people need this. Once my spotify 3-month trial is up, I need this T_T
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Steps to execute the application

1. Install node 12.13.0 and greater
2. Run npm install
3. Run npm run start
4. Open http://localhost:3000/

## Features Implemented

1. Movie dashboard when You Open the homepage.
2. Click on a a particular movie to see the characters in the movie.
3. Search through the movies with the search bar and select the movies with keyboard/mouse.
4. Autocomplete feature enabled on search bar
5. Once you click on the movie after selection, share the link from the browser to anyone.

## Code structure and libraries used

1. Tailwind css as it is a utility first framework and provides faster development and optimized for production
2. Created a separate helper calls for api calls using native fetch api
3. Used context and useReducer for state management
4. Created a common library - createDataContext.js which returns context and provider component
5. Created hooks for reuse of code across components
6. State of the application is preserved by loading the data required for the component in the component itself instead of depending on the value passed to the component.
7. A simple UI with all the required data shown in a same page to give a good user experience.
8. Implemented Unit tests to test user behaviour. Run **npm run test** to execute unit test cases

## Improvements

1. Adding Accessibility for the component as per guidelines
2. Adding more unit test cases using react testing library to test the user behaviour
3. Increase search performance with throttling and debouncing
4. Make the page more responsive by showing the character details below the movie for smaller screens

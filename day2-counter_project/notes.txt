In the day 2 of learning react, we are coming across the concept of React hooks

//clone this repo before moving further
install the node modules before running the project 
cmd- npm install (or) npm i

React hooks are functions that let you use state and other react features in functional components
like useState, useEffect and so many, we will be discussing all of them one by one

this project deals with only useState

What is useState?
useState is a hook that allows you to add state to your functional components.
In React, state refers to data that can change over time, like form inputs, counters, or fetched data. When state changes, the component re-renders to reflect the updated data.

How Does useState Work?
It’s a function that returns an array with two values:
  1. The current state value: What’s the current value of your state?
  2. A function to update the state: How do you change the state?

You always call useState() at the top level of your component, and it needs an initial state.


Go through the code of App.jsx for better understanding
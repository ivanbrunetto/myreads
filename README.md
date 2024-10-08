# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course. 

## App Functionality

The main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. The default value for the control is the current shelf the book is in.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. 

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

## Backend Server

This project is using a backend server provided by Udacity, which comes with some limitations:

- the list of available books for searching is fixed
- the server uses a fixed set of cached results, so the serach is limited to a particular set of terms
- the data is not persisted (saved); your shelfes come with a fixed set of books which you may change, but the changes will be lost after starting the app again (or just refreshing the page)

## Starter Code

The project is based on the starter code provided [here](https://github.com/udacity/nd0191-c1-myreads/). It contains all the required CSS, HTML and backend server API code. 

## Prerequisites

1. Node & npm

## Installing

1. `cd` into project root folder 
2. `npm install` (install dependencies)
3. `npm start` (build and start development server)

For more development commands, run `npm run`

## Author

Ivan E. Brunetto
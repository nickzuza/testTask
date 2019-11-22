
# Code test app
Build an editing form for an initiative.

* Fake API
    * Program the form against the fake API (/src/fakeApi)
    * Read data with the query function
    * Update data with the mutation function
* Project setup
    * There's a boiler plate project setup with create-react-app ./fake-app
    * Feel free to use it or your own boiler plate if you prefer

## Form considerations
Just pick 1-3 of the below depending on how much time you have and what you find interesting.

* UX - can you make the form pretty and feel good?
* Validation - can we set validation rules on form?
    * E.g. name is required and should between 4 and 30 alphanumeric characters
    * E.g. comment cannot have more than 100 characters
* Error handling - what happens if the API breaks?
    * E.g. returning a rejected promise
* Editing state - can we track the overall state of the form?
    * E.g. If user has manipulated data (pristine/dirty)
    * E.g. Track if data is loading or if form is submitting
    * E.g. Give user ability to reset the form

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

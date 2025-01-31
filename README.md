# Next.js 15: Runtime Error Importing JSON File in a Page

This repository demonstrates a common runtime error encountered in Next.js 15 applications when attempting to import a JSON file within a page component.  The issue arises from the way Next.js handles static and dynamic imports.  The solution highlights the appropriate method for importing JSON data and explains the underlying cause.

## Bug Description

The provided `about.js` file attempts to import a local JSON file (`data.json`). This approach causes a runtime error in Next.js 15 because it incorrectly uses `require`, which is not handled properly in the client-side rendering context.

## Solution

The `aboutSolution.js` file shows the correct method for importing and using the JSON data within the page component.  The key is to leverage asynchronous functions (like `async/await`) and the native `fetch` API, or import JSON data as a JavaScript module.  This ensures that the JSON data is correctly fetched and processed.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Navigate to `/about`. You'll observe the runtime error in the console unless you switch to the solution.

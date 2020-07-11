# Meal Decider

A widget for deciding what to eat.

### Description

When you live with multiple people, deciding what to eat can be a hassle, especially if you are busy. Using this simple Chrome extension, you can poll your family and friends for meal options and preferences.

### Usage

This was created using `create-react-app` and is non-ejected, so be wary of creating multiple files with React code. 

To install dependencies, execute:
`yarn install`
To deploy to production, execute:
`yarn build`
This can be deployed to Chrome and other Chromium-based browsers by navigating to `chrome://extensions` and choosing to "Load unpacked." Simply drag and drop your build folder to deploy.

### Building from scratchcd 

To build this from scratch, run:
`yarn create react-app <appname> --template typescript`.

Then, copy the manifest.json from this repository and replace the auto-generated one.

Then, to avoid errors, prepend `INLINE_RUNTIME_CHUNK=false` to the build command in package.json. 
# Football Fan Application

Minimal template of a [React Native](https://facebook.github.io/react-native/) project with [Typescript](https://www.typescriptlang.org/).

> **This project has been updated but the Medium guide has not**. Please, use this repository as reference.

> Recommended usage with [VSCode](https://code.visualstudio.com/)

## Getting Started

* Requirements: [Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com/)

Clone this repository:

```sh
git clone https://github.com/vitivan/FootballFan.git
cd FootballFan
```

Install dependencies:

```sh
yarn
```

Start React Native server:

```sh
yarn start
```

Build the source-code with Typescript:

```sh
# Build once
yarn run build

# Build and watch for changes
yarn run build -- --watch
```

### iOS

```sh
yarn run ios
```

### Android

```sh
yarn run android
```

## Testing

This project uses Typescript + Jest. Run the test suite with:

```sh
yarn test
```

# How to run application in dev mode

quick run all things together:
# One terminal for build and watch for changes
npm run build -- --watch
# Other terminal to run the development server
npm start
# Other terminal to run android/ios
npm run android

for app update on device emulator tap twice on R button

#  run Android device emulator
emulator -avd Nexus_5X_API_25 -netdelay none -netspeed full

# check devices list
emulator -list-avds

# TEMPORARY FIXES:
1. in types react-redux:
export class Provider extends React.Component<ProviderProps, {}> { }







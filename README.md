# Modern Angular Boilerplate

Currently reworking the [Angular CLI](https://github.com/angular/angular-cli) build of Angular to utilise modern and non-deprecated technologies.

The technologies this boilerplate will use are:

- [Jest](https://github.com/facebook/jest) for executing unit tests.
- [Cypress](https://github.com/cypress-io/cypress) and [Playwright](https://github.com/microsoft/playwright) for executing end-to-end tests.
- [TailwindCSS](https://github.com/tailwindlabs/tailwindcss) for styling.
- [NX](https://github.com/nrwl/nx) to scale our Angular apps.

> NOTE: This is a personal implementation of how I would setup and begin building an Angular application.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via Jest.

## Running end-to-end tests

Run `npm test:e2e` to execute the end-to-end tests via Cypress.

> Currently investigating Playwright as an alternative for executing e2e tests, as it suppports Safari and Cypress does not.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

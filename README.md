# Website Uptime Monitor API

## Overview
This repository contains the API for a Website Uptime Monitor project. The purpose of this project is to develop a robust and efficient API for monitoring the uptime of websites. This tool will provide users with the ability to track the availability and performance of their websites over time. The API is designed to connect with a React/Next.js project, which can be found here: [Uptime Project](https://github.com/tdarrow7/uptime-project).

## Current State
As of now, the project has been transitioned to TypeScript to enhance code quality and maintainability. The API's structure includes:

- An Express server setup (`app.ts`).
- TypeScript integration, with a `tsconfig.json` configured for the project.
- Firebase utility functions (`firebase.ts`) to interact with Firestore for CRUD operations.
- Express routes (`posts-routes.ts`) to handle API requests.
- A model (`WebsiteStatus.ts`) representing website data including status, outages, uptime, and downtime.
- Controller functions (`posts-controllers.ts`) for handling the business logic of API requests.

The foundational files set the stage for the development of a full-fledged API, focusing on scalability and reliability for effective website uptime monitoring.

## TypeScript Conversion
The project has been converted to TypeScript to provide type safety and improve the development experience. This shift includes:

- Adding TypeScript as a development dependency.
- Creating and configuring a `tsconfig.json` file.
- Refactoring all JavaScript files to TypeScript with appropriate type annotations and module imports/exports.

## Development and Contributions
This project is currently in the early stages of development. We are laying the groundwork for the core functionalities that will define our uptime monitoring service. Contributions and suggestions are welcome as we expand and refine the project.

## Integration with React/Next.js Project
The API will be used in conjunction with a React/Next.js frontend. The frontend application is responsible for presenting the data in a user-friendly manner and will interact with this API to manage and display website uptime information. For more details on the frontend application, please visit the [Uptime Project repository](https://github.com/tdarrow7/uptime-project).

## Future Updates
This README will be updated as the project progresses and becomes more fleshed out. Stay tuned for more details on the features, usage instructions, and the overall architecture of the Website Uptime Monitor API.

Thank you for your interest in our Website Uptime Monitor API project!

---

*This README is a work in progress and will evolve alongside the project.*

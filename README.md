# Website Uptime Monitor API

## Overview
This repository contains the API for a Website Uptime Monitor project. The purpose of this project is to develop a robust and efficient API for monitoring the uptime of websites. This tool will provide users with the ability to track the availability and performance of their websites over time. The API is designed to connect with a React/Next.js project, which can be found here: [Uptime Project](https://github.com/tdarrow7/uptime-project).

## Current State
The project has transitioned to TypeScript for enhanced code quality and maintainability. The API's structure now includes:

- An Express server setup (`app.ts`).
- TypeScript integration, with a configured `tsconfig.json`.
- Firebase utility functions (`firebase.ts`) for CRUD operations with Firestore.
- Express routes (`monitors-routes.ts`) to handle API requests.
- The `WebsiteStatus` model (`monitors.ts`) for representing website data, including status, outages, uptime, and downtime.
- Separated controller functions in the `api\v1\monitors\controllers` directory, handling specific parts of the API logic.

These foundational files set the stage for developing a comprehensive API, focusing on scalability and reliability for effective website uptime monitoring.

## TypeScript Conversion
The project's conversion to TypeScript brings type safety and an improved development experience. This transition includes:

- Adding TypeScript as a development dependency.
- Creating and configuring a `tsconfig.json` file.
- Refactoring all JavaScript files into TypeScript, with appropriate type annotations and module imports/exports.

## Reorganization and Modularization
The API's codebase has been reorganized for better modularity and maintainability:

- Controllers have been separated into individual files for specific functionalities (Create, Read, Update, Delete).
- The directory structure has been adjusted to reflect this modular approach, promoting easier navigation and maintenance.

## Development and Contributions
Currently in the early development stages, we are laying the groundwork for the core functionalities of our uptime monitoring service. Contributions and suggestions are welcome as we expand and refine the project.

## Integration with React/Next.js Project
The API will be used in conjunction with a React/Next.js frontend. This frontend application will present data in a user-friendly manner and interact with the API to manage and display website uptime information. For more details on the frontend application, please visit the [Uptime Project repository](https://github.com/tdarrow7/uptime-project).

## Future Updates
This README will be updated as the project progresses. Stay tuned for more details on features, usage instructions, and the overall architecture of the Website Uptime Monitor API.

Thank you for your interest in our Website Uptime Monitor API project!

---

*This README is a work in progress and will evolve alongside the project.*

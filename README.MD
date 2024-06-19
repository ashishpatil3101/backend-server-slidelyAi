# Form Submission API

## Overview

This API provides endpoints for handling form submissions. It allows users to submit form data, read existing submissions, and delete submissions. Submissions are stored in a JSON file (`db.json`).

## Getting Started

Follow these instructions to set up and run the API on your local machine.

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ashishpatil3101/backend-server-slidelyAi
    cd backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create the `db.json` file:**

    Create a `db.json` file in the root(src/db.json) directory and initialize it with an empty array `[]`.

4. **Start the server:**

    ```bash
    npm start
    ```

   The server will start on `http://localhost:3000`.

## API Endpoints

### Ping

- **URL**: `/ping`
- **Method**: `GET`
- **Description**: Checks if the server is running.

### Submit a Form

- **URL**: `/submit`
- **Method**: `POST`
- **Request Body**:
    ```json
    {
      "Name": "John Doe",
      "Email": "john.doe@example.com",
      "Phone": "1234567890",
      "GithubLink": "https://github.com/johndoe",
      "StopwatchTime": 120
    }
    ```
- **Description**: Submits a form with `Name`, `Email`, `Phone`, `GithubLink`, and `StopwatchTime`. Validates inputs and stores the submission in `db.json`.

### Read a Submission

- **URL**: `/read?index=<index>`
- **Method**: `GET`
- **Query Parameters**:
    - `index`: Index of the submission to retrieve.
- **Description**: Retrieves a submission from `db.json` by index.

### Delete a Submission

- **URL**: `/delete?index=<index>`
- **Method**: `DELETE`
- **Query Parameters**:
    - `index`: Index of the submission to delete.
- **Description**: Deletes a submission from `db.json` by index.



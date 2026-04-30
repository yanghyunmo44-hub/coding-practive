# Blueprint: Password Leak Checker

## Overview

This project is a simple web application that allows users to check if their password has been compromised in a data breach. It uses the "Have I Been Pwned" (HIBP) API to securely check for password leaks without exposing the password itself.

## Features

*   **Password Input:** A secure input field for users to enter the password they want to check.
*   **Secure Checking:** The password is not sent to any server. Instead, it is hashed locally in the browser using the SHA-1 algorithm. Only the first 5 characters of the hash are sent to the HIBP API.
*   **Result Display:** The application will display a clear message indicating whether the password has been found in any known data breaches.

## Design

*   **Layout:** A clean and simple single-page layout with a clear heading, an input field, a button, and a result area.
*   **Styling:** Modern and visually appealing design with a focus on usability and clarity.
*   **Responsiveness:** The layout will be responsive and work well on both desktop and mobile devices.

## Current Plan

1.  **Modify `index.html`:**
    *   Update the title and add a descriptive heading.
    *   Create a form with a password input field, a button, and a container to display the results.
2.  **Modify `main.js`:**
    *   Implement the logic to hash the password using the Web Crypto API (SHA-1).
    *   Use the `fetch` API to query the "Have I Been Pwned" API with the first 5 characters of the hashed password.
    *   Process the API response to determine if the full password hash is present in the returned list.
    *   Display the result to the user.
3.  **Modify `style.css`:**
    *   Apply styles to create a visually appealing and user-friendly interface.

# Blueprint: Password Leak Checker

## Overview

This project is a simple web application that allows users to check if their password has been compromised in a data breach. It uses the "Have I Been Pwned" (HIBP) API to securely check for password leaks without exposing the password itself.

## Features

*   **Password Input:** A secure input field for users to enter the password they want to check.
*   **Secure Checking:** The password is not sent to any server. Instead, it is hashed locally in the browser using the SHA-1 algorithm. Only the first 5 characters of the hash are sent to the HIBP API.
*   **Result Display:** The application will display a clear message indicating whether the password has been found in any known data breaches.
*   **Theme Toggle:** A button to switch between Dark Mode and Light Mode, with user preference saved in local storage.
*   **Ad Placement:** Dedicated areas (placeholders) for banner or text ads at the top and bottom of the main content.

## Design

*   **Layout:** A clean and simple single-page layout with a clear heading, an input field, a button, and a result area.
*   **Theme Management:** Use CSS variables to manage colors for both Dark and Light modes.
*   **Ad Sections:** Stylized placeholders for advertisements that blend with the theme but remain distinct.
*   **Responsiveness:** The layout will be responsive and work well on both desktop and mobile devices.

## Current Plan

1.  **Modify `index.html`:**
    *   Add a theme toggle button in the header or top corner.
    *   Add ad placeholder containers (e.g., `#top-ad`, `#bottom-ad`).
2.  **Modify `style.css`:**
    *   Refactor color styles to use CSS variables defined in `:root` and a `.light-mode` class.
    *   Style the theme toggle button and ad placeholders.
3.  **Modify `main.js`:**
    *   Add theme switching logic.
    *   Save and load the theme preference from `localStorage`.

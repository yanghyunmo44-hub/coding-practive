# Blueprint: Password Leak Checker (AdSense Optimized)

## Overview

This project is a high-quality web application designed to help users check password compromises while providing educational content on cyber security. It is optimized for Google AdSense approval by focusing on original content, clear navigation, and professional UX.

## Features

*   **Secure Password Checker:** Local SHA-1 hashing, HIBP API integration.
*   **Theme Toggle:** Dark/Light mode persistence.
*   **Google Analytics Integration:** Tracking user engagement with gtag.js.
*   **AdSense Ready Layout:** Optimized ad slots (Top, Mid, Bottom, Sidebar).
*   **Content Richness:** 
    *   **Security Blog/Tips:** Detailed articles on creating strong passwords.
    *   **FAQ Section:** Common questions about password security.
*   **Navigation & Structure:** Professional header and footer with essential links.
*   **Compliance:** Placeholders for Privacy Policy, Terms of Service, and Contact info.

## Design Strategy (High-Quality Standards)

1.  **Professional Typography:** Use expressive and readable fonts with clear hierarchy.
2.  **Visual Depth:** Use multi-layered shadows and subtle textures for a premium feel.
3.  **Content-First Layout:** Ensure text content is prominent and well-structured, not just a single tool.
4.  **Interactive Elements:** Elegant buttons, hover effects, and smooth transitions.
5.  **Mobile First:** 100% responsive design across all devices.

## Current Plan (Blogger Theme Integration & Fix)

1.  **Modify `blogger-theme.xml`:**
    *   Reconstruct the corrupted file with a valid Blogger XML structure.
    *   Add `<b:all-head-content/>` to the `<head>` section.
    *   Add a `<b:section>` tag at the beginning of the `<body>`.
    *   Include the Google Analytics tag in the `<head>`.
2.  **Update HTML Files:**
    *   Add Google Analytics tag to `index.html`, `guide.html`, `faq.html`, and `partnership.html`.

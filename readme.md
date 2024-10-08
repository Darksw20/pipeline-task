# Pipeline-Task

## Overview
This project, "pipeline-task", implements a payment processing pipeline for buying Bitcoin (BTC) using USD, EUR, or GBP. The system ensures a secure transaction flow, including user authentication, data validation, and session management using cookies. Built with Node.js and Express, it integrates middleware such as `cookie-parser` for handling cookies, `cors` for cross-origin resource sharing, and `express-session` for session management.

## Features
- **User Authentication**: Secure authentication and session management.
- **Currency Conversion**: Converts BTC to a base currency using API calls.
- **Transaction Recording**: Stores transaction details in a database.

## Prerequisites
- Node.js (Preferably the latest stable version)
- npm (Node Package Manager)

## Installation
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Darksw20/pipeline-task.git]
   cd pipeline-task

2. **Install dependencies:**
   ```bash
    npm install

3. **Run the server:**
    ```bash
    npm start

4. **Dependencies:**
    - cookie-parser
    - cors
    - express
    - express-session
    - mysql2
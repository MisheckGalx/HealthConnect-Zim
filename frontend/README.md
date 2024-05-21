# HealthConnect Zim - Frontend

Welcome to the frontend repository of HealthConnect Zim, a web application aimed at connecting communities in Zimbabwe to quality healthcare through technology.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

HealthConnect Zim is designed to bridge healthcare gaps in Zimbabwe, particularly in rural areas, by providing access to telemedicine services, mobile health apps, and electronic health records. This frontend application serves as the user interface for the platform, ensuring a seamless and user-friendly experience for all users.

## Technologies Used

- **Languages**: HTML, CSS, JavaScript
- **Frameworks and Libraries**: React (for building user interfaces)
- **Tools**: Git (for version control), GitHub (for collaboration)

## Getting Started

Follow these steps to set up the frontend project locally on your machine.

### Prerequisites

- Node.js and npm installed on your machine. You can download and install them from [Node.js](https://nodejs.org/).
- Git installed on your machine. You can download and install it from [Git](https://git-scm.com/).

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/healthconnect-zim-frontend.git
    cd healthconnect-zim-frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm start
    ```

    This will start the development server and open the application in your default web browser. The app will be running at `http://localhost:3000`.

## Directory Structure

Here's an overview of the directory structure for the project:

```plaintext
healthconnect-zim-frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Contact.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── styles/
│       ├── main.css
│       └── ...
├── .gitignore
├── package.json
├── README.md
└── ...

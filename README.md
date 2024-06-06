# Product Listings App

### NOTE : Since NextJS 14 supports SSR and SSG functions only in Pages router, so Pages router is being used here instead of App router. App router does have SSR and SSG by default and we can implement it using async functions and fetch() method but this project is built using Pages router to show demonstration of getServerSideProps and getStaticPaths to implement SSR and SSG.

## Introduction

Welcome to the Product Listings App! This application provides a clean and user-friendly interface for browsing and searching products fetched from the Fake Store API. The app supports dark and light modes and offers server-side rendering (SSR) and static site generation (SSG) for optimal performance.

## Features

- **Server-Side Rendering (SSR)**: Ensures that the product listing pages are pre-rendered on the server for better performance and SEO.
- **Static Site Generation (SSG)**: Pre-renders product detail pages at build time for faster load times.
- **Responsive Design**: Optimized for all devices, including desktops, tablets, and mobile phones.
- **Dark/Light Mode**: Toggle between dark and light themes for a personalized user experience.
- **shadcn Components**: Utilizes shadcn UI components for a consistent and modern design.
- **Search Functionality**: Easily search for products using the integrated search bar.

## Tech Stack

- **Next.js**: Framework for server-rendered React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **shadcn UI**: Component library for modern UI elements.
- **Fake Store API**: Source of product data.

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/product-listings-app.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd product-listings-app
   ```

3. **Install dependencies**

   ```bash
   yarn install
   ```

4. **Run the development server**

   ```bash
   yarn dev
   ```

   The app should now be running at [http://localhost:3000](http://localhost:3000).

## Usage

### Dark Mode

Toggle the dark mode by clicking on the "Light Mode"/"Dark Mode" button in the navbar.

### Search Functionality

Use the search bar at the top of the product listing page to search for specific products.

## Project Structure

- **`pages/`**: Contains the Next.js pages.
  - **`index.js`**: Home page listing the features.
  - **`products/`**: Contains product listing and detail pages.
- **`components/`**: Contains reusable React components.
  - **`Navbar.js`**: Navigation bar component.
  - **`InputWithButton.js`**: Search bar component.
- **`styles/`**: Contains the global styles and Tailwind CSS configuration.
- **`DarkModeContext.js`**: Context for managing dark mode state.

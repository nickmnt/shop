# Shop - Ecommerce Store Project

## 📷 Screenshots

<details>
  <summary>Screenshots (Hidden) - Click to open!</summary>
  <img src="https://github.com/nickmnt/shop/blob/main/screenshots/Intro.png?raw=true" alt="Screenshot"></img>
  <img src="https://github.com/nickmnt/shop/blob/main/screenshots/Products1.png?raw=true" alt="Screenshot"></img>
  <img src="https://github.com/nickmnt/shop/blob/main/screenshots/Products2.png?raw=true" alt="Screenshot"></img>
  <img src="https://github.com/nickmnt/shop/blob/main/screenshots/ProductInfo.png?raw=true" alt="Screenshot"></img>
  <img src="https://github.com/nickmnt/shop/blob/main/screenshots/Cart.png?raw=true" alt="Screenshot"></img>
  <img src="https://github.com/nickmnt/shop/blob/main/screenshots/Checkout1.png?raw=true" alt="Screenshot"></img>
  <img src="https://github.com/nickmnt/shop/blob/main/screenshots/Checkout2.png?raw=true" alt="Screenshot"></img>
  <img src="https://github.com/nickmnt/shop/blob/main/screenshots/Checkout3.png?raw=true" alt="Screenshot"></img>
</details>

## Summary

Shop is an open-source ecommerce store project built using React.js, .Net 6, and TypeScript. It utilizes various libraries and technologies such as Redux, Material-UI, Stripe, Axios, Formik, React-Router, and Sass to provide a feature-rich and customizable ecommerce platform.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)

## Features

- User authentication and account management
- Product catalog with detailed product pages
- Shopping cart functionality
- Secure checkout process using Stripe
- User-friendly navigation with React-Router
- Extensive admin panel functionality
- Managing orders after payment
- Responsive design with Material-UI

## Demo
Live demo available at **[Hosted Demo](https://shop-wyq1.onrender.com/)**.  

**Note:** Please be patient and expect a delay in loading time as the cloud provider's cold start process caused by periods of inactivity takes some time.

## Installation
To run Shop locally on your machine, follow these steps:

1. Clone the repository:
   ```shell
   git clone https://github.com/nimamt/shop.git
   ```

2. Navigate to the project directory:
   ```shell
   cd shop
   ```

3. Start the .Net 6 back-end:
   ```shell
   dotnet run --p API
   ```

4. Navigate to the front-end client project directory:
   ```shell
   cd client-app
   ```

5. Enable legacy peer deps:
   ```shell
   npm config --location=project set legacy-peer-deps=true
   ```
   
6. Install dependencies using npm:
   ```shell
   npm install
   ```

7. Start the React app:
   ```shell
   npm run dev
   ```

5. Open your browser and access the app at [http://localhost:3000](http://localhost:3000).

## Usage

1. View the products. 
2. Register or log in to your shop account.
3. Shop and pay for products using Stripe test cards.
4. View your orders.

# Aureva Admin Portal

Aureva Admin Portal is a React-based product management application created as a summative project.

The application allows an administrator to view, search, add, update, and delete Aureva spice paste products using a simulated backend powered by JSON Server.

## Features

- View Aureva products
- Search products dynamically by name
- View individual product details
- Add new products
- Update product prices
- Delete products
- Navigate between application pages
- Responsive design
- Simulated REST API using JSON Server
- Unit and interaction testing with Vitest and React Testing Library

## Technologies Used

- React
- Vite
- JavaScript
- React Router
- JSON Server
- Vitest
- React Testing Library
- CSS
- Git and GitHub

## Product Collection

The application starts with five Aureva products:

1. Aureva Ginger Paste
2. Aureva Turmeric Paste
3. Aureva Garlic Paste
4. Aureva Ginger & Garlic Paste
5. Aureva Ginger, Garlic & Turmeric Paste

All initial products are 300 g.

## Routes

| Route | Purpose |
|---|---|
| `/` | Aureva admin landing page |
| `/products` | View and search products |
| `/products/:id` | View, update, and delete a product |
| `/add-product` | Add a new product |

## CRUD Functionality

The application uses JSON Server as a simulated backend.

### Read

Products are retrieved from the API using a GET request.

### Create

New products are added using a POST request.

### Update

Product prices can be changed using a PATCH request.

### Delete

Products can be removed using a DELETE request.

## React Hooks

The project demonstrates the use of standard and custom React hooks.

### Standard Hooks

- `useState` - manages form values, search terms, messages, and other component state.
- `useEffect` - fetches products when the application loads.
- `useRef` - returns focus to the product name field after submitting the form.
- `useId` - creates unique IDs for form labels and inputs.
- `useContext` - provides access to shared product data through the Product Context.

### Custom Hook

`useProducts` is a custom hook responsible for:

- Fetching products
- Adding products
- Updating products
- Deleting products
- Managing product loading and error states

## Project Structure

```text
aureva-admin/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductForm.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── context/
│   │   ├── ProductContext.jsx
│   │   └── useProductContext.js
│   │
│   ├── hooks/
│   │   └── useProducts.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   └── AddProduct.jsx
│   │
│   ├── styles/
│   │   ├── Navigation.css
│   │   ├── Home.css
│   │   ├── Products.css
│   │   ├── ProductCard.css
│   │   ├── ProductForm.css
│   │   ├── ProductDetails.css
│   │   └── SearchBar.css
│   │
│   └── tests/
│       ├── setup.js
│       ├── App.test.jsx
│       ├── Home.test.jsx
│       ├── ProductDetails.test.jsx
│       ├── ProductForm.test.jsx
│       └── Products.test.jsx
│
├── db.json
├── package.json
├── vite.config.js
├── README.md
└── LICENSE
```

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/hafsamohabah/aureva-admin.git
cd aureva-admin
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the JSON Server backend

In one terminal, run:

```bash
npm run server
```

The JSON Server backend will run at:

```text
http://localhost:3000
```

### 4. Start the React development server

Open a second terminal and run:

```bash
npm run dev
```

Vite will provide a local URL where the application can be opened in the browser.

### 5. Run the tests

To run the project's tests:

```bash
npm test
```
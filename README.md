# React Native Mobile App Sports and Outdoors Store Backend

This project serves as the backend for a mobile application focused on sports and outdoor store functionalities. It is built using Node.js and Express, providing a robust API to handle various operations such as user authentication, product management, and order processing.

## Features

- **User Authentication**: Secure registration and login functionality.
- **Product Management**: CRUD operations for managing products.
- **Order Processing**: Handle customer orders efficiently.
- **Database Integration**: Utilizes MongoDB for data storage.

## Getting Started

### Prerequisites

- Node.js
- Express.js
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Chanuth-silva10/react-native-mobile-app-sports-and-outdoors-store-backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd react-native-mobile-app-sports-and-outdoors-store-backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file and add the following:
    ```
    PORT=5000
    MONGO_URI=your_mongo_db_uri
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

Start the server:
```bash
npm start
```
The server will run on `http://localhost:5000`.

## Some API Endpoints for get idea
#### User Routes
POST /api/users/register - Register a new user
POST /api/users/login - User login

#### Product Routes
GET /api/products - Get all products
POST /api/products - Add a new product
PUT /api/products/:id - Update a product
DELETE /api/products/:id - Delete a product

#### Order Routes
POST /api/orders - Create a new order
GET /api/orders - Get all orders


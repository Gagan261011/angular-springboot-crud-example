# Angular and Spring Boot CRUD Full Stack Application

This is a full-stack web application that demonstrates a simple CRUD (Create, Read, Update, Delete) functionality for managing employees. The frontend is built with Angular, and the backend is a Spring Boot RESTful API.

## Project Overview

The application allows you to:

*   View a list of all employees.
*   Add a new employee.
*   Update an existing employee's information.
*   Delete an employee.
*   View the details of a single employee.

## Tech Stack

*   **Frontend:** Angular
*   **Backend:** Spring Boot, Spring Data JPA, H2 Database
*   **Build Tool:** Maven

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

*   [Java SE Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
*   [Maven](https://maven.apache.org/download.cgi)
*   [Node.js and npm](https://nodejs.org/en/download/)
*   [Angular CLI](https://cli.angular.io/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/angular-springboot-crud-example.git
cd angular-springboot-crud-example
```

### 2. Set Up the Backend (Spring Boot)

1.  Navigate to the `springboot-backend` directory:
    ```bash
    cd springboot-backend
    ```

2.  Build the project using Maven:
    ```bash
    mvn clean install
    ```

3.  Run the Spring Boot application:
    ```bash
    mvn spring-boot:run
    ```

The backend server will start on `http://localhost:8080`.

### 3. Set Up the Frontend (Angular)

1.  Open a new terminal and navigate to the `angular-frontend` directory:
    ```bash
    cd angular-frontend
    ```

2.  Install the required npm packages:
    ```bash
    npm install
    ```

3.  Start the Angular development server:
    ```bash
    ng serve
    ```

The frontend application will be accessible at `http://localhost:4200`.

## Docker Setup

You can also run the entire application using Docker Compose. This is the recommended way to run the application for development and production.

1.  **Build and Run the Application**

    ```bash
    docker compose up --build
    ```

    This command will build the Docker images for both the frontend and backend and start the services. The frontend will be available at `http://localhost:4200`, and the backend will be available at `http://localhost:8080`.

2.  **Stop the Application**

    To stop the application, press `Ctrl+C` in the terminal where the application is running, and then run the following command to remove the containers:

    ```bash
    docker compose down
    ```

## Usage

Once both the backend and frontend servers are running, open your web browser and navigate to `http://localhost:4200`. You will see the employee management application, where you can perform all the CRUD operations.

## Project Structure

### Backend (`springboot-backend`)

*   `src/main/java/net/javaguides/springboot`: Main package for the Spring Boot application.
    *   `controller`: Contains the REST controllers for handling HTTP requests.
    *   `exception`: Custom exception classes.
    *   `model`: JPA entity classes.
    *   `repository`: Spring Data JPA repositories.
    *   `SpringbootBackendApplication.java`: The main application class.
*   `pom.xml`: Maven project configuration file.

### Frontend (`angular-frontend`)

*   `src/app`: Contains the main Angular application files.
    *   `create-employee`: Component for creating a new employee.
    *   `employee-details`: Component for viewing employee details.
    *   `employee-list`: Component for displaying the list of all employees.
    *   `update-employee`: Component for updating an employee.
    *   `app-routing.module.ts`: Defines the application's routes.
    *   `app.component.ts`: The root component of the application.
    *   `employee.service.ts`: Service for communicating with the backend API.
    *   `employee.ts`: The `Employee` model class.
*   `angular.json`: Angular CLI configuration file.
*   `package.json`: npm package dependencies and scripts.

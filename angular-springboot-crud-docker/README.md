# Angular Spring Boot CRUD - Docker Edition

This project is a Dockerized version of the Angular Spring Boot CRUD application.

## Quick Start

To get the application up and running, follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/[MY_USERNAME]/angular-springboot-crud-docker.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd angular-springboot-crud-docker
   ```

3. **Build and run the application using Docker Compose:**
   ```bash
   docker compose up --build
   ```

## Accessing the Application

Once the containers are up and running, you can access the application at the following URLs:

- **Frontend:** [http://localhost:4200](http://localhost:4200)
- **Backend API:** [http://localhost:8080/api/v1/employees](http://localhost:8080/api/v1/employees)

## Stopping the Application

To stop the application, press `Ctrl+C` in the terminal where Docker Compose is running, and then run the following command to remove the containers:

```bash
docker compose down
```

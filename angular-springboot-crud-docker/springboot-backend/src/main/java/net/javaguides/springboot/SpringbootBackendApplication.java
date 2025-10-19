package net.javaguides.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * The SpringbootBackendApplication class is the main entry point for the Spring Boot application.
 * It is annotated with @SpringBootApplication, which enables auto-configuration and component scanning.
 */
@SpringBootApplication
public class SpringbootBackendApplication {

	/**
	 * The main method, which is the entry point for the application.
	 * @param args command-line arguments.
	 */
	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

}

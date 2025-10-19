package net.javaguides.springboot.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * The ResourceNotFoundException class is a custom exception that is thrown when a requested resource is not found.
 * It is annotated with @ResponseStatus(value = HttpStatus.NOT_FOUND), which causes Spring to respond with a 404 Not Found status code whenever this exception is thrown.
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	/**
	 * Constructs a new ResourceNotFoundException with the specified detail message.
	 * @param message the detail message.
	 */
	public ResourceNotFoundException(String message) {
		super(message);
	}
}

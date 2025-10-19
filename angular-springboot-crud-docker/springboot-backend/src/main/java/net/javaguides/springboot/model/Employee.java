package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * The Employee class is a JPA entity that represents an employee in the database.
 */
@Entity
@Table(name = "employees")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "email_id")
	private String emailId;

	/**
	 * Default constructor.
	 */
	public Employee() {

	}

	/**
	 * Constructs a new Employee with the specified first name, last name, and email ID.
	 * @param firstName the employee's first name.
	 * @param lastName the employee's last name.
	 * @param emailId the employee's email ID.
	 */
	public Employee(String firstName, String lastName, String emailId) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
	}
	/**
	 * Returns the employee's ID.
	 * @return the employee's ID.
	 */
	public long getId() {
		return id;
	}
	/**
	 * Sets the employee's ID.
	 * @param id the employee's new ID.
	 */
	public void setId(long id) {
		this.id = id;
	}
	/**
	 * Returns the employee's first name.
	 * @return the employee's first name.
	 */
	public String getFirstName() {
		return firstName;
	}
	/**
	 * Sets the employee's first name.
	 * @param firstName the employee's new first name.
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	/**
	 * Returns the employee's last name.
	 * @return the employee's last name.
	 */
	public String getLastName() {
		return lastName;
	}
	/**
	 * Sets the employee's last name.
	 * @param lastName the employee's new last name.
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	/**
	 * Returns the employee's email ID.
	 * @return the employee's email ID.
	 */
	public String getEmailId() {
		return emailId;
	}
	/**
	 * Sets the employee's email ID.
	 * @param emailId the employee's new email ID.
	 */
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
}

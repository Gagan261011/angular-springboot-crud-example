package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Employee;

/**
 * The EmployeeRepository interface is a Spring Data JPA repository for Employee entities.
 * It provides methods for performing CRUD operations on the employees table in the database.
 */
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}

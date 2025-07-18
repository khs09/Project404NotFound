package com.pj.springboot.jpa; 

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> 
{ 
    Optional<User> findByEmployeeNumber(String employeeNumber);
}
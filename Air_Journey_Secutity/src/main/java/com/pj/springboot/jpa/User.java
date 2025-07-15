package com.pj.springboot.jpa;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "AIR_JOURNEY_USERS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User 
{
	@Id 
    @Column(name = "ID")
    private String id;

    @Column(name = "PASSWORD", nullable = false)
    private String password;

    @Column(name = "EMAIL", nullable = false, unique = true)
    private String email;

    @Column(name = "USERNAME")
    private String username;
}
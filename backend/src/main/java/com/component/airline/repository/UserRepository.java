package com.component.airline.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.component.airline.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}

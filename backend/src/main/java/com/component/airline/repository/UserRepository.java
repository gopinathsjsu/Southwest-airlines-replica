package com.component.airline.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.component.airline.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	 @Query(value ="SELECT * from user e where e.username =:username AND e.password =:password",nativeQuery = true)
	    User findUserByUsernameandPassword(@Param("username") String username,@Param("password") String password); 
}

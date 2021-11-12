package com.component.airline.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.component.airline.entity.Payment;
import com.component.airline.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Modifying
	@Query(value ="insert into user (first_name,last_name,dob,phone_number,email,add_line1,add_line2,city,state,country,zip,user_type,username,password) VALUES (:first_name,:last_name,:dob,:phone_number,:email,:add_line1,:add_line2,:city,:state,:country,:zip,:user_type,:username,:password)",nativeQuery = true)
	User adduser(@Param("first_name") String first_name, @Param("last_name") String last_name,
			@Param("dob") String dob, @Param("phone_number") String phone_number,
			@Param("email") String email, @Param("add_line1") String add_line1,
			@Param("add_line2") String add_line2, @Param("city") String city, @Param("state") String state, @Param("country") String country, @Param("zip") String zip, @Param("user_type") String user_type, @Param("username") String username,@Param("password") String password);

    @Query(value ="SELECT * from user e where e.username =:username AND e.password =:password",nativeQuery = true)
    User findUserByUsernameandPassword(@Param("username") String username,@Param("password") String password); 

   User findByUsername(@Param("user") String user);

}

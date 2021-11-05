package com.component.airline.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.component.airline.entity.Booking;
import com.component.airline.entity.Payment;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer>{

	Booking findByUserId(int userId);
	
	/*@Query("SELECT b from Booking p where b.user.Id =:user")
	List<Payment> findByUserId(@Param("user") int user);*/
}

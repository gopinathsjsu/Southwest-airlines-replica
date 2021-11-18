package com.component.airline.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.component.airline.entity.Booking;
import com.component.airline.entity.Payment;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer>{

	//Booking findBookingByUser(int userId);
	
	/*
	 * @Query("SELECT p from Booking p where p.user.Id =:user") List<Payment>
	 * findByUserId(@Param("user") int user);
	 */
	
}

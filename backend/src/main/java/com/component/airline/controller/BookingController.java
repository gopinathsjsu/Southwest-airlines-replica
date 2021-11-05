package com.component.airline.controller;

import java.util.List;

import javax.ws.rs.QueryParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.component.airline.db.BookingDAOService;
import com.component.airline.entity.Booking;

@RestController
public class BookingController {
	
	@Autowired
	private BookingDAOService service;
	
	@PostMapping("/addBooking")
	public Booking addBooking(@RequestBody Booking booking) {
		return service.saveBooking(booking);
		
	}
	@GetMapping("/booking/{Id}")
	public Booking findBookingById(@PathVariable int bookingId) {
		return service.getBookingById(bookingId);
		
	}
	
	@GetMapping("/bookings")
	public List<Booking> findBookings() {
		return  service.getBookings();
		
	}
	
	@GetMapping("/booking/user/{userId}")
	public Booking findBookingByUserId(@PathVariable int userId) {
		return service.getBookingById(userId);
	}
	
	@DeleteMapping("/delete/{bookingId}")
	public String deleteBookingByID(@PathVariable int bookingId) {
		return service.deleteByID(bookingId);
	}
	
	
}

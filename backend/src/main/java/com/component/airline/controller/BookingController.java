package com.component.airline.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.component.airline.db.BookingDAOService;
import com.component.airline.entity.Booking;
import com.component.airline.models.AvailMileagePointsRequest;
import com.component.airline.models.BookingRequestObject;

@RestController
public class BookingController {
	
	@Autowired
	private BookingDAOService service;
	
	@PostMapping("/addBooking")
	@ResponseBody
	public Booking addBooking(@RequestBody BookingRequestObject booking) {
		return service.saveBooking(booking);
		
	}
	
	@GetMapping("/booking/{Id}")
	@ResponseBody
	public Booking findBookingById(@PathVariable int bookingId) {
		return service.getBookingById(bookingId);
		
	}
	
	@GetMapping("/bookings")
	@ResponseBody
	public List<Booking> findBookings() {
		return  service.getBookings();
		
	}
	
	@GetMapping("/bookings/{id}")
	@ResponseBody
	public List<Booking> findUserBookings(@PathVariable int userId) {
		return  service.getBookingByUserId(userId);
		
	}
	
	/*
	 * @GetMapping("/booking/user/{userId}")
	 * 
	 * @ResponseBody public Booking findBookingByUserId(@PathVariable int userId) {
	 * return service.getBookingById(userId); }
	 */
	
	@DeleteMapping("/delete/{bookingId}")
	@ResponseBody
	public String deleteBookingByID(@PathVariable int bookingId) {
		return service.deleteByID(bookingId);
	}
	
	
	  @PostMapping("/availBooking")
	  
	  @ResponseBody public String availMileagePoints(@RequestBody AvailMileagePointsRequest request) { return
	  service.availMileagePoints(request.getBookingId());
	  
	  }
	 
}

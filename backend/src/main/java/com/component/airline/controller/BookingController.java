package com.component.airline.controller;

import javax.ws.rs.QueryParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.component.airline.db.BookingDAOService;
import com.component.airline.entity.Booking;

@RestController
@RequestMapping(path="/v1/booking")
public class BookingController {
	
	@Autowired
	BookingDAOService service;
	
	@GetMapping(path = "/get", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Object getBooking(@QueryParam(value = "bookingId") int bookingId) {
		return service.getBookingById(bookingId);
		
	}
	
	@GetMapping(path = "/getBookingUserId", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Object getBookingByUserId(@QueryParam(value = "userId") int userId) {
		return service.getBookingById(userId);
		
	}
	
	@PostMapping(path = "/create", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Object createBooking(@RequestBody Booking booking) {
		return service.createBooking(booking);
		
	}
}

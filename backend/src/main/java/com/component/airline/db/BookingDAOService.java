package com.component.airline.db;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.component.airline.entity.Booking;
import com.component.airline.repository.BookingRepository;

@Service
public class BookingDAOService {

	@Autowired
	BookingRepository bookingRepository;
	
	public Booking saveBooking(Booking booking){
		return bookingRepository.save(booking);
	}
	
	public Booking getBookingById(int bookingId){
		return bookingRepository.findById(bookingId).orElse(null);
	}
	
	public List<Booking> getBookings(){
		return bookingRepository.findAll();
	}
	
	public Booking getBookingByUserId(int userId){
		return bookingRepository.findByUserId(userId);
	}
	
	public String deleteByID(int bookingId) {
		bookingRepository.deleteById(bookingId);
		return ("Booking deleted BookingID: "+bookingId);
	}
}

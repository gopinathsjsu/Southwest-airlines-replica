package com.component.airline.db;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.component.airline.entity.Booking;
import com.component.airline.repository.BookingRepository;

@Service
public class BookingDAOService {

	@Autowired
	BookingRepository bookingRepository;
	
	@Cacheable(value = "bookingCache")
	public Object createBooking(Booking booking){
		return bookingRepository.save(booking);
	}
	
	@Cacheable(value = "bookingCache")
	public Object getBookingById(int bookingId){
		return bookingRepository.getById(bookingId);
	}
	
	@Cacheable(value = "bookingCache")
	public Object getBookingByUserId(int userId){
	//	return bookingRepository.findByUserId(userId);
		return null;
	}
}

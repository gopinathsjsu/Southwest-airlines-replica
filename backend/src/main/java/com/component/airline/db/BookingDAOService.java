package com.component.airline.db;

import java.sql.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.component.airline.entity.Booking;
import com.component.airline.entity.MileageHistory;
import com.component.airline.repository.BookingRepository;
import com.component.airline.repository.MileageHistoryRepository;

@Service
public class BookingDAOService {

	@Autowired
	BookingRepository bookingRepository;
	
	@Autowired
	MileageHistoryRepository mileageHistoryRepository;
	
	public Booking saveBooking(Booking booking){
		//new Payment - 
		
		//save Payment
		//new Passenger
		//saving passenger
		//flight
		//booking
		return bookingRepository.save(booking);
	}
	
	public Booking getBookingById(int bookingId){
		return bookingRepository.findById(bookingId).orElse(null);
	}
	
	public List<Booking> getBookings(){
		return bookingRepository.findAll();
	}
	
	public Booking getBookingByUserId(int userId){
		return bookingRepository.findBookingByUser(userId);
	}
	
	public String deleteByID(int bookingId) {
		bookingRepository.deleteById(bookingId);
		return ("Booking deleted BookingID: "+bookingId);
	}
	
	@SuppressWarnings("deprecation")
	public String availMileagePoints(int bookingId) {
		Booking booking  = bookingRepository.getById(bookingId);
		if(booking.getStatus().equals("Pending")) {
			booking.setMileageStatus("Availed");
			bookingRepository.save(booking);
			//bookingRepository.updateByBookingId(bookingId);
			MileageHistory mileageHistory = new MileageHistory();
			mileageHistory.setPoints(booking.getMileagePoints());
			Date date = new Date(System.currentTimeMillis());
			mileageHistory.setDate_avl(date);
			date.setMonth((date.getMonth() - 1 + 1) % 12 + 1);
			mileageHistory.setDate_avl(date);
			mileageHistoryRepository.save(mileageHistory);
			return ("Mileage points availed for: "+bookingId);
		}else {
			return ("Mileage points already availed for: "+bookingId);
		}
		
		
	}
}

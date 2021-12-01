package com.component.airline.db;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.component.airline.entity.Booking;
import com.component.airline.entity.CardDetails;
import com.component.airline.entity.Flight;
import com.component.airline.entity.Mileage;
import com.component.airline.entity.User;
import com.component.airline.models.BookingRequestObject;
import com.component.airline.entity.MileageHistory;
import com.component.airline.entity.Passenger;
import com.component.airline.entity.Payment;
import com.component.airline.entity.Transaction;
import com.component.airline.repository.BookingRepository;
import com.component.airline.repository.MileageHistoryRepository;
import com.component.airline.repository.MileageRepository;
import com.component.airline.repository.PassengerRepository;
import com.component.airline.repository.PaymentRepository;
import com.component.airline.repository.TransactionRepository;
import com.component.airline.repository.UserRepository;

@Service
public class BookingDAOService {

	@Autowired
	BookingRepository bookingRepository;
	
	@Autowired 
	PaymentRepository paymentRepository;
	
	@Autowired
	TransactionRepository transactionRepository;
	
	@Autowired
	MileageRepository mileageRepository;
	
	@Autowired
	MileageHistoryRepository mileageHistoryRepository;
	
	@Autowired 
	PassengerRepository passengerRepository;
	
	@Autowired 
	UserRepository userRepository;
	
	
	@Transactional
	public Booking saveBooking(BookingRequestObject bookingReq){
		User user  =userRepository.getById(bookingReq.getUser().getId());
		Payment payment = new Payment();
		payment.setPayment_type(bookingReq.getPayment_type());
		CardDetails card = new CardDetails();
		card.setCardNumber(bookingReq.getCardNumber());
		card.setNameOnCard(bookingReq.getNameOnCard());
		card.setExpirationDate(bookingReq.getExpirationDate());
		payment.setCardDetails(card);
		payment.setUser(bookingReq.getUser());
		Transaction transaction = new Transaction();
		transaction.setPayment(payment);
		transaction.setTotal_amt(bookingReq.getTotalAmt());
		Date sqlDate = new Date(System.currentTimeMillis());
		transaction.setTran_date(sqlDate);
		transaction.setUser(bookingReq.getUser());
		transaction.setCash(bookingReq.getTotalAmt()-bookingReq.getRewards());
		transaction.setRewards(bookingReq.getRewards());
		System.out.println(bookingReq.getRewards());
		Mileage m= payment.getUser().getMileage();
		m.setEarnedPoints(m.getEarnedPoints()+((bookingReq.getTotalAmt()-bookingReq.getRewards())*0.1));
		m.setPoints(m.getEarnedPoints()-bookingReq.getRewards());
		mileageRepository.save(m);
		if(bookingReq.getRewards() != 0) {
			MileageHistory mileageHistory =  new MileageHistory();
			mileageHistory.setMileage(m);
			mileageHistory.setPoints(bookingReq.getRewards());
			mileageHistory.setRemiaingPoints(m.getAvailableRewards()-bookingReq.getRewards());
			mileageHistory.setStatus("Redeemed");
			mileageHistory.setDate_avl(new Date(System.currentTimeMillis()));
			mileageHistoryRepository.save(mileageHistory);
		}
		//m.setAvailableRewards((m.getAvailableRewards()+bookingReq.getTotalAmt()/10.0)-bookingReq.getRewards());
		Booking booking = new Booking();
		booking.setFlight(bookingReq.getFlight());
		booking.setTransaction(transaction);
		booking.setMileagePoints((bookingReq.getTotalAmt()-bookingReq.getRewards())/10.0);
		booking.setMileageStatus("Pending");
		booking.setStatus("Scheduled");
		
		booking.setPassengers(bookingReq.getPassengers());
		booking.setUser(user);
		Booking savedBooking = bookingRepository.save(booking);
//		for(Passenger p: bookingReq.getPassengers()) {
//			p.setBooking(savedBooking);
//		}
//		passengerRepository.saveAll(bookingReq.getPassengers());
		return savedBooking;
	}
	
	public Booking getBookingById(int bookingId){
		return bookingRepository.findById(bookingId).orElse(null);
	}
	
	public List<Booking> getBookings(){
		return bookingRepository.findAll();
	}
	
	
	  public List<Booking> getBookingByUserId(int userId){ return
	  bookingRepository.findByUserId(userId); }
	 
	public String deleteByID(int bookingId) {
		bookingRepository.deleteById(bookingId);
		return ("Booking deleted BookingID: "+bookingId);
	}
	
//	@SuppressWarnings("deprecation")
	public String availMileagePoints(int bookingId) {
		try {
		Booking booking  = bookingRepository.getById(bookingId);
		if(booking.getMileageStatus().equals("Pending")) {
			booking.setMileageStatus("Availed");
			bookingRepository.save(booking);
			//bookingRepository.updateByBookingId(bookingId);
			
			Mileage m= booking.getUser().getMileage();
			m.setAvailableRewards(m.getAvailableRewards()+booking.getMileagePoints());
			MileageHistory mileageHistory = new MileageHistory();
			mileageHistory.setPoints(booking.getMileagePoints());
			mileageHistory.setRemiaingPoints(m.getAvailableRewards()+booking.getMileagePoints());
			mileageHistory.setMileage(m);
			mileageHistory.setStatus("Availed");
			Date date = new Date(System.currentTimeMillis());
			mileageHistory.setDate_avl(date);
			date.setMonth((date.getMonth() - 1 + 1) % 12 + 1);
			mileageHistory.setDate_avl(date);
			mileageHistoryRepository.save(mileageHistory);
			return ("Mileage points availed for: "+bookingId);
		}else {
			return ("Mileage points already availed for: "+bookingId);
		}
		}catch(Exception e) {
			return e.getMessage();
		}
	}
}

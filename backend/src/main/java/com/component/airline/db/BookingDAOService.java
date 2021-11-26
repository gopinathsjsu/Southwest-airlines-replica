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
		Booking booking = new Booking();
		booking.setFlight(bookingReq.getFlight());
		booking.setTransaction(transaction);
		Mileage m= payment.getUser().getMileage();
		m.setAvailableRewards(m.getAvailableRewards()+bookingReq.getFlight().getPrice()/10.0);
		booking.setPassengers(bookingReq.getPassengers());
		booking.setUser(user);
		return bookingRepository.save(booking);
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
		Booking booking  = bookingRepository.getById(bookingId);
		if(booking.getMileageStatus().equals("Pending")) {
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

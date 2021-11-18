package com.component.airline.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "booking_tbl")
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "id")
	private int id;

	@Column(name = "travel_date")
	private Date date;

	@Column(name = "flight_id")
	private String flightId;

	@Column(name = "transaction_id")
	private int transactionId;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "payment", referencedColumnName = "id") 
	private Payment payment;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user", referencedColumnName = "id") 
	private User user;
	 
	@Column(name = "status", columnDefinition = "varchar(255) default 'Pending'")
	private String status;

	@Column(name = "mileage_points")
	private int mileagePoints;

	@Column(name = "mileage_status", columnDefinition = "varchar(255) default 'Pending'")
	private String mileageStatus;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getFlightId() {
		return flightId;
	}

	public void setFlightId(String flightId) {
		this.flightId = flightId;
	}

	public int getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}
	
	public Payment getPayment() { return payment; } 
	
	public void setPayment(Payment payment) { this.payment = payment; } 
	
	public User getUser(){ return user; } 
	
	public void setUser(User user) { this.user = user; }
	 
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getMileagePoints() {
		return mileagePoints;
	}

	public void setMileagePoints(int mileagePoints) {
		this.mileagePoints = mileagePoints;
	}

	public String getMileageStatus() {
		return mileageStatus;
	}

	public void setMileageStatus(String mileageStatus) {
		this.mileageStatus = mileageStatus;
	}

}

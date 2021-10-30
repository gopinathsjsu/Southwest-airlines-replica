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

@Entity
@Table(name = "booking")
public class Booking {

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "id")
    private Integer id;
	
	@Column(name = "date")
	private Date date;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "flight", referencedColumnName = "id")
	private Flight Flight;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "transaction", referencedColumnName = "id")
	private Transaction Transaction_id;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "payment", referencedColumnName = "id")
	private Payment payment;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user", referencedColumnName = "id")
	private User user;
	
	@Column(name = "status")
	private String Status;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Flight getFlight() {
		return Flight;
	}

	public void setFlight(Flight flight) {
		Flight = flight;
	}

	public Transaction getTransaction_id() {
		return Transaction_id;
	}

	public void setTransaction_id(Transaction transaction_id) {
		Transaction_id = transaction_id;
	}

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}
	
	

}

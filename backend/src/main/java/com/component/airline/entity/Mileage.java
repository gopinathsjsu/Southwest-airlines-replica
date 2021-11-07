package com.component.airline.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="mileage")
public class Mileage {
	
	@Id
	@SequenceGenerator(name = "mySeqGen", sequenceName = "mySeq", initialValue = 12312312)
    @GeneratedValue(generator = "mySeqGen")
	@Column(name = "id")
    private Integer id;

	@OneToOne(cascade = CascadeType.ALL,mappedBy = "rewards")
	private User user;
	
	
	@Column(name = "available_rewards")
	private double availableRewards;
	
	@Column(name = "exp_date")
	private Date expDate;
	
	@Column(name = "distance_travelled")
	private long distance;
	
	
	@OneToMany(fetch=FetchType.LAZY, cascade = CascadeType.ALL)
	private List<MileageHistory> transactions = new ArrayList<>();


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public double getAvailableRewards() {
		return availableRewards;
	}


	public void setAvailableRewards(double availableRewards) {
		this.availableRewards = availableRewards;
	}


	public Date getExpDate() {
		return expDate;
	}


	public void setExpDate(Date expDate) {
		this.expDate = expDate;
	}


	public long getDistance() {
		return distance;
	}


	public void setDistance(long distance) {
		this.distance = distance;
	}


	public List<MileageHistory> getTransactions() {
		return transactions;
	}


	public void setTransactions(List<MileageHistory> transactions) {
		this.transactions = transactions;
	}
	
	
	
	
}

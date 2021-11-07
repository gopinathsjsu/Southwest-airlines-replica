package com.component.airline.entity;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="mileage_history")
public class MileageHistory {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "id")
    private Integer id;

	@Column(name = "date_avl")
	private Date date_avl;
	
	@Column(name = "date_exp")
	private Date date_exp;
	
	@Column(name = "points")
	private int points;
	
	@Column(name = "status",columnDefinition = "varchar(255) default Pending")
	private String status;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getDate_avl() {
		return date_avl;
	}

	public void setDate_avl(Date date_avl) {
		this.date_avl = date_avl;
	}

	public Date getDate_exp() {
		return date_exp;
	}

	public void setDate_exp(Date date_exp) {
		this.date_exp = date_exp;
	}

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
}

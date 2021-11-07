package com.component.airline.entity;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "flight")
public class Flight {

	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "id")
    private Integer id;
	
	@Column(name = "flightName")
	public String flightName;
	
	@Column(name = "departureTime")
	public Timestamp departureTime;
	
	@Column(name = "arrivalTime")
	public Timestamp arrivalTime;
	
	@Column(name = "tripStops")
	public String stops;
	
	@Column(name = "tripDuration")
	public String duration;
	
	@Column(name = "tripType")
	public String tripType;
	
	@Column(name = "tripSource")
	public String tripSource;
	
	@Column(name = "tripDestination")
	public String tripDestination;
	
	public Flight(Integer id, String flightName, Timestamp departureTime, Timestamp arrivalTime, String stops,
			String duration, String tripType, String tripSource, String tripDestination) {
		super();
		this.id = id;
		this.flightName = flightName;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.stops = stops;
		this.duration = duration;
		this.tripType = tripType;
		this.tripSource = tripSource;
		this.tripDestination = tripDestination;
	}
	
	public Flight(){
		
	}
	
	@Override
	public String toString() {
		return "Flight [id=" + id + ", flightName=" + flightName + ", departureTime=" + departureTime + ", arrivalTime="
				+ arrivalTime + ", stops=" + stops + ", duration=" + duration + ", tripType=" + tripType
				+ ", tripSource=" + tripSource + ", tripDestination=" + tripDestination + "]";
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFlightName() {
		return flightName;
	}

	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}

	public Timestamp getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(Timestamp departureTime) {
		this.departureTime = departureTime;
	}

	public Timestamp getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(Timestamp arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	public String getStops() {
		return stops;
	}

	public void setStops(String stops) {
		this.stops = stops;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getTripType() {
		return tripType;
	}

	public void setTripType(String tripType) {
		this.tripType = tripType;
	}

	public String getTripSource() {
		return tripSource;
	}

	public void setTripSource(String tripSource) {
		this.tripSource = tripSource;
	}

	public String getTripDestination() {
		return tripDestination;
	}

	public void setTripDestination(String tripDestination) {
		this.tripDestination = tripDestination;
	}
	
	
}

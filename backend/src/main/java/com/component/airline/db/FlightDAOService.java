package com.component.airline.db;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.component.airline.entity.Flight;
import com.component.airline.repository.FlightRepository;

@Service
public class FlightDAOService {

	@Autowired
	FlightRepository flightRepository;
	
	public Object getFlightById(Flight flight){
		return flightRepository.findById(flight.getId());
	}
	
	
	/**
	 * @param flight
	 * @return
	 */
	public Object getFlightBySourceAndDestination(Flight flight){
		System.out.println(flight);
		return flightRepository.findBySourceAndDestination(flight.tripSource, flight.tripDestination);
	}
	
}

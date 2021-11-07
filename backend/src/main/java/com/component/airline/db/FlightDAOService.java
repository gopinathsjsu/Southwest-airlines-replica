package com.component.airline.db;

import java.util.List;

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
	public List<Flight> getFlightBySourceAndDestination(Flight flight){
		System.out.println(flight);
		if(flight.tripType.equals("Round trip")) {
			List<Flight> deptFlights = flightRepository.findBySourceAndDestination(flight.tripSource, flight.tripDestination, flight.departureTime);
			List<Flight> arrFlights = flightRepository.findReturnFlights(flight.tripSource, flight.tripDestination, flight.arrivalTime);
			deptFlights.addAll(arrFlights);
			return deptFlights;
		}
		return flightRepository.findBySourceAndDestination(flight.tripSource, flight.tripDestination, flight.departureTime);
	}
	
	public Object addFlight(Flight flight){
		System.out.println(flight);
		return flightRepository.save(flight);
	}
	
	public Object updateFlight(Flight flight){
		System.out.println(flight);
		return flightRepository.save(flight);
	}
	
	
}

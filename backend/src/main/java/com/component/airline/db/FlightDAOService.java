package com.component.airline.db;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.component.airline.entity.Flight;
import com.component.airline.repository.FlightRepository;
import com.component.models.FlightRequestObject;

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
	public List<Flight> getFlightBySourceAndDestination(FlightRequestObject flightReq){
		System.out.println(flightReq.adults);
		Flight flight = new Flight();
		flight.setTripSource(flightReq.getTripSource());
		flight.setTripDestination(flightReq.getTripDestination());
		flight.setTripType(flightReq.getTripType());
		flight.setArrivalTime(flightReq.getArrivalTime());
		flight.setDepartureTime(flightReq.getDepartureTime());
		
		if(flight.tripType.equals("Round trip")) {
			List<Flight> deptFlights = flightRepository.findBySourceAndDestination(flight.tripSource, flight.tripDestination, flight.departureTime, flightReq.adults, flightReq.children);
			List<Flight> arrFlights = flightRepository.findReturnFlights(flight.tripSource, flight.tripDestination, flight.arrivalTime, flightReq.adults, flightReq.children);
			deptFlights.addAll(arrFlights);
			return deptFlights;
		}
		return flightRepository.findBySourceAndDestination(flight.tripSource, flight.tripDestination, flight.departureTime, flightReq.adults, flightReq.children);
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

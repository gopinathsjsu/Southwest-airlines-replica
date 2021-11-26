package com.component.airline.db;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.component.airline.entity.Flight;
import com.component.airline.entity.User;
import com.component.airline.models.FlightAddRequest;
import com.component.airline.models.FlightSearchObject;
import com.component.airline.repository.FlightRepository;
import com.component.airline.repository.UserRepository;
import com.component.models.FlightRequestObject;

@Service
public class FlightDAOService {

	@Autowired
	FlightRepository flightRepository;
	
	@Autowired
	UserRepository userRepository;
	
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
	
	public Flight addFlight(FlightAddRequest flight){
		User pilot1 = userRepository.getById(Integer.parseInt(flight.getPilot1()));
		User pilot2 = userRepository.getById(Integer.parseInt(flight.getPilot2()));
		Flight newFlight = new Flight();
		newFlight.setArrivalTime(flight.getArrivalTime());
		newFlight.setDepartureTime(flight.getDepartureTime());
		newFlight.setFlightName(flight.getFlightName());
		newFlight.setPrice(flight.getPrice());
		newFlight.setStops(flight.getStops());
		newFlight.setPilot1(pilot1);
		newFlight.setPilot2(pilot2);
		newFlight.setTripSource(flight.getTripSource());
		newFlight.setTripDestination(flight.getTripDestination());
		newFlight.setStatus("Scheduled");
		newFlight.setDuration(getTimeDiff(flight.getArrivalTime(),flight.getDepartureTime()));
		return flightRepository.save(newFlight);
	}
	
	public Object updateFlight(Flight flight){
		System.out.println(flight);
		return flightRepository.save(flight);
	}
	
	public List<Flight> getFlightByCriteria(FlightSearchObject flightSearchObject){
		return flightRepository.getFlightByCriteria(flightSearchObject.getTripSource(),flightSearchObject.getTripDestination(),flightSearchObject.getDepartureDate());
	}
	
	public String cancelFlight(int id) {
		Flight flight = flightRepository.getById(id);
		if(flight!=null) {
			flight.setStatus("Cancelled");
			flightRepository.save(flight);
			return "Flight Cancelled Successfully!";
		}
		
		return "Error while cancelling flight";
	}
	
	public String getTimeDiff(Timestamp end_date,Timestamp start_date) {
		long diff =end_date.getTime()-start_date.getTime();
		 // gets month number, NOTE this is zero based!
		return ""+((diff/60000)/60)+" 	hours";
	}
}

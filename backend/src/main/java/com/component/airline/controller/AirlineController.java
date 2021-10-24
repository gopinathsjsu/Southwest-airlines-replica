package com.component.airline.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.component.airline.db.FlightDAOService;
import com.component.airline.entity.Flight;

@RestController
public class AirlineController {

	@Autowired
	FlightDAOService service;
	
	
	@PostMapping(path = "/searchFlights", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Object getFlights(@RequestBody Flight flight) {
		return service.getFlightBySourceAndDestination(flight);
		
	}
}

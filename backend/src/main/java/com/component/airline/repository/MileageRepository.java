package com.component.airline.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.component.airline.entity.Flight;
import com.component.airline.entity.Mileage;

@Repository
public interface MileageRepository extends JpaRepository<Mileage, Integer>{

	@Modifying
	@Query(value ="update into Mileage (arrivalTime,departureTime,tripDuration,flightName,tripStops,tripDestination,tripSource,tripType) VALUES (:arrivalTime,:departureTime,:tripDuration,:flightName,:tripStops,:tripDestination,:tripSource,:tripType)",nativeQuery = true)
	void addFlight(@Param("arrivalTime") String arrivalTime, @Param("departureTime") String departureTime,
			@Param("tripDuration") String tripDuration, @Param("flightName") String flightName,
			@Param("tripStops") String tripStops, @Param("tripDestination") String tripDestination,
			@Param("tripSource") String tripSource, @Param("tripType") String tripType);
}

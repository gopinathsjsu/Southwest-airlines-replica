package com.component.airline.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.component.airline.entity.Flight;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Integer>{

	@Query("SELECT e from Flight e where e.tripSource =:tripSource AND e.tripDestination =:tripDestination")
	List<Flight> findBySourceAndDestination(@Param("tripSource") String tripSource,@Param("tripDestination")String tripDestination);

}

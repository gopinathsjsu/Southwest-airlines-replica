package com.component.airline.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.component.airline.entity.MileageHistory;

@Repository
public interface MileageHistoryRepository extends JpaRepository<MileageHistory, Integer>{

}

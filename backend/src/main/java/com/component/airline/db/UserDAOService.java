package com.component.airline.db;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.component.airline.entity.User;
import com.component.airline.repository.UserRepository;

@Service
public class UserDAOService {
	@Autowired
	UserRepository UserService;
	
	@Cacheable(value = "userCache")
	public Object registerUser(User user){
		return UserService.save(user);
	}
	
	@Cacheable(value = "userCache")
	public Object getUserById(int userId){
		return UserService.findById(userId).orElseThrow(RuntimeException::new);
	}
	
	@Cacheable(value = "userCache")
	public Object updateUser(User user){
		return UserService.save(user);
	}
}

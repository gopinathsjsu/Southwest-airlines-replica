package com.component.airline.db;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.component.airline.entity.Mileage;
import com.component.airline.entity.User;
import com.component.airline.models.UserLogin;
import com.component.airline.models.UserRequestObject;
import com.component.airline.repository.UserRepository;

@Service
public class UserDAOService {
	@Autowired
	UserRepository UserService;
	
	
	public Object registerUser(UserRequestObject newUser){
		User user = new User();
		user.setFirst_name(newUser.getFirst_name());
		user.setLast_name(newUser.getLast_name());
		user.setAdd_line1(newUser.getAdd_line1());
		user.setAdd_line2(newUser.getAdd_line2());
		user.setCity(newUser.getCity());
		user.setCountry(newUser.getCountry());
		user.setState(newUser.getState());
		user.setEmail(newUser.getEmail());
		user.setPhone_number(newUser.getPhone_number());
		user.setUsername(newUser.getEmail());
		user.setPassword(newUser.getPassword());
		user.setDob(newUser.getDob());
		Mileage mileage = new Mileage();
		mileage.setMemberSince(new Date(System.currentTimeMillis()));
		user.setMileage(mileage);
		return UserService.save(user);
	}
	
	//@Cacheable(value = "userCache")
	public Object getUserById(int userId){
		return UserService.findById(userId).orElseThrow(RuntimeException::new);
	}
	
	//@Cacheable(value = "userCache")
	public Object updateUser(User user){
		return UserService.save(user);
  }
  
	public Object loginUser(UserLogin userLogin){
		User user =  UserService.findUserByUsernameandPassword(userLogin.getUsername(),userLogin.getPassword());
		if(user==null) {
			return null;
		}else {
			return user;
		}
	}
}

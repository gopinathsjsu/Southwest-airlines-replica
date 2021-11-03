package com.component.airline.controller;

import javax.ws.rs.QueryParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.component.airline.db.UserDAOService;
import com.component.airline.entity.User;

@RestController
@RequestMapping(path="/v1/user")
public class UserController {

	@Autowired
	UserDAOService service;
	
	@GetMapping(path = "/get", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Object getBooking(@QueryParam(value = "userId") int userId) {
		return service.getUserById(userId);
		
	}
	
	@PostMapping(path = "/register", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Object registerUser(@RequestBody User user) {
		return service.registerUser(user);
		
	}
	
	@PostMapping(path = "/update", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Object updateUser(@RequestBody User user) {
		return service.updateUser(user);
		
	}
}
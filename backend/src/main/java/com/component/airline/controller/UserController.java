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
import com.component.airline.models.UserLogin;
import com.component.airline.models.UserRequestObject;

@RestController
@RequestMapping(path="/v1/user")
public class UserController {

	@Autowired
	UserDAOService service;
	
	@GetMapping(path = "/getUser", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Object getUser(@QueryParam(value = "userId") int userId) {
		return service.getUserById(userId);
	}
	
	@PostMapping(path = "/register", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Object registerUser(@RequestBody UserRequestObject user) {
		return service.registerUser(user);
		
	}
	
	@PostMapping(path = "/update", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Object updateUser(@RequestBody User user) {
		return service.updateUser(user);
		
	}
	
	@PostMapping(path = "/login", produces=MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Object loginUser(@RequestBody UserLogin userLogin) {
		return service.loginUser(userLogin);
		
	}
}

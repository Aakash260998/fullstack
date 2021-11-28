package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.NotAValidUserException;
import com.example.demo.exception.UserAlreadyPresentException;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;

@Service
public class UserService {

	private UserRepo userRepo;

	@Autowired
	public UserService(UserRepo userRepo) {
		this.userRepo = userRepo;
	}

	public User registerUser(User user) {
       if(userRepo.findByUsername(user.getUsername())!=null) {
		throw new UserAlreadyPresentException("User with this username already present");
       }
       else {
    	   
    	   return userRepo.save(user);
       }
	}

	public User checkLogin(String username, String password) {
	      if(userRepo.findByUsername(username)!=null) {
	    	  User user=userRepo.findByUsername(username);
	    	  if(user.getPassword().equals(password))
	    		  return user;
	    	  else
	    		  throw new NotAValidUserException("Password not match");
	      }
	      else {
	    	  throw new NotAValidUserException("User Not Found");
	      }
	}
	
	
	
	
}

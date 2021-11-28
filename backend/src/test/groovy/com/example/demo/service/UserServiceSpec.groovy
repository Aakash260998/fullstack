package com.example.demo.service

import com.example.demo.model.User
import com.example.demo.repository.UserRepo

import spock.lang.Specification

class UserServiceSpec extends Specification {
	
	private UserRepo userRepo;
	private UserService userService;
	def setup() {
		userRepo=Mock()
		userService=new UserService(userRepo)
	}
	
	def "register" () {
		
		given:
		 User user=new User("Aakash","qwerty","Aakash Prasad","Kolkata",12344567890)
		 
		when:
		def msg= userService.registerUser(user)
		
		then:
		  msg=="User Registered"
	}	
//	def "register1" () {
//		
//		given:
//		 User user=new User("Aakash","qwerty","Aakash Prasad","Kolkata",12344567890)
//		 User user1=new User("Aakash","qwerty","Aakash Prasad","Kolkata",12344567890)
//		 
//		when:
//		def msg= userService.registerUser(user)
//		def msg2=userService.registerUser(user1)
//		then:
//		  msg=="User Registered"
//		 
//	}
}
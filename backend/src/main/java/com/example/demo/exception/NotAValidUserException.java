package com.example.demo.exception;

public class NotAValidUserException extends RuntimeException{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public NotAValidUserException(String message) {
		super(message);
	}

}

package com.qa.repository;

import com.qa.model.Destination;

public interface DestinationRepository {

	
	public Destination read(int id);
	
	public Destination update(int id, Destination destination);

	
	
}

package com.qa.repository;

import java.util.List;

import com.qa.model.Destination;

public interface DestinationRepository {

	public Destination create(Destination destination);
	
	public Destination read(int id);
	public List<Destination> readAll();	
	
	public Destination update(int id, Destination destination);

	
	
}

package com.example.demo.dao.FlightDAO;

import com.example.demo.model.Flights;

import java.util.List;

public interface FlightDAO {

    List<Flights> get();

    Flights get(int id);

    void save(Flights flights);

    void delete(int id);
}

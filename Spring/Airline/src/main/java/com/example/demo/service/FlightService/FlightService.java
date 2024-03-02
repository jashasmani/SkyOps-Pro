package com.example.demo.service.FlightService;


import com.example.demo.model.Flights;

import java.util.List;

public interface FlightService {
    List<Flights> get();

    //    Flights get(int id);
    Flights get(String flights);

    void save(Flights flights);

    void delete(int id);
}

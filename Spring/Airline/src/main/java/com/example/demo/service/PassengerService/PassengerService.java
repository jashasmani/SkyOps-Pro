package com.example.demo.service.PassengerService;


import com.example.demo.model.Passenger;

import java.util.List;

public interface PassengerService {

    List<Passenger> get();

    List<Passenger> getUserById(int id);

    Passenger get(int id);

    void save(Passenger passenger);

    void delete(long id);
}

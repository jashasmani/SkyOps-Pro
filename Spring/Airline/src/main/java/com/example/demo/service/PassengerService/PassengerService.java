package com.example.demo.service.PassengerService;


import com.example.demo.model.Passenger;

import java.util.List;

public interface PassengerService {
    List<Passenger> get();

    //    User get(int id);
    Passenger get(long id);

    void save(Passenger user);

    void delete(long id);
}

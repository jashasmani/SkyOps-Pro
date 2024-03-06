package com.example.demo.dao.PassangerDAO;


import com.example.demo.model.Passenger;

import java.util.List;

public interface PassengersDAO {

    List<Passenger> get();

    Passenger get(long id);

    void save(Passenger passengers);

    void delete(long id);
}

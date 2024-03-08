package com.example.demo.dao.PassangerDAO;


import com.example.demo.model.Passenger;

import java.util.List;

public interface PassengersDAO {

    List<Passenger> get();

    List<Passenger> getByUserId(int userId);

    Passenger get(int id);

    void save(Passenger passengers);

    void delete(long id);
}

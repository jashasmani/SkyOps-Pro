package com.airline.user.dao.FlightDAO;

import com.airline.user.model.Flights;

import java.util.List;

public interface FlightDAO {

    List<Flights> get();

    //    User get(int id);
    Flights get(String flights);

    void save(Flights flights);

    void delete(int id);
}

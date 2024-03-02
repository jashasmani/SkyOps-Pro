package com.airline.user.service.FlightService;

import com.airline.user.dao.FlightDAO.FlightDAO;
import com.airline.user.model.Flights;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class FlightServiceImpl implements FlightService {

    @Autowired
    private FlightDAO flightDAO;

    @Transactional
    @Override
    public List<Flights> get() {
        return flightDAO.get();
    }


    @Transactional
    @Override
    public Flights get(String flights) {
        return flightDAO.get(flights);
    }


    @Transactional
    @Override
    public void save(Flights flights) {
        flightDAO.save(flights);
    }


    @Transactional
    @Override
    public void delete(int id) {
        flightDAO.delete(id);
    }
}

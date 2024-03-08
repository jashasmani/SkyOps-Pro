package com.example.demo.service.PassengerService;


import com.example.demo.dao.PassangerDAO.PassengersDAO;
import com.example.demo.dao.UserDAO.UserDAO;
import com.example.demo.model.Passenger;
import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PassengerServiceImpl implements PassengerService {

    @Autowired
    private PassengersDAO passengersDAO;

    @Transactional
    @Override
    public List<Passenger> get() {
        return passengersDAO.get();
    }

    @Transactional
    @Override
    public List<Passenger> getUserById(int id) {
        return passengersDAO.getByUserId(id);
    }


    @Transactional
    @Override
    public Passenger get(int id) {
        return passengersDAO.get(id);
    }


    @Transactional
    @Override
    public void save(Passenger passenger) {
        passengersDAO.save(passenger);
    }


    @Transactional
    @Override
    public void delete(long id) {
        passengersDAO.delete(id);
    }
}

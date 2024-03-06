package com.example.demo.dao.PassangerDAO;


import com.example.demo.model.Passenger;
import jakarta.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PassengersDAOImpl implements PassengersDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Passenger> get() {
        Session session = entityManager.unwrap(Session.class);
        Query<Passenger> query = session.createQuery("From Passenger", Passenger.class);
        List<Passenger> list = query.getResultList();
        return list;
    }

    @Override
    public Passenger get(long id) {
        Session session = entityManager.unwrap(Session.class);
        return session.get(Passenger.class, id);
    }

    @Override
    public void save(Passenger passengers) {
        Session session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(passengers);
    }

    @Override
    public void delete(long id) {
        Session session = entityManager.unwrap(Session.class);
        Passenger passengers = session.get(Passenger.class, id);
        session.delete(passengers);
    }
}

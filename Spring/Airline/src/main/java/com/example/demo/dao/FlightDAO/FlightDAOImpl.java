package com.airline.user.dao.FlightDAO;


import com.airline.user.model.Flights;
import jakarta.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FlightDAOImpl implements FlightDAO {

    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Flights> get() {
        Session session = entityManager.unwrap(Session.class);
        Query<Flights> query = session.createQuery("From Flights", Flights.class);
        List<Flights> list = query.getResultList();
        return list;
    }

    @Override
    public Flights get(String flights) {
        Session session = entityManager.unwrap(Session.class);
        return session.get(Flights.class, flights);
    }

    @Override
    public void save(Flights flights) {
        Session session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(flights);
    }

    @Override
    public void delete(int id) {
        Session session = entityManager.unwrap(Session.class);
        Flights flights = session.get(Flights.class, id);
        session.delete(flights);
    }
}

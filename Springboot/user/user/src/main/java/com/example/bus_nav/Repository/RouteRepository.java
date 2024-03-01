package com.example.bus_nav.Repository;

import com.example.bus_nav.entity.Route;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface RouteRepository extends JpaRepository<Route,Long> {
    Optional<Route> findById(Long routeId);

//    List<Route> findByOriginAndDestination(String origin, String destination);

}

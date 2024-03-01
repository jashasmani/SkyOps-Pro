package com.example.bus_nav.Service;

import com.example.bus_nav.Repository.RouteRepository;
import com.example.bus_nav.entity.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface RouteService{


    public Route save(Route route);

    public List<Route> getAllRoutes() ;

    public Optional<Route> getRouteById(Long routeId) ;
}

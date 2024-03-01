package com.example.bus_nav.Service;

import com.example.bus_nav.Repository.RouteRepository;
import com.example.bus_nav.entity.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class RouteServiceImpl implements RouteService{

    @Autowired
    private RouteRepository routeRepository;
    @Override
    public Route save(Route route) {
        return routeRepository.save(route);
    }

    @Override
    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    @Override
    public Optional<Route> getRouteById(Long routeId) {
        return routeRepository.findById(routeId);
    }
}

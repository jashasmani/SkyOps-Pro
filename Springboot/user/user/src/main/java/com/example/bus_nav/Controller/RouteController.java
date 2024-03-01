package com.example.bus_nav.Controller;

import com.example.bus_nav.Service.RouteService;
import com.example.bus_nav.entity.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/route")
@CrossOrigin
public class RouteController {
    @Autowired
    private RouteService routeService;

    @PostMapping("/add")
    public Route addRoute(@RequestBody Route route) {
        return routeService.save(route);
    }

    @GetMapping("/getAll")
    public List<Route> getAllRoutes() {
        return routeService.getAllRoutes();
    }

    @GetMapping("/get/{routeId}")
    public Optional<Route> getRouteById(@PathVariable Long routeId) {
        return routeService.getRouteById(routeId);
    }
}

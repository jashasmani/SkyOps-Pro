package com.example.bus_nav.entity;

import jakarta.persistence.*;
//import org.springframework.data.annotation.Id;

import java.util.List;

@Entity
public class Bus2 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long busId;
    private String busNumber;
    private int capacity;
    // Other attributes

    @OneToMany( targetEntity = Route.class,cascade = CascadeType.ALL)
    @JoinColumn(name ="busroute_fk",referencedColumnName = "busId")
    private List<Route> routes;

    @OneToOne
    private Route route;

    public Route getRoute() {
        return route;
    }

    public void setRoute(Route route) {
        this.route = route;
    }

    public Long getBusId() {
        return busId;
    }

    public void setBusId(Long busId) {
        this.busId = busId;
    }

    public String getBusNumber() {
        return busNumber;
    }

    public void setBusNumber(String busNumber) {
        this.busNumber = busNumber;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public List<Route> getRoutes() {
        return routes;
    }

    public void setRoutes(List<Route> routes) {
        this.routes = routes;
    }


}

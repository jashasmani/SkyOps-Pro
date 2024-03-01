package com.example.bus_nav.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Route {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long routeId;
    private String origin;
    private String destination;
    @ManyToOne
    @JoinColumn(name = "bus_id")
    private Bus2 bus2;

    public Bus2 getBus2() {
        return bus2;
    }

    public void setBus2(Bus2 bus2) {
        this.bus2 = bus2;
    }

    public List<Schedule> getSchedules() {
        return schedules;
    }

    public void setSchedules(List<Schedule> schedules) {
        this.schedules = schedules;
    }

    @OneToMany(mappedBy = "route")
    private List<Schedule> schedules;

    public Long getRouteId() {
        return routeId;
    }

    public void setRouteId(Long routeId) {
        this.routeId = routeId;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }
}

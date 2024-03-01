package com.example.bus_nav.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.*;
import java.util.List;




@Entity
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false)
    private String busname;
    @Column(nullable=false)
    private String busregistrationnumber;
    @Column(nullable=false)
    private String description;

    @Column(nullable = false)
    private int totalseats;

//    public List<Route> getRoutes() {
//        return routes;
//    }
//
//    public void setRoutes(List<Route> routes) {
//        this.routes = routes;
//    }

//    @OneToMany(mappedBy = "bus")
//    @Column(nullable = false)
//    private List<Route> routes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBusname() {
        return busname;
    }

    public void setBusname(String busname) {
        this.busname = busname;
    }

    public String getBusregistrationnumber() {
        return busregistrationnumber;
    }

    public void setBusregistrationnumber(String busregistrationnumber) {
        this.busregistrationnumber = busregistrationnumber;
    }

    public Bus(Long id, String busname, String busregistrationnumber, String description, int totalseats) {
        this.id = id;
        this.busname = busname;
        this.busregistrationnumber = busregistrationnumber;
        this.description = description;
        this.totalseats = totalseats;
    }

    public String getDescription() {
        return description;
    }

    public Bus() {
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getTotalseats() {
        return totalseats;
    }

    public void setTotalseats(int totalseats) {
        this.totalseats = totalseats;
    }
}

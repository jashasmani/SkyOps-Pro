package com.airline.user.model;

import jakarta.persistence.*;

import java.sql.Time;


@Entity
@Table(name = "flights")
public class Flights {

    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Time departureTime;
    private String from;
    private Time arrivalTime;
    private String to;
    private Time duration;
    private String flightNumber;
    private String stops;
    private String serviceClass;
    private int price;


    public Time getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(Time departureTime) {
        this.departureTime = departureTime;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public Time getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Time arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public Time getDuration() {
        return duration;
    }

    public void setDuration(Time duration) {
        this.duration = duration;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public String getStops() {
        return stops;
    }

    public void setStops(String stops) {
        this.stops = stops;
    }

    public String getServiceClass() {
        return serviceClass;
    }

    public void setServiceClass(String serviceClass) {
        this.serviceClass = serviceClass;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Flights{" + "id=" + id + ", departureTime=" + departureTime + ", from='" + from + '\'' + ", arrivalTime=" + arrivalTime + ", to='" + to + '\'' + ", duration=" + duration + ", flightNumber='" + flightNumber + '\'' + ", stops='" + stops + '\'' + ", serviceClass='" + serviceClass + '\'' + ", price=" + price + '}';
    }
}

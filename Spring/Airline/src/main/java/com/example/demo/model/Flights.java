package com.example.demo.model;

import jakarta.persistence.*;


@Entity
@Table(name = "flights")
public class Flights {

    @Column
    @Id
    private int id_flights;
    @Column
    private String departure_time;
    @Column
    private String arrival_time;
    @Column
    private String duration;
    @Column
    private String departure_airport;
    @Column
    private String arrival_airport;
    @Column
    private String flight_number;
    @Column
    private String date;
    @Column
    private int business_class_seat;
    @Column
    private int economy_class_seat;
    @Column
    private int first_class_seat;
    @Column
    private float business_class_price;
    @Column
    private float economy_class_price;
    @Column
    private float first_class_price;

    public int getId_flights() {
        return id_flights;
    }

    public void setId_flights(int id_flights) {
        this.id_flights = id_flights;
    }

    public String getDeparture_time() {
        return departure_time;
    }

    public void setDeparture_time(String departure_time) {
        this.departure_time = departure_time;
    }

    public String getArrival_time() {
        return arrival_time;
    }

    public void setArrival_time(String arrival_time) {
        this.arrival_time = arrival_time;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getDeparture_airport() {
        return departure_airport;
    }

    public void setDeparture_airport(String departure_airport) {
        this.departure_airport = departure_airport;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getArrival_airport() {
        return arrival_airport;
    }

    public void setArrival_airport(String arrival_airport) {
        this.arrival_airport = arrival_airport;
    }

    public String getFlight_number() {
        return flight_number;
    }

    public void setFlight_number(String flight_number) {
        this.flight_number = flight_number;
    }

    public int getBusiness_class_seat() {
        return business_class_seat;
    }

    public void setBusiness_class_seat(int business_class_seat) {
        this.business_class_seat = business_class_seat;
    }

    public int getEconomy_class_seat() {
        return economy_class_seat;
    }

    public void setEconomy_class_seat(int economy_class_seat) {
        this.economy_class_seat = economy_class_seat;
    }

    public int getFirst_class_seat() {
        return first_class_seat;
    }

    public void setFirst_class_seat(int first_class_seat) {
        this.first_class_seat = first_class_seat;
    }

    public float getBusiness_class_price() {
        return business_class_price;
    }

    public void setBusiness_class_price(float business_class_price) {
        this.business_class_price = business_class_price;
    }

    public float getEconomy_class_price() {
        return economy_class_price;
    }

    public void setEconomy_class_price(float economy_class_price) {
        this.economy_class_price = economy_class_price;
    }

    public float getFirst_class_price() {
        return first_class_price;
    }

    public void setFirst_class_price(float first_class_price) {
        this.first_class_price = first_class_price;
    }

    @Override
    public String toString() {
        return "Flights{" +
                "id_flights=" + id_flights +
                ", departure_time='" + departure_time + '\'' +
                ", arrival_time='" + arrival_time + '\'' +
                ", duration='" + duration + '\'' +
                ", departure_airport='" + departure_airport + '\'' +
                ", arrival_airport='" + arrival_airport + '\'' +
                ", flight_number='" + flight_number + '\'' +
                ", business_class_seat=" + business_class_seat +
                ", economy_class_seat=" + economy_class_seat +
                ", first_class_seat=" + first_class_seat +
                ", business_class_price=" + business_class_price +
                ", economy_class_price=" + economy_class_price +
                ", first_class_price=" + first_class_price +
                '}';
    }
}

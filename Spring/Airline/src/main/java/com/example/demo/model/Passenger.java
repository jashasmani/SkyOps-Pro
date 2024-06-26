package com.example.demo.model;


import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "passengers")
public class Passenger {

    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String pname1;
    @Column
    private String pname2;
    @Column
    private String pname3;
    @Column
    private String pname4;
    @Column
    private int page1;
    @Column
    private int page2;
    @Column
    private int page3;
    @Column
    private int page4;
    @Column
    private String pemail;
    @Column
    private String pcontact;
    @Column
    private String pcategory;
    @Column
    private int totalprice;

    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER    )
    @JoinColumn(name = "User_FK")
    private User passengeruser;

    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER    )
    @JoinColumn(name = "Flight_FK")
    private Flights flights;

    public Flights getFlights() {
        return flights;
    }

    public void setFlights(Flights flights) {
        this.flights = flights;
    }

    public User getPassengeruser() {
        return passengeruser;
    }

    public void setPassengeruser(User passengeruser) {
        this.passengeruser = passengeruser;
    }

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "JOIN_Passengers_Flights",
            joinColumns = {@JoinColumn(name = "Passengers_ID_FK")},
            inverseJoinColumns = {@JoinColumn(name = "Flights_ID_FK")})
    private Set<Flights> flightsSet;


    public Set<Flights> getFlightsSet() {
        return flightsSet;
    }

    public void setFlightsSet(Set<Flights> flightsSet) {
        this.flightsSet = flightsSet;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPname1() {
        return pname1;
    }

    public void setPname1(String pname1) {
        this.pname1 = pname1;
    }

    public String getPname2() {
        return pname2;
    }

    public void setPname2(String pname2) {
        this.pname2 = pname2;
    }

    public String getPname3() {
        return pname3;
    }

    public void setPname3(String pname3) {
        this.pname3 = pname3;
    }

    public String getPname4() {
        return pname4;
    }

    public void setPname4(String pname4) {
        this.pname4 = pname4;
    }

    public int getPage1() {
        return page1;
    }

    public void setPage1(int page1) {
        this.page1 = page1;
    }

    public int getPage2() {
        return page2;
    }

    public void setPage2(int page2) {
        this.page2 = page2;
    }

    public int getPage3() {
        return page3;
    }

    public void setPage3(int page3) {
        this.page3 = page3;
    }

    public int getPage4() {
        return page4;
    }

    public void setPage4(int page4) {
        this.page4 = page4;
    }

    public String getPemail() {
        return pemail;
    }

    public void setPemail(String pemail) {
        this.pemail = pemail;
    }

    public String getPcontact() {
        return pcontact;
    }

    public void setPcontact(String pcontact) {
        this.pcontact = pcontact;
    }

    public String getPcategory() {
        return pcategory;
    }

    public void setPcategory(String pcategory) {
        this.pcategory = pcategory;
    }

    public int getTotalprice() {
        return totalprice;
    }

    public void setTotalprice(int totalprice) {
        this.totalprice = totalprice;
    }

    @Override
    public String toString() {
        return "Passenger{" +
                "id=" + id +
                ", pname1='" + pname1 + '\'' +
                ", pname2='" + pname2 + '\'' +
                ", pname3='" + pname3 + '\'' +
                ", pname4='" + pname4 + '\'' +
                ", page1=" + page1 +
                ", page2=" + page2 +
                ", page3=" + page3 +
                ", page4=" + page4 +
                ", pemail='" + pemail + '\'' +
                ", pcontact='" + pcontact + '\'' +
                ", pcategory='" + pcategory + '\'' +
                ", totalprice=" + totalprice +
                '}';
    }
}

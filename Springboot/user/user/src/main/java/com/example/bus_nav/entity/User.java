package com.example.bus_nav.entity;

import jakarta.persistence.*;

@Entity
public class User {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false)
    private String name;
//    @Id
    @Column(nullable=false)
    private String email;
    @Id
    @Column(nullable=false)
    private String username;
    @Column(nullable=false)
    private String password;
    @Column(nullable=false)
    private String gender;

    public User() {
    }

    public User(Long id, String name, String email, String username, String password, String gender, String language) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.gender = gender;
        Language = language;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getLanguage() {
        return Language;
    }

    public void setLanguage(String language) {
        Language = language;
    }

    private String Language;


    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }


}

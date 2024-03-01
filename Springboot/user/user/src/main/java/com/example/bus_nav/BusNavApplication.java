package com.example.bus_nav;

import com.example.bus_nav.Repository.UserRepository;
import com.example.bus_nav.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BusNavApplication  {


    public static void main(String[] args) {
        SpringApplication.run(BusNavApplication.class, args);
    }


}

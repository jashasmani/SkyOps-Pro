package com.example.demo.contoller;


import com.example.demo.model.Flights;
import com.example.demo.service.FlightService.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/main")
public class FlightController {

    @Autowired
    private FlightService flightService;

    @GetMapping("/flights")
    public List<Flights> get() {
        return flightService.get();
    }

    @PostMapping("/flights")
    public Flights save(@RequestBody Flights flights) {
        flightService.save(flights);
        return flights;
    }


    @PutMapping("/flights/{id}")
    public ResponseEntity<Flights> update(@PathVariable int id, @RequestBody Flights flights) {
        Flights existingFlight = flightService.get(id);
        if (existingFlight != null) {
            existingFlight.setDeparture_airport(flights.getDeparture_airport());
            existingFlight.setArrival_airport(flights.getArrival_airport());
            existingFlight.setFlight_number(flights.getFlight_number());
            existingFlight.setDeparture_time(flights.getDeparture_time());
            existingFlight.setArrival_time(flights.getArrival_time());
            existingFlight.setDuration(flights.getDuration());
            existingFlight.setBusiness_class_seat(flights.getBusiness_class_seat());
            existingFlight.setEconomy_class_seat(flights.getEconomy_class_seat());
            existingFlight.setFirst_class_seat(flights.getFirst_class_seat());
            existingFlight.setBusiness_class_price(flights.getBusiness_class_price());
            existingFlight.setEconomy_class_price(flights.getEconomy_class_price());
            existingFlight.setFirst_class_price(flights.getFirst_class_price());

            flightService.save(existingFlight);
            return ResponseEntity.ok(existingFlight);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/flights/{id}")
    public String delete(@PathVariable int id) {
        flightService.delete(id);
        return ("User with id " + id + " has been deleted");
    }
}

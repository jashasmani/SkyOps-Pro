package com.example.demo.contoller;


import com.example.demo.model.Flights;
import com.example.demo.service.FlightService.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


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

    @GetMapping("/flights/{departureAirport}/{arrivalAirport}/{dateString}")
    public ResponseEntity<List<Flights>> getData(@PathVariable Map<String, String> map) {
        String departureAirport = map.get("departureAirport");
        String arrivalAirport = map.get("arrivalAirport");
        String dateString = map.get("dateString");
        String departureTimeString = map.get("departureTimeString");
        String arrivalTimeString = map.get("arrivalTimeString");

        List<Flights> allFlights = flightService.get();

        List<Flights> filteredFlights = allFlights.stream().filter(flight -> departureAirport == null || flight.getDeparture_airport().equals(departureAirport)).filter(flight -> arrivalAirport == null || flight.getArrival_airport().equals(arrivalAirport)).filter(flight -> dateString == null || dateString.equals("Invalid Date") || flight.getDate().equals(dateString)).collect(Collectors.toList());


        if (filteredFlights.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(filteredFlights, HttpStatus.OK);
        }
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
            existingFlight.setDate(flights.getDate());
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


    @PutMapping("/upadteseatflights/{id}")
    public ResponseEntity<Flights> updateSeats(@PathVariable int id, @RequestBody Flights flights) {
        Flights existingFlight = flightService.get(id);
        if (existingFlight != null) {

            existingFlight.setBusiness_class_seat(flights.getBusiness_class_seat());
            existingFlight.setEconomy_class_seat(flights.getEconomy_class_seat());
            existingFlight.setFirst_class_seat(flights.getFirst_class_seat());

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

package com.airline.user.contoller;


import com.airline.user.model.Flights;
import com.airline.user.service.FlightService.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
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


    @PutMapping("/flights")
    public Flights update(@RequestBody Flights flights) {
        flightService.save(flights);
        return flights;
    }

    @DeleteMapping("/flights/{id}")
    public String delete(@PathVariable int id) {
        flightService.delete(id);
        return ("User with id " + id + " has been deleted");
    }
}

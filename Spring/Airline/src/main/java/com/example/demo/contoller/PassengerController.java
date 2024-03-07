package com.example.demo.contoller;

import com.example.demo.model.Passenger;
import com.example.demo.service.PassengerService.PassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/ticket")
public class PassengerController {


    @Autowired
    private PassengerService passengerService;

    @GetMapping("/passenger")
    public List<Passenger> get() {
        return passengerService.get();
    }

    @PostMapping("/passenger")
    public Passenger save(@RequestBody Passenger passenger) {
        passengerService.save(passenger);
        return passenger;
    }




    @GetMapping("/passenger/{id}")
    public Passenger get(@PathVariable int id) {
        Passenger passenger = passengerService.get(id);
        if (passenger == null) {
            throw new RuntimeException("Passenger not Found By ID :" + id);
        }
        return passenger;
    }


    @PutMapping("/passenger")
    public Passenger update(@RequestBody Passenger passenger) {
        passengerService.save(passenger);
        return passenger;
    }

    @DeleteMapping("/passenger/{id}")
    public String delete(@PathVariable int id) {
        passengerService.delete(id);
        return ("Passenger with id " + id + " has been deleted");
    }
}



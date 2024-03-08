package com.example.demo.contoller;

import com.example.demo.model.Flights;
import com.example.demo.model.Passenger;
import com.example.demo.model.User;
import com.example.demo.service.PassengerService.PassengerService;
import com.example.demo.service.UserService.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/ticket")
public class PassengerController {


    @Autowired
    private PassengerService passengerService;
    @Autowired
    private UserService userService;


    @GetMapping("/passenger")
    public List<Passenger> get() {
        return passengerService.get();
    }

    @GetMapping("/passengers/{id}")
    public ResponseEntity<?> getByUser(@PathVariable int id) {

        List<Passenger> listPassenger = passengerService.getUserById(id);

        if (listPassenger.isEmpty()) {
            return ResponseEntity.badRequest().body("educations not found");
        } else {
            return ResponseEntity.ok(listPassenger);
        }

    }

    @PostMapping("/passenger")
    public Passenger save(@RequestBody Passenger passenger) {
        passengerService.save(passenger);
        return passenger;
    }

    @PostMapping("/passenger/{id}")
    public ResponseEntity<?> storeDetails(@RequestBody Passenger passenger, @PathVariable int id) {
        User user1 = userService.get(id);

        if (user1 == null) {
            return ResponseEntity.badRequest().body("User not found with ID: " + id);
        } else {
            if (passenger != null) {
                passenger.setPassengeruser(user1);
                passengerService.save(passenger);
                return ResponseEntity.ok(passenger);
            } else {
                return ResponseEntity.badRequest().body("Details are empty");
            }
        }
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



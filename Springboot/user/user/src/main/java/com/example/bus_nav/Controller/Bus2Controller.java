package com.example.bus_nav.Controller;

import com.example.bus_nav.Repository.RouteRepository;
import com.example.bus_nav.Service.Bus2Service;
import com.example.bus_nav.Service.RouteService;
import com.example.bus_nav.entity.Bus2;
import com.example.bus_nav.entity.Route;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/bus")
@CrossOrigin
public class Bus2Controller {
    @Autowired
    private Bus2Service bus2Service;

    @Autowired
    private RouteRepository routeRepository;


    @PostMapping("/add")
    public Bus2 addBus2(@RequestBody Bus2 bus2) {
        return bus2Service.saveBus2(bus2);
    }


    @GetMapping("/getAll")
    public List<Bus2> getAllBus2(){
        return bus2Service.getAllBus2();
    }

    @GetMapping("/get/{id}")
    public Optional<Bus2> getBus2(@PathVariable long busId){
        return bus2Service.getBus2(busId);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteBus2(@PathVariable long busId) {
        bus2Service.deleteBus2(busId);
    }

    @GetMapping("/buses")
    public ResponseEntity<List<Bus2>> getBusesByOriginAndDestination(
            @RequestParam("origin") String origin,
            @RequestParam("destination") String destination) {

        List<Bus2> buses = bus2Service.getBusesByOriginAndDestination(origin, destination);
        return ResponseEntity.ok(buses);
    }
//@GetMapping("/buses")
//    public List<Route> getBusesByOriginAndDestination(@RequestParam String origin, @RequestParam String destination) {
//        return routeRepository.findByOriginAndDestination(origin, destination);
//    }
}

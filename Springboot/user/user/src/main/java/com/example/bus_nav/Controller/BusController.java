package com.example.bus_nav.Controller;

import com.example.bus_nav.Service.BusService;
import com.example.bus_nav.entity.Bus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

    @RestController
    @RequestMapping("/admin")
    @CrossOrigin
public class  BusController {

    @Autowired
    private BusService busService;


    @PostMapping("/add")
    public Bus addBus(@RequestBody Bus bus) {
        return busService.saveBus(bus);
    }


    @GetMapping("/getAll")
    public List<Bus> getAllBus(){
        return busService.getAllBus();
    }

    @GetMapping("/get/{id}")
    public Optional<Bus> getBus(@PathVariable long id){
        return busService.getBUs(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteBus(@PathVariable long id) {
        busService.deleteBus(id);
    }

}

package com.example.bus_nav.Service;

import com.example.bus_nav.Repository.Bus2Repository;
import com.example.bus_nav.entity.Bus;
import com.example.bus_nav.entity.Bus2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Bus2ServiceImpl implements Bus2Service {
    @Autowired
    private Bus2Repository bus2Repository;
    @Override
    public Bus2 saveBus2(Bus2 bus2) {
        return bus2Repository.save(bus2);
    }

    @Override
    public List<Bus2> getAllBus2() {
        return bus2Repository.findAll();
    }

    @Override
    public Optional<Bus2> getBus2(long busid) {
        return bus2Repository.findById(busid);
    }

    @Override
    public void deleteBus2(long busid) {
        bus2Repository.deleteById(busid);
    }

    @Override
    public List<Bus2> getBusesByOriginAndDestination(String origin, String destination) {
        return bus2Repository.findByRouteOriginAndRouteDestination(origin,destination);
    }



}

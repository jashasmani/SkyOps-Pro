package com.example.bus_nav.Service;

import com.example.bus_nav.entity.Bus;
import com.example.bus_nav.entity.Bus2;

import java.util.List;
import java.util.Optional;

public interface BusService {
    public Bus saveBus(Bus bus);
    public List<Bus> getAllBus();

    public Optional<Bus> getBUs(long id);

    public void deleteBus(long id);

}

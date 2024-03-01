package com.example.bus_nav.Service;

import com.example.bus_nav.entity.Bus;
import com.example.bus_nav.entity.Bus2;

import java.util.List;
import java.util.Optional;

public interface Bus2Service {
    public Bus2 saveBus2(Bus2 bus2);
    public List<Bus2> getAllBus2();

    public Optional<Bus2> getBus2(long busid);

    public void deleteBus2(long busid);

//    List<Bus2> getBusesByCities(String origin, String destination);

    List<Bus2> getBusesByOriginAndDestination(String origin, String destination);
}

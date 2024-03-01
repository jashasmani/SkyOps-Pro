package com.example.bus_nav.Service;

import com.example.bus_nav.Repository.BusRepository;
import com.example.bus_nav.entity.Bus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BusServiceImpl implements BusService{
    @Override
    public Optional<Bus> getBUs(long id) {
        return busRepository.findById(id);
    }

    @Override
    public void deleteBus(long id) {
        busRepository.deleteById(id);
    }

    @Autowired
    private BusRepository busRepository;
    @Override
    public Bus saveBus(Bus bus) {
        return busRepository.save(bus);
    }

    @Override
    public List<Bus> getAllBus() {
        return busRepository.findAll();
    }
}

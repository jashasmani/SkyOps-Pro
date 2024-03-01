package com.example.bus_nav.Repository;

import com.example.bus_nav.entity.Bus2;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface Bus2Repository extends JpaRepository<Bus2,Long> {

    Optional<Bus2> findById(Long busId);

//        List<Bus2> findByRoute_OriginAndRoute_Destination(String origin, String destination);
//        List<Bus2> findByOriginAndDestination(String origin, String destination);
List<Bus2> findByRouteOriginAndRouteDestination(String origin, String destination);


}

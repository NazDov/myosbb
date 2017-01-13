package com.softserve.osbb.repository;

import com.softserve.osbb.model.Osbb;
import com.softserve.osbb.model.Services;
import com.softserve.osbb.model.SubServices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by afedorak on 25.11.2016.
 */
@Repository
public interface ServicesRepository extends JpaRepository<Services, Long> {
    List<Services> findByOsbb(Osbb osbb);
}

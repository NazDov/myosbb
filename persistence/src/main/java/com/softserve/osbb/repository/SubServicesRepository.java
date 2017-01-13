package com.softserve.osbb.repository;

import com.softserve.osbb.model.Services;
import com.softserve.osbb.model.SubServices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by afedorak on 25.11.2016.
 */
@Repository
public interface SubServicesRepository extends JpaRepository<SubServices, Long> {
    List<SubServices> findByServiceId(long id);
}

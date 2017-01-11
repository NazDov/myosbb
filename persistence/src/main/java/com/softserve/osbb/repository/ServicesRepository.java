package com.softserve.osbb.repository;

import com.softserve.osbb.model.Services;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by afedorak on 25.11.2016.
 */
@Repository
public interface ServicesRepository extends JpaRepository<Services, Long> {
}

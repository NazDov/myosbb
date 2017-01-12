package com.softserve.osbb.repository;

import com.softserve.osbb.model.ContactOsbbCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by afedorak on 25.11.2016.
 */
@Repository
public interface ContactOsbbCategoryRepository extends JpaRepository<ContactOsbbCategory, Long> {

        List<ContactOsbbCategory> findByManagementTrue();
        List<ContactOsbbCategory> findByManagementFalse();

}

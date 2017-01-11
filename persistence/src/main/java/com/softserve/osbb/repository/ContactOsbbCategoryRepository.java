package com.softserve.osbb.repository;

import com.softserve.osbb.model.ContactOsbbCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by afedorak on 25.11.2016.
 */
@Repository
public interface ContactOsbbCategoryRepository extends JpaRepository<ContactOsbbCategory, Long> {
}

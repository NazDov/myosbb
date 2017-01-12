package com.softserve.osbb.repository;

import com.softserve.osbb.model.ContactOsbb;
import com.softserve.osbb.model.ContactOsbbCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by afedorak on 25.11.2016.
 */
@Repository
public interface ContactOsbbRepository extends JpaRepository<ContactOsbb, Long> {

   List<ContactOsbb> findByContactCategory(ContactOsbbCategory contactOsbbCategory);

}

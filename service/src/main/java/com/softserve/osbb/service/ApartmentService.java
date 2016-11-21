package com.softserve.osbb.service;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.softserve.osbb.model.Apartment;

/**
 * Created by Oleg on 12.07.2016.
 */
@Service
public interface ApartmentService {
    void saveApartment(Apartment apartment);

    void saveApartmentList(List<Apartment> list);

    Apartment findOneApartmentByID(Integer id);

    List<Apartment> findAllApartment();

    void deleteApartment(Apartment apartment);

    void deleteApartmentByID(Integer id);

    Apartment updateApartment(Apartment apartment);

    Page<Apartment> getAllApartment(Integer pageNumber, String sortedBy, Boolean ascOrder,Integer number,Integer osbbID);

    Page<Apartment> getAllApartmentsToAdmin(Integer pageNumber, String sortedBy, Boolean ascOrder,Integer number);

}

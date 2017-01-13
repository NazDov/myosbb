package com.softserve.osbb.service;

import com.softserve.osbb.model.Osbb;
import com.softserve.osbb.model.Services;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 * Created by afedorak on 11.01.2017.
 */
@Service
public interface ServicesService {
    void saveSevice(Services sevices);

    void saveSevicesList(List<Services> list);

    Services findOneSevicesByID(Long id);

    List<Services> findAllSevices();
    List<Services> findSevicesByOsbb(Osbb osbb);

    void deleteSevice(Services sevices);

    void deleteSeviceByID(Long id);

    Services updateSevice(Services sevice);

    Page<Services> getAllSevice(Integer pageNumber, String sortedBy, Boolean ascOrder, Integer number, Integer osbbID);

}

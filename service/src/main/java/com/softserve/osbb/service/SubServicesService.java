package com.softserve.osbb.service;

import com.softserve.osbb.model.Services;
import com.softserve.osbb.model.SubServices;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 * Created by afedorak on 11.01.2017.
 */
@Service
public interface SubServicesService {
    void saveSubSevice(SubServices sevices);

    void saveSubSevicesList(List<SubServices> list);

    SubServices findOneSubSeviceByID(Long id);
    List<SubServices> findSubSevicesByParentID(Long id);

    List<SubServices> findAllSubSevices();

    void deleteSubSevice(SubServices sevices);

    void deleteSubSeviceByID(Long id);

    SubServices updateSubSevice(SubServices sevice);

}

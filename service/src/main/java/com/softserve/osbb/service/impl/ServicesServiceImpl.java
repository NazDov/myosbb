package com.softserve.osbb.service.impl;

import com.softserve.osbb.model.Osbb;
import com.softserve.osbb.model.Services;
import com.softserve.osbb.repository.ServicesRepository;
import com.softserve.osbb.service.ServicesService;
import com.softserve.osbb.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by afedorak on 11.01.2017.
 */
@Service
public class ServicesServiceImpl implements ServicesService {

    @Autowired
    ServicesRepository servicesRepository;

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public void saveSevice(Services sevices) {
        servicesRepository.save(sevices);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public void saveSevicesList(List<Services> list) {
        servicesRepository.save(list);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public Services findOneSevicesByID(Long id) {
        return servicesRepository.getOne(id);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public List<Services> findAllSevices() {
        return servicesRepository.findAll();
    }

    @Override
    @Transactional
    public List<Services> findSevicesByOsbb(Osbb osbb) {
        return servicesRepository.findByOsbb(osbb);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public void deleteSevice(Services sevices) {
        servicesRepository.delete(sevices);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public void deleteSeviceByID(Long id) {
        servicesRepository.delete(id);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public Services updateSevice(Services sevice) {
        return servicesRepository.save(sevice);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public Page<Services> getAllSevice(Integer pageNumber, String sortedBy, Boolean ascOrder, Integer number, Integer osbbID) {
        PageRequest pageRequest = new PageRequest(pageNumber - 1, Constants.DEF_ROWS,
                getSortingOrder(ascOrder), sortedBy == null ? "name" : sortedBy);
        return servicesRepository.findAll(pageRequest);
    }

    public Sort.Direction getSortingOrder(Boolean order) {
        if (order == null) {
            return Sort.Direction.DESC;
        }
        return order == true ? Sort.Direction.ASC : Sort.Direction.DESC;
    }
}

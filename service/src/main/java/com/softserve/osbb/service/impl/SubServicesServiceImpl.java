package com.softserve.osbb.service.impl;

import com.softserve.osbb.model.Services;
import com.softserve.osbb.model.SubServices;
import com.softserve.osbb.repository.SubServicesRepository;
import com.softserve.osbb.service.SubServicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by afedorak on 13.01.2017.
 */
@Service
public class SubServicesServiceImpl implements SubServicesService {

    @Autowired
    SubServicesRepository subServicesRepository;

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public void saveSubSevice(SubServices sevices) {
        subServicesRepository.save(sevices);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public void saveSubSevicesList(List<SubServices> list) {
        subServicesRepository.save(list);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public SubServices findOneSubSeviceByID(Long id) {
        return subServicesRepository.getOne(id);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public List<SubServices> findSubSevicesByParentID(Long id) {
        Services services = new Services(id);
        return subServicesRepository.findByServiceId(services.getServiceId());
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public List<SubServices> findAllSubSevices() {
        return subServicesRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public void deleteSubSevice(SubServices sevices) {
        subServicesRepository.delete(sevices);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public void deleteSubSeviceByID(Long id) {
        subServicesRepository.delete(id);
    }

    @Override
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public SubServices updateSubSevice(SubServices sevice) {
        return subServicesRepository.save(sevice);
    }
}

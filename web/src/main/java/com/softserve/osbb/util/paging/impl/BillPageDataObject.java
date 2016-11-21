package com.softserve.osbb.util.paging.impl;

import org.springframework.hateoas.Resource;
import org.springframework.stereotype.Component;

import com.softserve.osbb.dto.BillDTO;
import com.softserve.osbb.util.paging.PageDataObject;

/**
 * Created by nazar.dovhyy on 18.08.2016.
 */
@Component
public class BillPageDataObject extends PageDataObject<Resource<BillDTO>> {

    private Integer apartmentId;

    public Integer getApartmentId() {
        return apartmentId;
    }

    public void setApartmentId(Integer apartmentId) {
        this.apartmentId = apartmentId;
    }

}

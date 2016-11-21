package com.softserve.osbb.util.paging.impl;

import java.util.List;

import org.springframework.hateoas.Resource;

import com.softserve.osbb.model.Ticket;
import com.softserve.osbb.util.paging.PageDataObject;

/**
 * Created by Kris on 29.08.2016.
 */
public class TicketPageDataObject extends PageDataObject<Resource<Ticket>> {

    private List<String> dates;

    public List<String> getDates() {
        return dates;
    }


}

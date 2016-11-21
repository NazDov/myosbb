package com.softserve.osbb.service;

import org.springframework.stereotype.Service;

import com.softserve.osbb.model.Osbb;
import com.softserve.osbb.model.User;

/**
 * Created by nazar.dovhyy on 29.10.2016.
 */
@Service
public interface RegistrationService {


    User registrate(User user);

    Osbb registrate(Osbb osbb);


}

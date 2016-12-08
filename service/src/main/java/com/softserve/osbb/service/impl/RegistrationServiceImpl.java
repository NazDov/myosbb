package com.softserve.osbb.service.impl;

import com.softserve.osbb.model.Osbb;
import com.softserve.osbb.model.Role;
import com.softserve.osbb.model.Settings;
import com.softserve.osbb.model.User;
import com.softserve.osbb.service.*;

import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by nazar.dovhyy on 29.10.2016.
 */
@Service
public class RegistrationServiceImpl implements RegistrationService {
	public static String[] abc = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"};
	
	private String password = "";
	
	public  String generatePassword() {
		Random  random = new Random();
		String randomPassword = "";
        
        int lenght = random.nextInt(13)+4;
        System.out.println(lenght);
       
        for(int ind = 0; ind < lenght ; ind++) {
        	int randNum = random.nextInt(3)+1;
  
            if(randNum%3 == 1) {
                randomPassword += abc[random.nextInt(abc.length)];
            }
            else if(randNum%3 == 2) {
                randomPassword += abc[random.nextInt(abc.length)].toUpperCase();
            }
            else{
                randomPassword += random.nextInt(10);
            }
        }
        password = randomPassword;
        return randomPassword;
    }
		

    private static final Logger logger = LoggerFactory.getLogger(RegistrationServiceImpl.class);
    @Autowired
    private UserService userService;
    @Autowired
    private OsbbService osbbService;
    @Autowired
    private SettingsService settingsService;
    @Autowired
    private RoleService roleService;

    @Transactional(readOnly = false,
            isolation = Isolation.SERIALIZABLE,
            propagation = Propagation.REQUIRED)
    @Override
    public User registrate(User user) {
        logger.info("registrating new user " + user);
        System.out.println("user out "+user);
        if(user.getPassword() == null) {
        	user.setPassword(generatePassword());
        }
        User registeredUser = userService.save(user);
        settingsService.save(new Settings(registeredUser));
        return registeredUser;
    }

    @Transactional(readOnly = false,
            isolation = Isolation.SERIALIZABLE,
            propagation = Propagation.REQUIRED)
    @Override
    public Osbb registrate(Osbb newOsbb) {
        logger.info("registering new osbb " + newOsbb);
        if (!osbbService.findByNameContaining(newOsbb.getName()).isEmpty()) {
            throw new IllegalArgumentException("osbb with such name " + newOsbb.getName() + " already exists");
        }
        User creator = newOsbb.getCreator();
        creator = registrate(creator);
        newOsbb = osbbService.addOsbb(newOsbb);
        creator.setOsbb(newOsbb);
        creator.setRole(roleService.getRole("ROLE_MANAGER"));
        userService.update(creator);
        return newOsbb;

    }

    @Override
	public String getPassword() {
		return password;
	}

    @Override
	public void setPassword(String password) {
		this.password = password;
	}
    
}

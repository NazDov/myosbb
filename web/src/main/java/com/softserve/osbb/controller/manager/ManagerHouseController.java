package com.softserve.osbb.controller.manager;

import com.softserve.osbb.controller.HouseController;
import com.softserve.osbb.dto.HouseDTO;
import com.softserve.osbb.dto.mappers.HouseDTOMapper;
import com.softserve.osbb.model.House;
import com.softserve.osbb.service.HouseService;
import com.softserve.osbb.service.UserService;
import com.softserve.osbb.util.resources.impl.HouseResourceList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

import static com.softserve.osbb.util.resources.util.ResourceUtil.toResource;

/**
 * Created by nazar.dovhyy on 22.11.2016.
 */
@RestController
@CrossOrigin
@RequestMapping("restful/manager/house")
public class ManagerHouseController {

    private static Logger logger = LoggerFactory.getLogger(ManagerHouseController.class);
    @Autowired
    private HouseService houseService;
    @Autowired
    private UserService userService;

    @PreAuthorize("hasRole('ROLE_MANAGER')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Resource<HouseDTO>> createHouse(
            @RequestBody HouseDTO houseDTO,
            @AuthenticationPrincipal Principal principal) {
        logger.info("adding new house to database");
        House house = HouseDTOMapper.mapHouseDTOToHouse(houseDTO);
        house = houseService.managerCreateHouseWithApartments(
                house,
                principal.getName(),
                houseDTO.getApartmentCount());
        if (house == null) {
            logger.error("house was not saved to the database");
            throw new HouseController.HouseNotSavedException();
        }
        logger.info("house updated with random apartments created");
        return new ResponseEntity<>(new HouseResourceList()
                .createLink(toResource(HouseDTOMapper.mapHouseEntityToDTO(house, houseService))), HttpStatus.OK);
    }

}

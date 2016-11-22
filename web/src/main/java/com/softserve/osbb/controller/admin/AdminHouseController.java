package com.softserve.osbb.controller.admin;

import com.softserve.osbb.controller.HouseController;
import com.softserve.osbb.dto.HouseDTO;
import com.softserve.osbb.dto.PageParams;
import com.softserve.osbb.dto.mappers.HouseDTOMapper;
import com.softserve.osbb.model.House;
import com.softserve.osbb.service.HouseService;
import com.softserve.osbb.util.paging.PageDataObject;
import com.softserve.osbb.util.paging.PageDataUtil;
import com.softserve.osbb.util.paging.generator.PageRequestGenerator;
import com.softserve.osbb.util.paging.impl.HousePageDataObject;
import com.softserve.osbb.util.resources.impl.EntityResourceList;
import com.softserve.osbb.util.resources.impl.HouseResourceList;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import static com.softserve.osbb.util.resources.util.ResourceUtil.toResource;

/**
 * Created by nazar.dovhyy on 22.11.2016.
 */
@RestController
@CrossOrigin
@RequestMapping("/restful/admin/house")
public class AdminHouseController {

    private static Logger logger = LoggerFactory.getLogger(AdminHouseController.class);

    @Autowired
    private HouseService houseService;

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Resource<HouseDTO>> createHouse(@RequestBody HouseDTO houseDTO) {
        logger.info("adding new house to database");
        House house = HouseDTOMapper.mapHouseDTOToHouse(houseDTO);
        house = houseService.adminCreateHouseWithApartments(house, houseDTO.getApartmentCount());
        if (house == null) {
            logger.error("house was not saved to the database");
            throw new HouseController.HouseNotSavedException();
        }
        logger.info("house updated with random apartments created");
        Resource<HouseDTO> resourceHouseDTO = new HouseResourceList()
                .createLink(toResource(HouseDTOMapper.mapHouseEntityToDTO(house, houseService)));
        return new ResponseEntity<>(resourceHouseDTO, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/all", method = RequestMethod.POST)
    public ResponseEntity<PageDataObject<Resource<HouseDTO>>> getAllHouses(
            @RequestBody PageParams pageParams) {
        logger.info("get all houses by page number: " + pageParams.getPageNumber());
        Page<House> housesByPage = houseService.getAllHouses(
                PageRequestGenerator.generatePageRequest(pageParams.getPageNumber())
                        .addSortedBy(pageParams.getSortedBy(), "street")
                        .addOrderType(pageParams.getOrderType())
                        .addRows(pageParams.getRowNum())
                        .toPageRequest());
        EntityResourceList<HouseDTO> houseDTOEntityResourceList = new HouseResourceList();
        housesByPage.forEach(house -> {
                    HouseDTO houseDTO = HouseDTOMapper.mapHouseEntityToDTO(house, houseService);
                    logger.info("houseDTO created " + houseDTO.toString());
                    houseDTOEntityResourceList.add(toResource(houseDTO));
                }
        );
        PageDataObject<Resource<HouseDTO>> houseDtoPageData = PageDataUtil
                .providePageData(HousePageDataObject.class,
                        PageRequestGenerator.generatePageSelectorData(housesByPage),
                        houseDTOEntityResourceList);

        return new ResponseEntity<>(houseDtoPageData, HttpStatus.OK);
    }


    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/{houseId}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteHouseById(@PathVariable("houseId") Integer houseId) {
        logger.info("deleting house by id: " + houseId);
        final boolean isDeleted = houseService.deleteHouseById(houseId);

        if (!isDeleted) {
            logger.warn("no house was found by id: " + houseId);
            throw new HouseController.HouseNotFoundException();
        }

        logger.info("successfully deleted house with id: " + houseId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

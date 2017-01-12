package com.softserve.osbb.dto.mappers;

import com.softserve.osbb.dto.AbstractDTO;
import com.softserve.osbb.dto.ContactOsbbDto;
import com.softserve.osbb.model.ContactOsbb;
import com.softserve.osbb.model.ContactOsbbCategory;
import com.softserve.osbb.model.Osbb;
import com.softserve.osbb.model.User;

/**
 * Created by afedorak on 12.01.2017.
 */
public class ContactOsbbDtoMapper extends AbstractDTOMapper<ContactOsbb, ContactOsbbDto> {


    @Override
    public ContactOsbbDto mapEntityToDTO(ContactOsbb entity) {
        ContactOsbbDto contactOsbbDto = new ContactOsbbDto();
        contactOsbbDto.setId(entity.getId());
        contactOsbbDto.setUserId((entity.getUser()!=null)? entity.getUser().getUserId() :null);
        contactOsbbDto.setApartmentNum((entity.getUser()!=null && entity.getUser().getApartment() != null)?
                entity.getUser().getApartment().getNumber() :null);
        contactOsbbDto.setContactCategoryName((entity.getContactCategory()!=null)?entity.getContactCategory().getName():"");
        contactOsbbDto.setContactCategoryId((entity.getContactCategory()!=null)?entity.getContactCategory().getId():null);
        contactOsbbDto.setFirstName(entity.getFirstName());
        contactOsbbDto.setLastName(entity.getLastName());
        contactOsbbDto.setMiddleName(entity.getMiddleName());
        contactOsbbDto.setOsbbId((entity.getOsbb()!=null)?entity.getOsbb().getOsbbId():null);
        contactOsbbDto.setPhone(entity.getPhone());
        contactOsbbDto.setPhone2(entity.getPhone2());
        contactOsbbDto.setAttachments(entity.getAttachments());
        return contactOsbbDto;
    }

    @Override
    public ContactOsbb mapDTOToEntity(ContactOsbbDto dto) {
        ContactOsbb contactOsbb = new ContactOsbb();
        contactOsbb.setId(dto.getId());
        contactOsbb.setAttachments(dto.getAttachments());
        contactOsbb.setPhone(dto.getPhone());
        contactOsbb.setPhone2(dto.getPhone2());
        contactOsbb.setContactCategory(new ContactOsbbCategory(dto.getContactCategoryId()));
        contactOsbb.setFirstName(dto.getFirstName());
        contactOsbb.setMiddleName(dto.getMiddleName());
        contactOsbb.setLastName(dto.getLastName());
        contactOsbb.setOsbb(new Osbb(dto.getOsbbId()));
        contactOsbb.setUser(new User(dto.getUserId()));

        return contactOsbb;
    }
}

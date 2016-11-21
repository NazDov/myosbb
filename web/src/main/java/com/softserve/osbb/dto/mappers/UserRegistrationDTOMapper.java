package com.softserve.osbb.dto.mappers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.softserve.osbb.dto.UserRegistrationDTO;
import com.softserve.osbb.dto.adapter.UserRegistrationToUserAdapter;
import com.softserve.osbb.model.User;

/**
 * Created by ndovhuy on 27.10.2016.
 */
@Component
public class UserRegistrationDTOMapper extends AbstractDTOMapper<User, UserRegistrationDTO> {

    @Autowired
    private UserRegistrationToUserAdapter userRegistrationToUserAdapter;

    @Override
    public UserRegistrationDTO mapEntityToDTO(User entity) {
        throw new UnsupportedOperationException();
    }


    @Override
    public User mapDTOToEntity(UserRegistrationDTO dto) {
        User user = userRegistrationToUserAdapter.parse(dto);
        return user;
    }
}

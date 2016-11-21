package com.softserve.osbb.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.softserve.osbb.model.Notice;
import com.softserve.osbb.model.User;

/**
 * Created by Kris on 06.09.2016.
 */
@Service
public interface NoticeService {

    Notice save(Notice notice);

    Notice findOne(Integer id);

    Notice findOne(String id);

    boolean exists(Integer id);

    void delete(Integer id);

    List<Notice> findAll();

    List<Notice> findNoticesOfUser(User user);
}

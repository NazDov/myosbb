package com.softserve.osbb.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.softserve.osbb.model.Vote;

/**
 * Created by Roman on 10.07.2016.
 */

@Service
public interface VoteService {

    Vote addVote(Vote vote);

    Vote getVoteById(Integer id);

    List<Vote> getAllAvailable();

    List<Vote> getAllVotesByDateOfCreation();

    boolean existsVote(Integer id);

    void deleteVote(Integer id);

    void deleteVote(Vote vote);

}

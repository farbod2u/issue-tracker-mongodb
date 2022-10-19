package com.saeed.backend.service;

import com.saeed.backend.entity.Issue;
import com.saeed.backend.repository.IssueRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class IssueService {

    private final IssueRepository issueRepository;

    public Issue insert(Issue entity){
        return issueRepository.save(entity);
    }

    public List<Issue> getAll(){
        return issueRepository.findAll();
    }

    public Issue get(String id){
        return issueRepository.findById(id).orElseThrow(() -> new RuntimeException("not found"));
    }

    public Issue update(Issue entity){
        return issueRepository.save(entity);
    }

    public String delete(String id){
        issueRepository.deleteById(id);
        return "deleted";
    }

}

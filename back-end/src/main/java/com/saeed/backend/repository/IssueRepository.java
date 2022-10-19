package com.saeed.backend.repository;

import com.saeed.backend.entity.Issue;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

public interface IssueRepository extends MongoRepository<Issue, String> {
}

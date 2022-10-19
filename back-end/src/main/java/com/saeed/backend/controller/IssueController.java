package com.saeed.backend.controller;

import com.saeed.backend.entity.Issue;
import com.saeed.backend.service.IssueService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issue")
@RequiredArgsConstructor
public class IssueController {

    private final IssueService issueService;

    @PostMapping
    public ResponseEntity<Issue> insert(@RequestBody Issue entity){
        return new ResponseEntity<>(issueService.insert(entity), HttpStatus.OK);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<Issue>> getAll(){
        return new ResponseEntity<>(issueService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Issue> get(@PathVariable("id") String id){
        return new ResponseEntity<>(issueService.get(id), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Issue> update(@RequestBody Issue entity){
        return new ResponseEntity<>(issueService.update(entity), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") String id){
        return new ResponseEntity<>(issueService.delete(id), HttpStatus.OK);
    }

}

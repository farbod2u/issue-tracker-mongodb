package com.saeed.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Issue {
    @Id
    private String _id;
    private String title;
    private String responsible;
    private String description;
    private String severity;
    private String status;
}

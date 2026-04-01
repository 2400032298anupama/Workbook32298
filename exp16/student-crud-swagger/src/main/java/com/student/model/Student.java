package com.student.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
@Schema(description = "Student Entity")
public class Student {

    @Id
    @Schema(description = "Student ID", example = "1")
    private Long id;

    @Schema(description = "Student Name", example = "Tejaswini")
    private String name;

    @Schema(description = "Student Email", example = "teja@gmail.com")
    private String email;

    @Schema(description = "Student Course", example = "CSE")
    private String course;

    public Student() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getCourse() { return course; }
    public void setCourse(String course) { this.course = course; }
}
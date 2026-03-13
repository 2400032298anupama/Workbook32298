package com.klu.library.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klu.library.model.Book;
import com.klu.library.service.BookService;

@RestController
public class LibraryController {

    @Autowired
    BookService service;

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Online Library System";
    }

    @GetMapping("/count")
    public int count() {
        return 100;
    }

    @GetMapping("/price")
    public double price() {
        return 499.99;
    }

    @GetMapping("/books")
    public List<String> books() {

        List<String> titles = new ArrayList<>();

        titles.add("Java Programming");
        titles.add("Spring Boot Guide");
        titles.add("Data Structures");

        return titles;
    }

    @GetMapping("/books/{id}")
    public String bookDetails(@PathVariable int id) {
        return "Details of Book ID : " + id;
    }

    @GetMapping("/search")
    public String search(@RequestParam String title) {
        return "Searching for book : " + title;
    }

    @GetMapping("/author/{name}")
    public String author(@PathVariable String name) {
        return "Books written by author : " + name;
    }

    @PostMapping("/addbook")
    public String addBook(@RequestBody Book book) {
        service.addBook(book);
        return "Book Added Successfully";
    }

    @GetMapping("/viewbooks")
    public List<Book> viewBooks() {
        return service.getAllBooks();
    }
}
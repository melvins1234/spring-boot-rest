package com.rakutech.rakutech.controller;

import java.awt.print.Book;
import java.util.Optional;

import javax.validation.Valid;

import org.apache.tomcat.jni.Library;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rakutech.rakutech.model.ProductImages;
import com.rakutech.rakutech.repository.ProductImageRepository;

@RestController
@RequestMapping("/api/product-images")
public class ProductImageController {
	
	@Autowired
	ProductImageRepository productImageRepository;
	
//	@PutMapping("/{id}")
//    public ResponseEntity<ProductImages> update(@RequestBody @Valid ProductImages productImages, @PathVariable Integer id) {
//        Optional<ProductImages> optionalProductImages = productImageRepository.findById(book.getLibrary().getId());
//        if (!optionalLibrary.isPresent()) {
//            return ResponseEntity.unprocessableEntity().build();
//        }
//
//        Optional<Book> optionalBook = bookRepository.findById(id);
//        if (!optionalBook.isPresent()) {
//            return ResponseEntity.unprocessableEntity().build();
//        }
//
//        book.setLibrary(optionalLibrary.get());
//        book.setId(optionalBook.get().getId());
//        bookRepository.save(book);
//
//        return ResponseEntity.noContent().build();
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Book> delete(@PathVariable Integer id) {
//        Optional<Book> optionalBook = bookRepository.findById(id);
//        if (!optionalBook.isPresent()) {
//            return ResponseEntity.unprocessableEntity().build();
//        }
//
//        bookRepository.delete(optionalBook.get());
//
//        return ResponseEntity.noContent().build();
//    }

}

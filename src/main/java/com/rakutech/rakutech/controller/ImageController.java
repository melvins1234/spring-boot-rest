package com.rakutech.rakutech.controller;

import java.io.File;
import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rakutech.rakutech.config.ImageResourceHttpRequestHandler;

@RestController
@RequestMapping("/api/images")
public class ImageController {
	@Resource
    private ImageResourceHttpRequestHandler imageResourceHttpRequestHandler;

    @GetMapping("/{image}")
    public void download(@PathVariable String image, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse)
            throws ServletException, IOException {
        File file = new File("images/" + image);
        httpServletRequest.setAttribute(ImageResourceHttpRequestHandler.ATTRIBUTE_FILE, file);
        imageResourceHttpRequestHandler.handleRequest(httpServletRequest, httpServletResponse);
    }
}

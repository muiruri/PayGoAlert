package com.paygo.alerts.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by kenny on 14/03/2017.
 */
@Controller

public class PageController {

    @RequestMapping("/")
    public String getIndex() {
        return "index";
    }
}

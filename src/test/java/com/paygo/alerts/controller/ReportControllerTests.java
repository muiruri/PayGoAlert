package com.paygo.alerts.controller;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by kenny on 14/03/2017.
 */
@RunWith(SpringJUnit4ClassRunner.class)
public class ReportControllerTests extends AbstractContextControllerTests {

    private MockMvc mockMvc;

    @Before
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
    }

    /**
     *  Tests the loading of alerts that have been saved to the database.
     * @throws Exception
     */
    @Test
    public void getAlerts() throws Exception {
        this.mockMvc.perform(get("/api/report/v1/getAlerts")).andExpect(status().isOk());
    }
}

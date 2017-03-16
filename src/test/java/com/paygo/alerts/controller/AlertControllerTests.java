package com.paygo.alerts.controller;

import com.paygo.alerts.model.Alert;
import org.json.JSONObject;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.sql.Timestamp;
import java.util.UUID;
import org.springframework.http.MediaType;

/**
 * Created by kenny on 14/03/2017.
 */
@RunWith(SpringJUnit4ClassRunner.class)
public class AlertControllerTests extends AbstractContextControllerTests {

    private MockMvc mockMvc;

    @Before
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
    }

    /**
     *  Tests the receiving of alerts.
     * @throws Exception
     */
    @Test
    public void receiveAlert() throws Exception {
        JSONObject json = new JSONObject();
        Alert alert = new Alert();
        json.put("deviceId", UUID.randomUUID().toString());
        json.put("type", "LEAK");
        json.put("timeStamp", System.currentTimeMillis());

        this.mockMvc.perform(post("/api/alert/receive").contentType(MediaType.APPLICATION_JSON).content(json.toString())).andExpect(status().isOk());
        //this.mockMvc.perform(get("/home")).andExpect(status().is4xxClientError());
    }
}

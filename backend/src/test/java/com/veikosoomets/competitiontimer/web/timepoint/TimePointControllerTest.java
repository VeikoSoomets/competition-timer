package com.veikosoomets.competitiontimer.web.timepoint;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(TimePointController.class)
public class TimePointControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TimePointService timePointService;

    @Test
    public void shouldReturnOK() throws Exception {
        mockMvc.perform(get("/timepoints")).andExpect(status().isOk());
        verify(timePointService).get();
    }
}

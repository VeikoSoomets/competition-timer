package com.veikosoomets.competitiontimer.web.timepoint;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class TimePointController {
    private final TimePointService timePointService;

    public TimePointController(TimePointService timePointService) {
        this.timePointService = timePointService;
    }

    @RequestMapping(value = "/timepoints", method = RequestMethod.GET)
    public Iterable<TimePoint> getTimePoints() {
        return timePointService.get();
    }
}

package com.veikosoomets.competitiontimer.web.athlete;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class AthleteController {
    private final AthleteService athleteService;

    public AthleteController(AthleteService athleteService) {
        this.athleteService = athleteService;
    }

    @RequestMapping(value = "/athletes", method = RequestMethod.GET)
    public Iterable<Athlete> getAthletes() {
        return athleteService.get();
    }

    @RequestMapping(value = "/add-athlete", method = RequestMethod.POST)
    public Athlete addAthlete(@RequestBody() Athlete athlete) {
        return athleteService.add(athlete);
    }
}

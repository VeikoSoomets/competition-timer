package com.veikosoomets.competitiontimer.web.athlete;

import com.veikosoomets.competitiontimer.web.CrudService;
import org.springframework.stereotype.Service;

@Service
public class AthleteService extends CrudService<Athlete, Integer, AthleteRepository> {
    private final AthleteRepository athleteRepository;

    public AthleteService(AthleteRepository athleteRepository) {
        this.athleteRepository = athleteRepository;
    }

    @Override protected AthleteRepository getRepository() {
        return this.athleteRepository;
    }
}

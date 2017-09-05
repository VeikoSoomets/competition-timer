package com.veikosoomets.competitiontimer.web.timepoint;

import com.veikosoomets.competitiontimer.web.CrudService;
import org.springframework.stereotype.Service;

@Service
public class TimePointService extends CrudService<TimePoint, Integer, TimePointRepository> {
    private final TimePointRepository timePointRepository;

    public TimePointService(TimePointRepository timePointRepository) {
        this.timePointRepository = timePointRepository;
    }

    @Override protected TimePointRepository getRepository() {
        return this.timePointRepository;
    }
}

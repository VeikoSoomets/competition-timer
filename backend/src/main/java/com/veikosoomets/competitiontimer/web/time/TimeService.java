package com.veikosoomets.competitiontimer.web.time;

import com.veikosoomets.competitiontimer.web.CrudService;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.WebSocketHandler;

import java.util.ArrayList;

@Service
public class TimeService extends CrudService<Time, Integer, TimeRepository> {
    private final TimeRepository timeRepository;
    private TimeWebSocketHandler timeWebSocketHandler;

    public TimeService(TimeRepository timeRepository) {
        this.timeRepository = timeRepository;
        this.timeWebSocketHandler = new TimeWebSocketHandler((ArrayList<Time>) this.get());
    }

    @Override protected TimeRepository getRepository() {
        return this.timeRepository;
    }

    @Override
    public Time add(Time item) {
        Time time = getRepository().save(item);
        timeWebSocketHandler.addNewTime(time);
        return time;
    }

    public WebSocketHandler getWebSocketHandler() {
        return timeWebSocketHandler;
    }
}

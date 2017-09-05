package com.veikosoomets.competitiontimer.web.time;

import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@CrossOrigin
@RestController
@EnableWebSocket
@EnableScheduling
@RequestMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class TimeController implements WebSocketConfigurer {
    private final TimeService timeService;

    public TimeController(TimeService timeService) {
        this.timeService = timeService;
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(timeService.getWebSocketHandler(), "/times").setAllowedOrigins("*");
    }

    @RequestMapping(value = "/add-time", method = RequestMethod.POST)
    public Time addTime(@RequestBody() Time time) {
        return timeService.add(time);
    }
}

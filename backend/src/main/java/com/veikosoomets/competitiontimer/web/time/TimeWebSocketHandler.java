package com.veikosoomets.competitiontimer.web.time;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class TimeWebSocketHandler extends TextWebSocketHandler {
    private List<WebSocketSession> sessions = new ArrayList<>();
    private List<Time> times = new ArrayList<>();

    TimeWebSocketHandler(ArrayList<Time> times) {
        this.times = times;
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        System.out.println("WebSocket Connection established");
        this.sessions.add(session);
        this.sendMessage(times);
    }

    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        System.out.println("New message: " + message );
        this.sendMessage(times);
        super.handleMessage(session, message);
    }

    void addNewTime(Time time) {
        this.times.add(time);
        this.sendMessage(time);
    }

    private void sendMessage(Object messageObject) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            for (Iterator<WebSocketSession> iterator = sessions.iterator(); iterator.hasNext();) {
                WebSocketSession session = iterator.next();
                if (session != null && session.isOpen()) {
                    session.sendMessage(new TextMessage(mapper.writeValueAsString(messageObject)));
                } else {
                    iterator.remove();
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}

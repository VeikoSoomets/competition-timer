package com.veikosoomets.competitiontimer.web.time;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.veikosoomets.competitiontimer.web.athlete.Athlete;
import com.veikosoomets.competitiontimer.web.time.serializers.LocalDateTimeDeserializer;
import com.veikosoomets.competitiontimer.web.time.serializers.LocalDateTimeSerializer;
import com.veikosoomets.competitiontimer.web.timepoint.TimePoint;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Getter @Setter
@Table(name = "time")
public class Time {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    private LocalDateTime value;
    @OneToOne
    @JoinColumn(name = "timepoint_id")
    TimePoint timePoint;
    @OneToOne
    @JoinColumn(name = "athlete_id")
    Athlete athlete;
}

package org.example.workoutapp.service;

import org.example.workoutapp.model.Activity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ActivityService {
    List<Activity> getAllActivities();

    List<Activity> getActivitiesByType(String type);

    List<Activity> getActivitiesByUsername(String username);

    Activity getActivityById(Long id);

}
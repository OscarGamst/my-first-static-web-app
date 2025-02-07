package org.example.workoutapp.controller;

import org.example.workoutapp.model.Activity;
import org.example.workoutapp.repository.ActivityRepository;
import org.example.workoutapp.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api/activities")
public class ActivityController {
    private final ActivityService activityService;

    // Connects the controller to the repository
    @Autowired
    ActivityRepository activityRepository;

    // Constructor
    public ActivityController(ActivityService activityService) {
        this.activityService = activityService;
    }

    // This uses the ActivityService "getter", which is again implemented from its class
    @GetMapping()
    public List<Activity> getActivities() {
        return activityService.getAllActivities();
    }

    @GetMapping("/type/{type}")
    public List<Activity> getActivitiesByType(@PathVariable String type) {
        return activityService.getActivitiesByType(type);
    }

    @GetMapping("/username/{username}")
    public List<Activity> getActivitiesByUsername(@PathVariable String username) {
        return activityService.getActivitiesByUsername(username);
    }

    @GetMapping("/{id}")
    public Activity getActivityById(@PathVariable Long id) {
        return activityService.getActivityById(id);
    }
}

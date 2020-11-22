import { User } from "../common/model";

export function calculateUserLevel(user: User): number {
    let userLevel = 1;
    const {avgDailySteps, hikingExperience, activityLevel} = user;
    if ( avgDailySteps == 4 && hikingExperience == 5 && activityLevel == 5 ) {
        userLevel = 5;
    } else if ( avgDailySteps == (3 || 4) && hikingExperience == (4 || 5) && activityLevel == ( 4 || 5) ) {
        userLevel = 4;
    } else if ( avgDailySteps == (4) && hikingExperience == (3 || 4 || 5) || activityLevel == (3 || 4 || 5) ) {
        userLevel = 4;
    } else if ( avgDailySteps == (2 || 3) && hikingExperience == (3 || 4) || activityLevel == (3 || 4) ) {
        userLevel = 3;
    } else if ( avgDailySteps == (3) && hikingExperience == (3 || 4 || 5) || activityLevel == (3 || 4 || 5) ) {
        userLevel = 3;
    } else if ( avgDailySteps == (1 || 2) && hikingExperience == (2 || 3)  &&  activityLevel == (2 || 3) ) {
        userLevel = 2;
    } else if ( avgDailySteps == (2) && hikingExperience == (1 || 2 || 3)  &&  activityLevel == (1 || 2 || 3) ) {
        userLevel = 2;
    } else {
        userLevel = 1;
    };
 
    return userLevel;
};
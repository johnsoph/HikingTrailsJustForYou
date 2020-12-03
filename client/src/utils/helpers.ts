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

export function filterHikes(filterSelection: number, hikingLevel): Array<string>{
    let hikeDifficulty : Array<string> = [];
    let desiredHikes : number = filterSelection + hikingLevel;
    const HDiffs = ["green", "greenBlue", "blue", "blueBlack", "black", "blackBlack", "nearby"];

    // filterSelection      0 = Nearby
    //                      1 = Easy and Chill
    //                      2 = Best Match
    //                      3 = Challenging

    // hike difficulties from api (string)
    // green
    // greenBlue    - guess
    // blue
    // blueBlack
    // black        - guess
    // blackBlack   - guess
    debugger;

    if(filterSelection === 0){
        hikeDifficulty.push(HDiffs[6])
    }
    else{

        if(desiredHikes === (2 || 3)){
            // show green 
            hikeDifficulty.push(HDiffs[0]);
        }
        
        else if(desiredHikes === (4 || 5)){
            // show greenBlue & blue
            hikeDifficulty.push(HDiffs[1]);
            hikeDifficulty.push(HDiffs[2]);
        }

        else if(desiredHikes === 6){
            // show blue & blueBlack
            hikeDifficulty.push(HDiffs[2]);
            hikeDifficulty.push(HDiffs[3]);
        }

        else if(desiredHikes === 7){
            // show blueBlack & black 
            hikeDifficulty.push(HDiffs[3]);
            hikeDifficulty.push(HDiffs[4]);
        }

        else if(desiredHikes === 8){
            // show blackBlack
            hikeDifficulty.push(HDiffs[5]);
        }
    }

    return hikeDifficulty;
}
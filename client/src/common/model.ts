export enum ActivityLevel {
    "Can I bring my PSL on this hike?" = 1,
    "Can I wear my nikes and look cute?" = 2,
    "I've got hiking boots I never use" = 3,
    "There's mud on my hiking boots" = 4,
    "I've got my Arc'terk, Osprey backpack, and Diamond hiking polls ready to go!" = 5,
}

export enum HikingExperience {
    "0 hikes" = 1,
    "1 - 5 hikes" = 2,
    "5 - 10 hikes" = 3,
    "10 - 20 hikes" = 4,
    "20+ hikes" = 5,
}

export enum DailySteps {
    "0 steps/day" = 1,
    "1 - 5,000 steps/day" = 2,
    "5,001 - 10,000 steps/day" = 3,
    "10,001+ steps/day" = 4,
}

export interface User {
    name: string | null;
    age: number | null;
    gender: string | null;
    zipCode: number | null;
    avgDailySteps: number | null;
    hikingExperience: HikingExperience | null;
    activityLevel: ActivityLevel | null;
}

export interface Hikes {
    ascent: number;
    conditionDate: string;
    conditionDetails: string;
    conditionStatus: string;
    decent: number;
    difficulty: string;
    high: number;
    id: number;
    imgMedium: string;
    imgSmall: string;
    imgSmallMed: string;
    imgSqSmall: string;
    latitude: number;
    length: number;
    location: string;
    longitude: number;
    low: number;
    name: string;
    starVotes: number;
    stars: number;
    summary: string;
    type: string;
    url: string;
}

export interface ZipCoords{
    locations: Locations[]
}

export interface Locations{
    latLng: LatLng;
}

export interface LatLng{
    lat: number;
    lng: number;
}

export interface Filter {
    // desiredHikes: Hikes[];
    filterType: FilterType;
}


export enum FilterType {
    "None" = 0,
    "Easy and Chill" = 1,
    "Best Match" = 2,
    "Challenge Me" = 3,
}
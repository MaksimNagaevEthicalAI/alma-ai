import type { Observation } from "../types/alma";


let sessionObservations: Observation[] = [];


export function addObservations(
    observations: Observation[]
){

    sessionObservations = [
        ...sessionObservations,
        ...observations
    ];

}



export function getObservations(){

    return sessionObservations;

}



export function clearSession(){

    sessionObservations = [];

}
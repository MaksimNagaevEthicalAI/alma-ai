import type { Observation } from "../types/alma";


export function createObservation(
    id: string,
    description: string,
    confidence: number,
    source?: string
): Observation {

    return {

        id,

        description,

        confidence,

        source

    };

}
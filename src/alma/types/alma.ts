export interface Observation {

    id: string;

    description: string;

    confidence: number;

    source?: string;

}


export interface Hypothesis {

    id: string;

    statement: string;

    confidence: number;

    basedOn: string[];

}


export interface Insight {

    id: string;

    title: string;

    explanation: string;

}


export interface Reflection {

    question: string;

}


export interface Action {

    title: string;

    description: string;

}


export interface ALMAState {

    observations: Observation[];

    hypotheses: Hypothesis[];

    insights: Insight[];

    reflections: Reflection[];

    actions: Action[];

}

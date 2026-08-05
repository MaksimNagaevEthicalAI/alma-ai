export interface DialogueAnswer {

    stepId: number;

    optionId: string;

}

export interface DialogueObservation {

    id: string;

    confidence: number;

}

export interface DialogueSession {

    answers: DialogueAnswer[];

    observations: DialogueObservation[];

}
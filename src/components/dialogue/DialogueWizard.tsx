import { useState } from "react";

import "./DialogueWizard.css";

import { dialogueFlow } from "./data/dialogueFlow";

import { createObservation } from "../../alma/observation/engine";

import { addObservations } from "../../alma/session/sessionStore";

import type { Observation } from "../../alma/types/alma";


export default function DialogueWizard() {


    const [stepIndex, setStepIndex] = useState(0);


    const [observations, setObservations] = useState<Observation[]>([]);


    const [selectedOption, setSelectedOption] = useState<string | null>(null);



    const currentStep = dialogueFlow[stepIndex];



    function handleOption(option:any){


        setSelectedOption(option.label);



        const newObservations = option.observations.map(
            (item:string)=>

                createObservation(

                    item,

                    `Created from user choice: ${item}`,

                    0.5,

                    `dialogue_step_${currentStep.id}`

                )
        );



        const updated = [

            ...observations,

            ...newObservations

        ];



        setObservations(updated);



        addObservations(newObservations);



        console.log(
            "ALMA SESSION:",
            updated
        );



        setTimeout(()=>{


            if(stepIndex < dialogueFlow.length - 1){

                setStepIndex(stepIndex + 1);

                setSelectedOption(null);

            }


        },300);


    }



    return (

        <div className="wizard">


            <span className="eyebrow">

                ALMA Conversation

            </span>



            <div className="step">

                Step {stepIndex + 1} of {dialogueFlow.length}

            </div>



            <h1>

                {currentStep.title}

            </h1>



            <p>

                {currentStep.description}

            </p>



            {
                selectedOption &&

                <div className="selected">

                    You selected:
                    <strong>{selectedOption}</strong>

                </div>

            }



            <div className="options">


            {
                currentStep.options.map(option=>(

                    <button

                        key={option.id}

                        onClick={()=>handleOption(option)}

                    >

                        {option.label}

                    </button>


                ))
            }


            </div>


        </div>

    );

}
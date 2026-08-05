import type { Observation } from "../../../alma/types/alma";


interface Props {

    observations: Observation[];

}



export default function InsightPanel({
    observations
}: Props){


    return (

        <div className="insight">


            <span className="eyebrow">
                ALMA Insight
            </span>


            <h2>
                What ALMA noticed
            </h2>


            <p className="intro">

                These are observations created from your dialogue.
                They are not predictions.

            </p>



            <div className="cards">


                {
                    observations.map((item:any,index)=>(


                        <div
                            className="card"
                            key={index}
                        >


                            <h3>
                                Observation
                            </h3>


                            <p>

                                {
                                    item.text 
                                    ||
                                    item.description
                                    ||
                                    item.value
                                    ||
                                    JSON.stringify(item)
                                }

                            </p>


                            <small>

                                Confidence:
                                {" "}
                                {
                                    Math.round(
                                        item.confidence * 100
                                    )
                                }
                                %

                            </small>


                        </div>


                    ))
                }


            </div>


        </div>

    );

}
export interface DialogueOption {

    id: string;

    label: string;

    observations: string[];

    next: number | null;

}


export interface DialogueStep {

    id: number;

    title: string;

    description: string;

    options: DialogueOption[];

}



export const dialogueFlow: DialogueStep[] = [

    {

        id: 1,

        title: "What brings you here today?",

        description:
            "Before we begin, ALMA wants to understand what you're trying to explore. There are no right or wrong answers.",

        options: [

            {
                id: "self",

                label: "🧠 Understand myself",

                observations: [
                    "self_reflection",
                    "intrinsic_motivation"
                ],

                next: 2
            },


            {
                id: "partner",

                label: "❤️ Understand another person",

                observations: [
                    "relationship_focus"
                ],

                next: 2
            },


            {
                id: "relationship",

                label: "🤝 Understand our relationship",

                observations: [
                    "relationship_focus",
                    "long_term_orientation"
                ],

                next: 2
            },


            {
                id: "explore",

                label: "🌱 I'm just exploring",

                observations: [
                    "curiosity"
                ],

                next: 2
            }

        ]

    },



    {

        id: 2,

        title: "How long has this situation existed?",

        description:
            "Time helps ALMA distinguish between temporary emotions and long-term patterns.",

        options: [

            {

                id: "days",

                label: "A few days",

                observations: [
                    "recent_event"
                ],

                next: 3

            },


            {

                id: "weeks",

                label: "Several weeks",

                observations: [
                    "developing_pattern"
                ],

                next: 3

            },


            {

                id: "months",

                label: "Several months",

                observations: [
                    "stable_pattern"
                ],

                next: 3

            },


            {

                id: "year",

                label: "More than a year",

                observations: [
                    "long_term_pattern"
                ],

                next: 3

            }

        ]

    },



    {

        id: 3,

        title: "What feels most important about this situation?",

        description:
            "ALMA explores what matters most to you before looking at possible patterns.",

        options: [

            {

                id: "clarity",

                label: "Understanding what is really happening",

                observations: [
                    "seeking_clarity",
                    "meaning_exploration"
                ],

                next: 4

            },


            {

                id: "decision",

                label: "Making a better decision",

                observations: [
                    "decision_focus",
                    "future_orientation"
                ],

                next: 4

            },


            {

                id: "connection",

                label: "Improving emotional connection",

                observations: [
                    "emotional_connection",
                    "relationship_need"
                ],

                next: 4

            },


            {

                id: "growth",

                label: "Personal growth and self-awareness",

                observations: [
                    "personal_growth",
                    "self_development"
                ],

                next: 4

            }

        ]

    },



    {

        id: 4,

        title: "What usually happens when you face this situation?",

        description:
            "ALMA looks for recurring patterns, not isolated moments.",

        options: [

            {

                id: "think",

                label: "I think about it a lot",

                observations: [
                    "analytical_processing",
                    "high_reflection"
                ],

                next: 5

            },


            {

                id: "avoid",

                label: "I avoid difficult conversations",

                observations: [
                    "conflict_avoidance"
                ],

                next: 5

            },


            {

                id: "talk",

                label: "I try to discuss it openly",

                observations: [
                    "direct_communication"
                ],

                next: 5

            },


            {

                id: "act",

                label: "I usually take action quickly",

                observations: [
                    "action_orientation"
                ],

                next: 5

            }

        ]

    },



    {

        id: 5,

        title: "What matters most to you in relationships?",

        description:
            "ALMA explores values that influence long-term compatibility.",

        options: [

            {

                id: "trust",

                label: "Trust and emotional safety",

                observations: [
                    "values_trust",
                    "emotional_security"
                ],

                next: 6

            },


            {

                id: "growth",

                label: "Growing together",

                observations: [
                    "values_growth"
                ],

                next: 6

            },


            {

                id: "freedom",

                label: "Freedom and independence",

                observations: [
                    "values_independence"
                ],

                next: 6

            },


            {

                id: "stability",

                label: "Stability and reliability",

                observations: [
                    "values_stability"
                ],

                next: 6

            }

        ]

    },



    {

        id: 6,

        title: "How do you usually make important decisions?",

        description:
            "ALMA studies your decision-making style.",

        options: [

            {

                id: "logic",

                label: "I analyze facts and possibilities",

                observations: [
                    "analytical_decision_style"
                ],

                next: 7

            },


            {

                id: "emotion",

                label: "I follow my feelings",

                observations: [
                    "emotion_based_decision_style"
                ],

                next: 7

            },


            {

                id: "balance",

                label: "I try to balance logic and emotions",

                observations: [
                    "balanced_decision_style"
                ],

                next: 7

            }

        ]

    },



    {

        id: 7,

        title: "What would you like ALMA to help you understand?",

        description:
            "The final step helps ALMA focus the reflection that follows.",

        options: [

            {

                id: "myself",

                label: "Understand myself better",

                observations: [
                    "self_understanding_goal"
                ],

                next: null

            },


            {

                id: "other",

                label: "Understand another person",

                observations: [
                    "other_person_understanding_goal"
                ],

                next: null

            },


            {

                id: "future",

                label: "Understand the future of this relationship",

                observations: [
                    "compatibility_interest"
                ],

                next: null

            }

        ]

    }

];
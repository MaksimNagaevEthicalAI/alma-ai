export interface DialogueQuestion {

    id: number;

    title: string;

    description: string;

    options: string[];

}

export const questions: DialogueQuestion[] = [

    {

        id: 1,

        title: "What brings you here today?",

        description:
            "Before we begin, ALMA wants to understand what you're trying to explore. There are no right or wrong answers.",

        options: [

            "🧠 Understand myself",

            "❤️ Understand another person",

            "🤝 Understand our relationship",

            "🌱 I'm just exploring"

        ]

    },

    {

        id: 2,

        title: "How long has this situation existed?",

        description:
            "Understanding time helps ALMA distinguish between temporary emotions and long-term patterns.",

        options: [

            "A few days",

            "Several weeks",

            "Several months",

            "More than a year"

        ]

    },

    {

        id: 3,

        title: "What would you like to achieve?",

        description:
            "Choose the goal that best describes why you're starting this conversation.",

        options: [

            "Gain clarity",

            "Improve a relationship",

            "Understand someone's behavior",

            "Explore myself"

        ]

    }

];
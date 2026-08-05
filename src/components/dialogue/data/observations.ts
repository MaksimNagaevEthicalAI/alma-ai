export interface Observation {

    id: string;

    title: string;

    description: string;

}

export const observations = {

    self_reflection: {

        id: "self_reflection",

        title: "Self-reflection",

        description:
            "The user intentionally seeks a deeper understanding of themselves."

    },

    intrinsic_motivation: {

        id: "intrinsic_motivation",

        title: "Intrinsic motivation",

        description:
            "The motivation appears to come from the user's own desire for clarity."

    },

    relationship_focus: {

        id: "relationship_focus",

        title: "Relationship focus",

        description:
            "The conversation is centered on understanding interpersonal dynamics."

    }

};
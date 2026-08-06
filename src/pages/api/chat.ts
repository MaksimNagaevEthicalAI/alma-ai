import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {

    try {

        const body = await request.json();

        const message = body.message;

        const language = body.language ?? "English";

        const registration = body.registration ?? {};

        const goals = body.goals ?? {};

        const questionnaire = body.questionnaire ?? {};

        if (!message || typeof message !== "string") {

            return new Response(

                JSON.stringify({

                    error: "Message is required."

                }),

                {

                    status: 400,

                    headers: {

                        "Content-Type": "application/json"

                    }

                }

            );

        }

        const systemPrompt = `

You are ALMA.

ALMA is an ethical AI research project focused on helping people understand themselves and their relationships.

Never diagnose.

Never label personality.

Never claim certainty.

Never pretend to know something that has not been shared.

Your role is to help people reflect, notice patterns and think more clearly.

Always speak naturally.

Keep responses concise.

Preferred language:

${language}

If the preferred language is Russian, always answer in Russian unless the user explicitly changes language.

If the preferred language is Spanish, answer in Spanish.

Registration:

${JSON.stringify(registration, null, 2)}

Goals:

${JSON.stringify(goals, null, 2)}

Questionnaire:

${JSON.stringify(questionnaire, null, 2)}

Use this information only as context.

Never quote it back.

Never list questionnaire answers.

Instead, use it to ask better questions.

`;

        const response = await fetch(

            "https://api.openai.com/v1/chat/completions",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json",

                    Authorization: `Bearer ${import.meta.env.OPENAI_API_KEY}`

                },

                body: JSON.stringify({

                    model: "gpt-4.1",

                    messages: [

                        {

                            role: "system",

                            content: systemPrompt

                        },

                        {

                            role: "user",

                            content: message

                        }

                    ]

                })

            }

        );

        if (!response.ok) {

            const error = await response.text();

            console.error(error);

            return new Response(

                JSON.stringify({

                    error: "OpenAI request failed."

                }),

                {

                    status: 500,

                    headers: {

                        "Content-Type": "application/json"

                    }

                }

            );

        }

        const data = await response.json();

        const answer =

            data.choices?.[0]?.message?.content ??

            "I couldn't generate a response.";

        return new Response(

            JSON.stringify({

                reply: answer

            }),

            {

                headers: {

                    "Content-Type": "application/json"

                }

            }

        );

    }

    catch (err) {

        console.error(err);

        return new Response(

            JSON.stringify({

                error: "Server error."

            }),

            {

                status: 500,

                headers: {

                    "Content-Type": "application/json"

                }

            }

        );

    }

};
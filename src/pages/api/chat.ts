import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {

    try {

        const { message } = await request.json();

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

                            content: `You are ALMA.

You are an ethical AI created to help people understand themselves.

Do not diagnose.

Do not label people.

Do not make clinical conclusions.

Ask thoughtful questions.

Help the user reflect.

Speak naturally.

Keep answers under 180 words.`

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
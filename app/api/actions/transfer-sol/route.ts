import { ACTIONS_CORS_HEADERS, ActionGetResponse, ActionPostRequest, ActionPostResponse, createPostResponse } from "@solana/actions";
import { transferSolTransaction } from "./transaction";

export const GET = async (req: Request) => {
    const payload: ActionGetResponse = {
        title: "BLINKS Free Giveaway (first 100 guaranteed win))",
        icon: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/giveaway-design-template-b1199840f7eeb0ee61840d39e9b84a62_screen.jpg?ts=1644147841",
        description: "Transfer SOL to another wallet",
        label: "Give 1 SOL 🤙🏻🤙🏻🤙🏻"
    }

    return Response.json(payload, {
        headers: ACTIONS_CORS_HEADERS,
    });
}

export const OPTIONS = GET;

export const POST = async (req: Request) => {
    const body: ActionPostRequest = await req.json();
    const transaction = await transferSolTransaction({ from: body.account, amount: 1 })

    const payload: ActionPostResponse = await createPostResponse({
        fields: {
            transaction,
            message: `Send 1 SOL`,
        },
    });
    return Response.json(payload, {
        headers: ACTIONS_CORS_HEADERS,
    });
}
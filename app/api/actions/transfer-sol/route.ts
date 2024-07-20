import { ACTIONS_CORS_HEADERS, ActionGetResponse, ActionPostRequest, ActionPostResponse, createPostResponse } from "@solana/actions";
import { transferSolTransaction } from "./transaction";

export const GET = async (req: Request) => {
    const payload: ActionGetResponse = {
        title: "BLOCKCHAIN LINKS EXCLUSIVE GIVEAWAY",
        icon: "https://i.imgur.com/PBRp1He.jpeg",
        description: "Receive exclusive rewards for free!",
        label: "Enter Giveaway!"
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
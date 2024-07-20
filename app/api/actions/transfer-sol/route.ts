import { ACTIONS_CORS_HEADERS, ActionGetResponse, ActionPostRequest, ActionPostResponse, createPostResponse } from "@solana/actions";
import { transferSolTransaction } from "./transaction";

export const GET = async (req: Request) => {
    const payload: ActionGetResponse = {
        title: "BLINKS Free Giveaway (first 100 guaranteed win))",
        icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffil.postermywall.com%2Findex.php%2Fart%2Ftemplate%2Fb1199840f7eeb0ee61840d39e9b84a62%2Fgiveaway-design-template&psig=AOvVaw23UZihaCh_RqhtRmnCMmmg&ust=1721542645670000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICqpqz8tIcDFQAAAAAdAAAAABAp",
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
import { ACTIONS_CORS_HEADERS, ActionGetResponse, ActionPostRequest, ActionPostResponse, createPostResponse } from "@solana/actions";
import { transferSolTransaction } from "./transaction";

// Create a mutable array to store raffle entries
let raffleEntries: string[] = [];

// Set the maximum number of entries allowed
const MAX_ENTRIES = 3;

export const GET = async (req: Request) => {
    const payload: ActionGetResponse = {
        title: "Join Kyle's Giveaway",
        icon: "https://i.imgur.com/grf925K.jpeg",
        description: "It's your lucky day today! 🏆",
        label: "Enter Giveaway"
    }

    return Response.json(payload, {
        headers: ACTIONS_CORS_HEADERS,
    });
}

export const OPTIONS = GET;

export const POST = async (req: Request) => {
    try {
        const body: ActionPostRequest = await req.json();

        // Validate the account address
        if (!body.account || body.account.length !== 44) {  // Assuming Solana addresses are 44 characters long
            throw new Error("Invalid wallet address");
        }

        // Check if the raffle has reached maximum capacity
        if (raffleEntries.length >= MAX_ENTRIES) {
            console.log("Raffle has reached maximum capacity");
        } else if (raffleEntries.includes(body.account)) {
            console.log(`Wallet address already entered: ${body.account}`);
        } else {
            // Add the user's wallet to the raffle entries array
            raffleEntries.push(body.account);

            // Log the entire raffle entries array
            console.log("Raffle Entries:", raffleEntries);
        }

        const amountInLamports = Math.floor(0.0001 * 1_000_000_000); // Convert SOL to Lamports
        
        if (amountInLamports <= 0) {
            throw new Error("Amount must be greater than zero");
        }
    
        const transaction = await transferSolTransaction({ from: body.account, amount: amountInLamports });
    
        const payload: ActionPostResponse = await createPostResponse({
            fields: {
                transaction,
                message: `Enter the giveaway`,
            },
        });
        
        return Response.json(payload, {
            headers: ACTIONS_CORS_HEADERS,
        });
    } catch (error) {
        console.error("Error processing POST request:", error);
        return Response.json({ error: (error as Error).message }, {
            status: 400,
            headers: ACTIONS_CORS_HEADERS,
        });
    }    
}

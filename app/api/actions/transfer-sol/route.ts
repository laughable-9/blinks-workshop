import { ACTIONS_CORS_HEADERS, ActionGetResponse, ActionPostRequest, ActionPostResponse, createPostResponse } from "@solana/actions";
import { transferSolTransaction } from "./transaction";

// Create a mutable array to store raffle entries
const raffleEntries: string[] = [];

// Variable to store the winner's address
let winnerAddress: string | null = null;

// Set the maximum number of entries allowed
const MAX_ENTRIES = 3;

export const GET = async (req: Request) => {
    let title = "Join Kyle's Giveaway";
    let description = "It's your lucky day today! 🏆🍀";
    let label = "Enter Giveaway";
    let disabled = false;

    // Check if a winner has been selected
    if (winnerAddress) {
        title = `The winner is ${winnerAddress}`;
        description = "Congratulations to this lucky participant! 🏆";
        label = "Giveaway ended";
        disabled = true;
    }

    const payload: ActionGetResponse = {
        title,
        icon: "https://i.imgur.com/InBPg5a.png",
        description,
        label,
        disabled,
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
            console.log("Raffle has reached maximum capacity, selecting a winner");

            // Print the entire raffle entries array
            console.log("Raffle Entries:", raffleEntries);

            // Generate a random number between 0 and the highest index of the array
            const winnerIndex = Math.floor(Math.random() * raffleEntries.length);

            // Print the random index selected
            console.log(`The index selected is: ${winnerIndex}`);

            // Log the winner's wallet address
            winnerAddress = raffleEntries[winnerIndex];
            console.log(`The winner of the raffle is: ${winnerAddress}`);
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

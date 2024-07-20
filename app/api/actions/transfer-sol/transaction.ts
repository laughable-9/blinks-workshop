import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, clusterApiUrl } from "@solana/web3.js"

type TransferSolTransactionParam = {
    from: string,
    amount: number,
}

export const transferSolTransaction = async (params: TransferSolTransactionParam): Promise<Transaction> => {
    const { from, amount } = params;

    const fromPubkey = new PublicKey(from);
    const toPubkey = new PublicKey('DhyF27S5YSzeHgTgtY5cjDu3BNX2cVsHQpz2bsgDPnkX'); // static receiver

    const connection = new Connection(
        process.env.SOLANA_RPC! || clusterApiUrl("devnet"),
    );

    const lamports = amount; // amount is already in lamports

    const transaction = new Transaction();
    transaction.feePayer = fromPubkey;

    transaction.add(
        SystemProgram.transfer({
            fromPubkey: fromPubkey,
            toPubkey: toPubkey,
            lamports: lamports,
        }),
    );

    transaction.recentBlockhash = (
        await connection.getLatestBlockhash()
    ).blockhash;

    return transaction;
}

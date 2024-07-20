# 🏆Trophy  
The safe way to giveaway 

### Project Overview  
*“Privacy is not something that I'm merely entitled to, it's an absolute prerequisite.”* — Marlon Brando  

### Motivation  
Giveaways are ubiquitous in the blockchain space, especially on platforms like X. Typically, users must post their wallet addresses in the comment section to participate and claim their prizes. However, this practice poses significant privacy risks and offers no guarantee of entry into the raffle or giveaway.  

### What it does  
Trophy is an innovative use case of Solana Blink, utilizing embedded data to streamline interactions with links posted on X. This approach makes giveaways and raffles systematic and secure, requiring just **0.0001 SOL** for participation. Here’s how it works:  

1. **Sign-Up**: The user enters the giveaway by completing a transaction of **0.0001 SOL**.  
2. **Data Capture**: The link captures the user's public key/wallet.  
3. **Entry Queue**: The user's wallet is added to the participant array.  
4. **Capacity Check**: The system monitors if the maximum number of entries has been reached.  
5. **Winner Selection**: Once the participant limit is met, a random index is generated to select the giveaway winner.  

This process ensures a seamless and secure one-click participation in giveaways.  

### How we built it  
Utilizing Solana action, we create a use case of Blink and develop the project using **TypeScript**, **Next.js**, **Node.js**, and **Vercel** for deployment. We also use **Solana Explorer** to test our project and check how many participants are currently in the giveaway.  

### Challenges  
We have a diverse skillset, with strengths in UI/UX and other programming areas. However, our experience with TypeScript, the primary language for this project, is limited, especially for some newer programmers. This necessitates additional support to ensure everyone can effectively contribute. Additionally, balancing this project with existing commitments like academic workloads and other events presents a time constraint. Despite these hurdles, the team remains dedicated and committed to attending the build station and actively participating in the hackathon.

### What we learned  
The hackathon was a great learning experience for our team. We explored new programming languages for us, TypeScript and Tailwind CSS, and used them to build a Blink. We familiarized ourselves with Git, as well as how to make get and post requests. This hands-on project helped us solidify our understanding of these languages. We also honed our teamwork skills by sharing ideas, splitting tasks, and collaborating effectively. The hackathon provided a platform for connecting with others. We talked to fellow participants and learned from their experiences. The time constraints pushed us to be more selective with our ideas, prioritizing features achievable within the timeframe.
  

### What's next for Trophy  
1. **Create Giveaway on Website**: Blink depends on the ID of the giveaway.  
2. **Giveaway Dashboard on Website**: Features include active giveaways, time left, total participants, and giveaway host.  
3. **Connect Wallet to Twitter**.  
4. **Account System on Website**: Show joined giveaways and won giveaways. (Inspiration: scrap.tf raffles.)  
5. **Requirement to Like/Retweet Certain Posts**.  
6. **Requirement to Follow Certain Accounts**.  
7. **Automatic Transfer of Prize to Winner**: Requirements include verified Twitter and active Solana wallet, etc.  
8. **Subscription/Payment Model to Use Service**:  
   - Subscription:  
     - 0.75 SOL/Month  
     - 0.25 SOL/Week  
   - Pay Per Use:  
     - 0.1 SOL/Tweet  
9. **Option to Hide or Show Your Wallet to the Public**.  
10. **Exclusive Giveaways for NFT Holders and Token Holders**.  
11. **Multiple Winners for Giveaways**.  

### Snapshots  
*(Include any screenshots or relevant images here.)*  

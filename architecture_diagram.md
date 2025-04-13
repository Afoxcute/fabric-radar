# Fabric Radar - Architecture Diagram

## System Overview

```
                                  FABRIC RADAR ARCHITECTURE
+----------------------------------------------------------------------------------------------+
|                                                                                              |
|  +-------------+     +--------------+     +----------------+     +----------------------+    |
|  |  USER LAYER |     | FRONTEND APP |     | BACKEND SERVER |     | STELLAR BLOCKCHAIN  |    |
|  +-------------+     +--------------+     +----------------+     +----------------------+    |
|                                                                                              |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
|                                        USER LAYER                                            |
+----------------------------------------------------------------------------------------------+
|                                                                                              |
|     +-------------+                                   +-------------+                        |
|     |   TAILORS   |                                   |   CLIENTS   |                        |
|     +-------------+                                   +-------------+                        |
|     | - Post      |                                   | - Browse    |                        |
|     |   fabric    |                                   |   fabrics   |                        |
|     | - KYC       |                                   | - KYC       |                        |
|     | - Manage    |                                   | - Negotiate |                        |
|     |   orders    |                                   | - Pay (local|                        |
|     | - Smart     |                                   |   currency) |                        |
|     |   wallet    |                                   | - Smart     |                        |
|     |             |                                   |   wallet    |                        |
|     +-------------+                                   +-------------+                        |
|                                                                                              |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
|                                       FRONTEND APP                                           |
+----------------------------------------------------------------------------------------------+
|                                                                                              |
|  +----------------+   +----------------+   +----------------+   +----------------+           |
|  | Authentication |   |  Fabric        |   |  Messaging     |   | Payment        |           |
|  | & Smart Wallet |   |  Gallery       |   |  Platform      |   | Processing     |           |
|  +----------------+   +----------------+   +----------------+   +----------------+           |
|  | - User login   |   | - Fabric NFT   |   | - Chat         |   | - Local        |           |
|  | - Registration |   |   display      |   | - Negotiation  |   |   currency     |           |
|  | - KYC portal   |   | - Search       |   | - Agreement    |   |   interface    |           |
|  | - Wallet UI    |   | - Filtering    |   |   workflow     |   | - Transaction  |           |
|  |                |   |                |   |                |   |   history      |           |
|  +----------------+   +----------------+   +----------------+   +----------------+           |
|                                                                                              |
|  +----------------+   +----------------+   +----------------+                                |
|  | Order          |   | Shipment       |   | Contract      |                                |
|  | Management     |   | Tracking       |   | Management    |                                |
|  +----------------+   +----------------+   +----------------+                                |
|  | - Status       |   | - Google Maps  |   | - View terms  |                                |
|  | - History      |   |   integration  |   | - Sign        |                                |
|  | - Reviews      |   | - Status       |   |   agreements  |                                |
|  |                |   |   updates      |   | - Dispute     |                                |
|  |                |   |                |   |   resolution  |                                |
|  +----------------+   +----------------+   +----------------+                                |
|                                                                                              |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
|                                      BACKEND SERVER                                          |
+----------------------------------------------------------------------------------------------+
|                                                                                              |
|  +----------------+   +----------------+   +----------------+   +----------------+           |
|  | API Layer      |   | Business Logic |   | Database       |   | Security       |           |
|  +----------------+   +----------------+   +----------------+   +----------------+           |
|  | - RESTful      |   | - User mgmt    |   | - User data    |   | - Auth flows   |           |
|  |   endpoints    |   | - Order mgmt   |   | - Fabric data  |   | - KYC          |           |
|  | - Webhook      |   | - Payment      |   | - Order data   |   |   validation   |           |
|  |   handlers     |   |   processing   |   | - Transaction  |   | - Data         |           |
|  |                |   | - Notifications|   |   history      |   |   encryption   |           |
|  +----------------+   +----------------+   +----------------+   +----------------+           |
|                                                                                              |
|  +----------------+   +----------------+   +----------------+                                |
|  | Blockchain     |   | SEP-6          |   | Admin          |                                |
|  | Connector      |   | Integration    |   | Dashboard      |                                |
|  +----------------+   +----------------+   +----------------+                                |
|  | - Asset        |   | - Deposit API  |   | - User mgmt    |                                |
|  |   issuance     |   | - Withdrawal   |   | - Transaction  |                                |
|  | - Multisig     |   |   API          |   |   oversight    |                                |
|  |   coordination |   | - Stablecoin   |   | - Dispute      |                                |
|  | - NFT mint     |   |   conversion   |   |   resolution   |                                |
|  +----------------+   +----------------+   +----------------+                                |
|                                                                                              |
+----------------------------------------------------------------------------------------------+

+----------------------------------------------------------------------------------------------+
|                                   STELLAR BLOCKCHAIN                                         |
+----------------------------------------------------------------------------------------------+
|                                                                                              |
|  +----------------+   +----------------+   +----------------+   +----------------+           |
|  | Asset          |   | Smart Wallet   |   | Multisig       |   | SEP-6          |           |
|  | Tokenization   |   | Auth           |   | Contracts      |   | Payment        |           |
|  +----------------+   +----------------+   +----------------+   +----------------+           |
|  | - Fabric NFTs  |   | - User auth    |   | - 3-way        |   | - Deposit      |           |
|  | - Ownership    |   |   without      |   |   contracts    |   | - Withdrawal   |           |
|  |   records      |   |   private keys |   | - Agreement    |   | - On/off ramp  |           |
|  | - Metadata     |   | - Auth tokens  |   |   execution    |   | - USDC/USDT    |           |
|  |   storage      |   |                |   |                |   |   conversion    |           |
|  +----------------+   +----------------+   +----------------+   +----------------+           |
|                                                                                              |
+----------------------------------------------------------------------------------------------+
```

## Data Flow

1. **User Registration & Authentication**
   - Users register on the platform (Tailors & Clients)
   - KYC verification through Stellar SEP-6 integration
   - Smart wallet creation for authentication without private keys

2. **Fabric Listing & Tokenization**
   - Tailors upload fabric/clothing designs
   - Backend mints NFTs on Stellar representing each fabric
   - Fabric NFTs are displayed in the marketplace gallery

3. **Client-Tailor Interaction**
   - Clients browse fabric gallery and select items
   - Messaging platform enables negotiation and finalization
   - Agreement terms are established (price, timeline, design requirements)

4. **Contract Creation**
   - Smart contract is generated with agreed terms
   - Contract is hashed and stored on Stellar blockchain
   - Multi-signature requirement: Tailor + Client + Admin

5. **Payment Processing**
   - Client makes payment in local currency
   - Backend converts to stablecoin (USDC/USDT) via SEP-6
   - Funds are held in escrow on Stellar blockchain

6. **Order Fulfillment & Tracking**
   - Tailor creates/customizes clothing according to agreement
   - Shipment status updated and tracked via Google Maps integration
   - Progress updates stored on blockchain for transparency

7. **Contract Completion**
   - Client receives and confirms delivery/satisfaction
   - Multisig contract releases payment to tailor
   - Tailor can withdraw funds via SEP-6 to local currency

8. **Dispute Resolution (if needed)**
   - Admin reviews contract terms and evidence
   - Admin provides final signature to resolve dispute
   - Resolution recorded on blockchain

## Technology Stack

**Frontend:**
- Mobile App (React Native)
- Web App (React.js)
- UI/UX focused on simplicity (similar to ride-sharing apps)
- Smart wallet integration
- Google Maps integration

**Backend:**
- Node.js/Express server
- MongoDB for off-chain data
- Push notification service
- API gateway for service orchestration

**Blockchain (Stellar):**
- Asset issuance for fabric NFTs
- SEP-6 for deposit/withdrawal
- Multisignature contracts
- Smart wallet authentication
- Stablecoin integration (USDC/USDT)

**Security:**
- End-to-end encryption for messaging
- KYC verification
- Blockchain-based audit trail
- Secure payment processing

## Key Integrations

1. **Stellar Asset Issuance**: For tokenizing fabrics as NFTs
   - Reference: https://developers.stellar.org/docs/tokens/how-to-issue-an-asset

2. **SEP-6 Deposit & Withdrawal**: For payment processing and currency conversion
   - Reference: https://developers.stellar.org/docs/learn/fundamentals/stellar-ecosystem-proposals#sep-0006---deposit-and-withdrawal-api

3. **Multisignature Contract**: For secure agreements between parties
   - Reference: https://developers.stellar.org/docs/learn/encyclopedia/security/signatures-multisig#multisig

4. **Smart Wallet Authentication**: For user-friendly blockchain interaction
   - Reference: https://developers.stellar.org/docs/build/apps/smart-wallets

5. **Google Maps API**: For shipment tracking

This architecture enables Fabric Radar to provide a seamless experience for connecting tailors with clients, while leveraging blockchain technology for security, transparency and trust in the transaction process. 
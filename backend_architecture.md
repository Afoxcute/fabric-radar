# Real World Asset (Clothing) on Solana - Backend Architecture

```mermaid
flowchart TB
    subgraph Client Layer
        A[Web Frontend]
        B[Mobile App]
    end

    subgraph API Layer
        C[API Gateway]
        D[Authentication Service]
        E[NFT Marketplace Service]
        F[Chat/Messaging Service]
        G[Contract Management Service]
        H[Payment Service]
    end

    subgraph Blockchain Layer
        I[Solana Program: NFT Marketplace]
        J[Solana Program: Contract Management]
        K[Solana Program: Escrow Payment]
        L[Solana Program: Status Tracking]
    end

    subgraph Storage Layer
        M[Arweave - NFT Metadata]
        N[IPFS - Contract Documents]
        O[Centralized DB - User profiles & Messaging]
    end

    subgraph External Services
        P[Solana RPC Nodes]
        Q[Metaplex]
        R[Notification Service]
    end

    %% Connections
    A <--> C
    B <--> C
    
    C <--> D
    C <--> E
    C <--> F
    C <--> G
    C <--> H
    
    D <--> O
    E <--> I
    E <--> M
    F <--> O
    G <--> J
    G <--> N
    H <--> K
    
    I <--> P
    J <--> P
    K <--> P
    L <--> P
    
    I <--> Q
    G <--> L
    
    C <--> R
    
    %% Styling
    classDef clientLayer fill:#d1f0ff,stroke:#0077b6,stroke-width:2px
    classDef apiLayer fill:#ffe8d6,stroke:#bc6c25,stroke-width:2px
    classDef blockchainLayer fill:#d8f3dc,stroke:#2d6a4f,stroke-width:2px
    classDef storageLayer fill:#f8edeb,stroke:#9d8189,stroke-width:2px
    classDef externalLayer fill:#e9ecef,stroke:#343a40,stroke-width:2px
    
    class A,B clientLayer
    class C,D,E,F,G,H apiLayer
    class I,J,K,L blockchainLayer
    class M,N,O storageLayer
    class P,Q,R externalLayer
```

## Component Descriptions:

### Client Layer
- **Web Frontend**: Browser-based application for clients and tailors
- **Mobile App**: Native mobile application with same functionality

### API Layer
- **API Gateway**: Central entry point for all client requests
- **Authentication Service**: Handles user login, wallet connection, and authorization
- **NFT Marketplace Service**: Manages NFT listing, browsing, and details
- **Chat/Messaging Service**: Handles client-tailor discussions and negotiations
- **Contract Management Service**: Creates and tracks hashed contracts
- **Payment Service**: Manages escrow payment flow

### Blockchain Layer
- **NFT Marketplace Program**: Solana program for tokenizing and trading clothing designs
- **Contract Management Program**: Stores and manages contract agreements
- **Escrow Payment Program**: Holds client payments until delivery
- **Status Tracking Program**: Updates and stores the status of contracts (Started, Fabric Purchased, etc.)

### Storage Layer
- **Arweave**: Permanent storage for NFT metadata and images
- **IPFS**: Decentralized storage for contract documents
- **Centralized DB**: Stores user profiles, messages, and non-blockchain data

### External Services
- **Solana RPC Nodes**: Connection to Solana blockchain
- **Metaplex**: NFT standard for Solana
- **Notification Service**: Sends updates to users about contract status changes

## Data Flow
1. Users interact with Web/Mobile interfaces
2. Requests go through API Gateway for processing
3. Services interact with Solana Programs through RPC Nodes
4. Contract statuses and NFT data are stored on-chain
5. Metadata and documents are stored in decentralized storage
6. User data and messages are stored in centralized database
7. Status updates trigger notifications to relevant parties 
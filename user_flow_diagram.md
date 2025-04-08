# Real World Asset (Clothing) on Solana - User Flow Diagram

```mermaid
flowchart TD
    subgraph Client
        A[Client browses tokenized clothes NFTs]
        B[Client views cloth details]
        C[Client checks production time]
        D[Client initiates discussion with tailor]
        E[Client discusses customization based on measurements]
        F[Client reviews agreement]
        G[Client makes payment to escrow]
        M[Client receives finished garment]
        N[Client confirms delivery]
        O[Client releases payment from escrow]
    end

    subgraph Tailor
        H[Tailor tokenizes clothes as NFTs]
        I[Tailor discusses customization options]
        J[Tailor reviews agreement]
        K[Tailor receives escrow notification]
        L[Tailor sews the garment]
        P[Tailor delivers garment]
        Q[Tailor receives payment]
    end

    subgraph Blockchain
        R[NFT marketplace displays available clothes]
        S[Hashed contract generated and stored]
        T[Solana escrow holds payment]
        U[Payment released to tailor]
    end

    H --> R
    R --> A
    A --> B
    B --> C
    C --> D
    D --> I
    I --> E
    E --> F
    F --> J
    J --> S
    S --> G
    G --> T
    T --> K
    K --> L
    L --> P
    P --> M
    M --> N
    N --> O
    O --> U
    U --> Q

    classDef clientProcess fill:#d1f0ff,stroke:#0077b6
    classDef tailorProcess fill:#ffe8d6,stroke:#bc6c25
    classDef blockchainProcess fill:#e9ecef,stroke:#343a40

    class A,B,C,D,E,F,G,M,N,O clientProcess
    class H,I,J,K,L,P,Q tailorProcess
    class R,S,T,U blockchainProcess
```

## Detailed Process:

1. **NFT Creation & Marketplace:**
   - Tailor tokenizes available clothing designs as NFTs on Solana
   - NFTs contain details about the garment and production time

2. **Client Selection & Discussion:**
   - Client browses available clothing NFTs
   - Client views details and production time
   - Client initiates discussion with tailor
   - Both parties discuss customizations based on measurements

3. **Agreement & Payment:**
   - Once both parties agree on terms
   - Hashed contract agreement is generated and stored on-chain
   - Client makes payment to Solana escrow program

4. **Production & Delivery:**
   - Tailor sews the garment according to agreement
   - Tailor delivers finished product to client (in-person or via dispatch)

5. **Completion:**
   - Client confirms satisfactory delivery
   - Payment is released from escrow to tailor
   - Contract remains permanently accessible on blockchain 
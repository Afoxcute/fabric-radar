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
        L1[Tailor buys fabric]
        L2[Tailor starts sewing]
        L3[Tailor completes garment]
        P[Tailor delivers garment]
        Q[Tailor receives payment]
    end

    subgraph Blockchain
        R[NFT marketplace displays available clothes]
        S1[Hashed contract generated: "Contract Started"]
        S2[Contract status updated: "Fabric Purchased"]
        S3[Contract status updated: "Sewing In Progress"]
        S4[Contract status updated: "Sewing Completed"]
        S5[Contract status updated: "Contract Completed"]
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
    J --> S1
    S1 --> G
    G --> T
    T --> K
    K --> L1
    L1 --> S2
    S2 --> L2
    L2 --> S3
    S3 --> L3
    L3 --> S4
    S4 --> P
    P --> M
    M --> N
    N --> O
    O --> U
    U --> Q
    U --> S5

    classDef clientProcess fill:#d1f0ff,stroke:#0077b6
    classDef tailorProcess fill:#ffe8d6,stroke:#bc6c25
    classDef blockchainProcess fill:#e9ecef,stroke:#343a40
    classDef contractStatus fill:#d8f3dc,stroke:#2d6a4f,stroke-width:2px

    class A,B,C,D,E,F,G,M,N,O clientProcess
    class H,I,J,K,L1,L2,L3,P,Q tailorProcess
    class R,T,U blockchainProcess
    class S1,S2,S3,S4,S5 contractStatus
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
   - Hashed contract agreement is generated and stored on-chain with status "Contract Started"
   - Client makes payment to Solana escrow program

4. **Production & Delivery:**
   - Tailor buys fabric (contract status updated to "Fabric Purchased")
   - Tailor begins sewing (contract status updated to "Sewing In Progress")
   - Tailor completes the garment (contract status updated to "Sewing Completed")
   - Tailor delivers finished product to client (in-person or via dispatch)

5. **Completion:**
   - Client confirms satisfactory delivery
   - Payment is released from escrow to tailor
   - Contract status is updated to "Contract Completed"
   - Contract remains permanently accessible on blockchain with full status history 
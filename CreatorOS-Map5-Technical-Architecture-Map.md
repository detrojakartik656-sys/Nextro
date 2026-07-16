# CreatorOS Master Blueprint
## Map 5 — Technical Architecture Map
**Status: 🔒 LOCKED**
**Builds on: Foundation v1, Map 2, Map 3, Map 4**

---

## 1. Purpose

Defines the technical backbone that makes every prior map actually runnable: frontend, backend, database, APIs, and how they connect.

## 2. Layers

```
Frontend (Product/UI — Map 4 screens)
        ↓
API Gateway (single entry point)
        ↓
Orchestrator Engine (routes to agents, enforces write rules from Map 2/3)
        ↓
Dedicated APIs (per module: Strategy, Script, Memory, Analytics, etc.)
        ↓
Event Bus (async communication between modules)
        ↓
Database Layer (see Map 12 — Data Architecture)
        ↓
Security Layer (see Map 13 — Privacy & Security)
```

## 3. API Gateway

- Single entry point for all frontend requests
- Handles authentication before any request reaches internal systems
- Routes requests to the correct Dedicated API

## 4. Dedicated APIs

One API per core module (Creative Board API, Memory API, Analytics API, Agent API, etc.) — kept separate so each module can scale, version, and deploy independently.

**Rules (inherited from Foundation v1):**
- No direct database access from any API — everything goes through the Orchestrator Engine or Event Bus
- Authentication required on every call
- APIs are versioned (breaking changes never hit existing clients silently)
- Long-running tasks (e.g., agent generation) are async, not blocking
- Consistent response format across all APIs

## 5. Event Bus

Allows modules to communicate without direct coupling. Example: when Publishing completes, it emits an event; Analytics Engine picks it up and starts tracking — Publishing never needs to know Analytics exists.

## 6. Orchestrator Engine (technical detail)

- Central coordinator for all AI agent workflows (Map 2)
- Enforces the write-access rules from Map 2 and Map 3 at the infrastructure level, not just as a policy — i.e., the Learning Agent's write path to Memory is the *only* code path with that permission
- Prevents duplicate/conflicting agent runs on the same Creative Board item

## 7. Suggested Stack Considerations (for later technical decision, not locked)

This map defines *shape*, not specific vendor choices. Stack selection (e.g., which database, which hosting) is deferred to implementation planning and shouldn't be locked into the blueprint itself.

---
*Next: Map 6 — Data Architecture Map*

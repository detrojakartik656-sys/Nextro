# CreatorOS Master Blueprint
## Map 6 — Data Architecture Map
**Status: 🔒 LOCKED**
**Builds on: Foundation v1, Map 3 (Memory Layers), Map 5 (Technical Architecture)**

---

## 1. What CreatorOS Stores

| Data category | Examples | Maps to |
|---|---|---|
| Creator Profile | Identity, niche, audience, voice, goals, brand style | Personal Creator Memory / Brand Memory |
| Content Data | Ideas, scripts, visual plans, production assets | Content Memory / Creative Board |
| Performance Data | Watch time, retention, saves, shares | Performance Memory |
| Audience Data | Audience problems, reactions, patterns | Audience Memory |
| Learning Data | Lessons, what worked/failed and why | Learning Memory |
| Account Data | Login, permissions, roles, billing | Security Layer (Map 7) |

## 2. Where It's Stored

- **Structured data** (profile fields, performance metrics, roles) → relational database
- **Content assets** (scripts, images, video) → object storage, referenced by ID from the relational layer
- **Memory entries** → versioned store (append-only, per Map 3's "no silent overwrite" rule) so lessons can be traced back to their source event

## 3. How It Moves

Follows the Event Bus pattern from Map 5: a state change in one module (e.g., content published) emits an event; subscribed modules (Analytics) react — no direct database-to-database calls.

## 4. Who Can Access It

Access is governed by the RBAC roles defined in the original foundation doc and carried forward:

| Role | Access level |
|---|---|
| Owner | Full read/write across all data |
| Admin | Full read/write, minus account deletion/billing |
| Editor | Read/write on content, read-only on memory/analytics |
| Viewer | Read-only across content and analytics |
| Client | Read-only, scoped to shared projects only |

Agents themselves follow the write-access table from Map 2 regardless of the human role operating the session — an agent never gets more access than its defined role, even if the human user is an Owner.

---
*Next: Map 7 — Privacy & Security Map*

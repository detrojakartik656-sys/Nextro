# CreatorOS Master Blueprint
## Map 4 — Product / UI Map
**Status: 🔒 LOCKED**
**Builds on: Foundation v1, Map 2, Map 3**

---

## 1. Purpose

Defines every screen a creator interacts with, and what each screen is for. This is the visible surface of the system — everything underneath (agents, memory, engines) shows up here.

## 2. Screens

| Screen | Purpose |
|---|---|
| **Home Dashboard** | Today's priorities, creator health, key insights at a glance |
| **Workspace** | Main working area — where a creator spends most active time |
| **Creative Board** | Single source of truth: ideas, projects, content status |
| **Creator Companion** | Conversational AI interface — "Ask CreatorOS" |
| **Trend Intelligence** | Trends, opportunities, market signals (Research Agent surface) |
| **Script Studio** | Write, improve, test scripts (Script Agent surface) |
| **Scene Director** | Visual planning, storyboarding, shot ideas (Visual Director surface) |
| **Video Production Studio** | Production workflow (Production Agent surface) |
| **Analytics** | Performance, growth, learning (Performance Analyst surface) |
| **Memory Center** | View/manage what CreatorOS has learned (Creator Memory surface — new) |
| **User Accounts** | Account management |
| **Projects** | Project-level organization |
| **Settings** | System configuration, permissions |

## 3. Command Center Layer (sits on top of all screens)

- **Daily Briefing** — "What matters today?"
- **Priority Center** — "What should I focus on?"
- **Health Monitor** — "Is my creator system healthy?"
- **Ask CreatorOS** — universal AI interface, always accessible
- **Weekly CEO Report** — from CEO Advisor Agent (Map 2)

## 4. Screen → System Mapping

Each screen is a UI surface for exactly one backend system, so there's no ambiguity about where data lives:

```
Home Dashboard      → aggregates from all engines (read-only summary)
Workspace           → Creative Board + Content Engine
Creative Board       → Creative Board module directly
Creator Companion    → Orchestrator Engine (routes to any agent)
Trend Intelligence   → Research Agent
Script Studio        → Script Agent
Scene Director       → Visual Director Agent
Video Production     → Production Agent
Analytics            → Analytics Engine + Performance Analyst Agent
Memory Center        → Creator Memory (read-only view for the creator)
```

## 5. Navigation Principle

A creator should never need to "know" which agent is doing the work. Screens are organized by the creator's intent (write a script, check performance), not by internal architecture. The agent/engine mapping above is invisible to the user — it's here so design and engineering stay aligned.

---
*Next: Map 5 — Technical Architecture Map*

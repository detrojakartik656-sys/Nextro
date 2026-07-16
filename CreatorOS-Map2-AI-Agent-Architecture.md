# CreatorOS Master Blueprint
## Map 2 — AI Agent Architecture
**Status: DRAFT — pending review before lock**
**Builds on: CreatorOS Foundation v1 (Map 1)**

---

## 1. Purpose of This Map

Map 1 established that the AI Engine executes work through a set of agents. This map defines exactly what each agent does, what it needs to do its job, what it produces, and how it talks to the rest of the system — so no agent's responsibility overlaps with another's.

---

## 2. Agent Communication Principle

No agent talks to another agent directly. All communication passes through the **Orchestrator Engine** (Foundation v1, Section 4/6), which:
- Routes requests to the correct agent
- Prevents duplicate or conflicting work
- Reads from Creator Brain / Creator Memory on the agent's behalf
- Writes agent outputs to the Creative Board

```
Creator Companion → Orchestrator Engine → [Agent] → Orchestrator Engine → Creative Board
```

This keeps agents stateless and swappable — any agent can be upgraded or replaced without breaking the system, because none of them hold their own memory or talk to each other peer-to-peer.

---

## 3. Agent Roster

### 1. Strategy Agent
- **Role:** Understands creator goals, finds opportunities, builds content strategy, recommends priorities
- **Input:** Creator Brain (goals, niche, audience) + Research Agent output + Performance Analyst output
- **Output:** Prioritized content strategy → posted to Creative Board
- **Triggers:** Weekly by default, or on-demand via Creator Companion

### 2. Research Agent
- **Role:** Finds trends, analyzes competitors, discovers audience problems, collects supporting knowledge
- **Input:** Creator Brain (niche, audience) + external trend/competitor data
- **Output:** Research briefs → feeds Strategy Agent and Script Agent
- **Triggers:** On-demand, or scheduled ahead of strategy cycles

### 3. Script Agent
- **Role:** Converts ideas into scripts, improves hooks, storytelling, and retention
- **Input:** Creative Board item (idea/status) + Research briefs + Creator Brain (voice/style)
- **Output:** Draft script → Editor, status updated on Creative Board
- **Triggers:** When an idea moves to "Writing" status on the Creative Board

### 4. Visual Director Agent
- **Role:** Creates visual concepts, scene planning, poster direction, emotional storytelling
- **Input:** Approved script + Creator Brain (brand style)
- **Output:** Visual plan / storyboard → Production Agent
- **Triggers:** When a script moves to "Design" status

### 5. Production Agent
- **Role:** Coordinates the actual assembly of production-ready assets (video/poster/reel) from script + visual plan
- **Input:** Script + Visual plan
- **Output:** Production-ready asset → Editor
- **Triggers:** When visual plan is approved

### 6. Performance Analyst Agent
- **Role:** Analyzes watch time, retention, saves, shares, audience response post-publish
- **Input:** Analytics Engine raw data
- **Output:** Performance report → Learning Agent + Strategy Agent
- **Triggers:** Fixed interval after publish (e.g. 24h, 7d)

### 7. Learning Agent
- **Role:** Turns performance reports into lessons; decides what gets written to Creator Memory
- **Input:** Performance Analyst report + original content plan (what was intended vs. what happened)
- **Output:** Memory update (write to Creator Memory — the *only* agent with write access)
- **Triggers:** After every Performance Analyst report

### 8. CEO Advisor Agent
- **Role:** Higher-level decisions, prioritization across all other agent outputs, business thinking, long-term direction
- **Input:** Strategy Agent output + Performance trends over time + Creator Brain (goals)
- **Output:** Weekly CEO Report (Foundation v1, Command Center concept)
- **Triggers:** Weekly, or on-demand

---

## 4. Agent Dependency Map

```
Research Agent ──────┐
                      ▼
Creator Brain ──▶ Strategy Agent ──▶ Creative Board
                      ▲                    │
Performance Analyst ──┘                    ▼
     ▲                              Script Agent
     │                                     │
Analytics Engine                           ▼
     ▲                          Visual Director Agent
     │                                     │
  Publishing                               ▼
     ▲                            Production Agent
     │                                     │
   Editor  ◀───────────────────────────────┘
     │
     ▼
 Publishing
     │
     ▼
Performance Analyst ──▶ Learning Agent ──▶ Creator Memory
                                               │
                                               ▼
                                        Creator Brain (loop closes)
CEO Advisor Agent: reads from Strategy + Performance, writes only the Weekly CEO Report (no Creative Board write access)
```

---

## 5. Write-Access Rules (strict — inherited from Foundation v1)

| Agent | Can write to |
|---|---|
| Strategy Agent | Creative Board (strategy items) |
| Research Agent | Creative Board (research briefs) |
| Script Agent | Creative Board (script drafts), Editor |
| Visual Director Agent | Creative Board (visual plans) |
| Production Agent | Editor |
| Performance Analyst Agent | *(read-only — produces reports, does not write to Board or Memory)* |
| Learning Agent | **Creator Memory** (exclusive write access) |
| CEO Advisor Agent | Weekly CEO Report only |

No agent other than the Learning Agent may write to Creator Memory. This is a hard rule carried over from Foundation v1 — it's what keeps memory trustworthy rather than cluttered with unvalidated agent output.

---

## Review Checklist Before Lock

- [ ] Agent roster is complete for MVP (8 agents — confirm none missing, none to cut for v1)
- [ ] Orchestrator-only communication rule matches your intent (no agent-to-agent direct calls)
- [ ] Write-access table is correct — especially Learning Agent's exclusive Memory access
- [ ] Trigger conditions per agent make sense for how you want the system to feel (automatic vs. on-demand)

---

*Once approved, this locks alongside Foundation v1. Map 3 (Creator Memory System) will be built next, defining memory layers in detail.*

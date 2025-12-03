# Interaction Design Process

## Overview

This project followed a **User-Centered Design (UCD)** process, an iterative design methodology that places users at the center of all design decisions. The process ensures that the final product addresses real user needs rather than assumed requirements.

---

## Process Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        USER-CENTERED DESIGN PROCESS                         │
└─────────────────────────────────────────────────────────────────────────────┘

  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
  │  PHASE 1 │───▶│  PHASE 2 │───▶│  PHASE 3 │───▶│  PHASE 4 │───▶│  PHASE 5 │───▶│  PHASE 6 │
  │ Research │    │ Analysis │    │ Personas │    │   Reqs   │    │Use Cases │    │Prototype │
  └──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘
       │               │               │               │               │               │
       ▼               ▼               ▼               ▼               ▼               ▼
  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
  │Interview │    │ Patterns │    │  Erik &  │    │ Volere   │    │ UC-01 &  │    │ Lo-Fi    │
  │   Data   │    │ Clusters │    │  Gunnel  │    │ Template │    │  UC-02   │    │Wireframes│
  └──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘
```

---

## Phase 1: Research & Data Collection

### Objective
Understand real users, their behaviors, needs, and pain points through qualitative research.

### Method
**Semi-structured interviews** with 5 respondents from the target demographic (rural residents in Norrbotten, ages 27-83).

### Interview Topics
- Current information sources and behaviors
- Digital service usage and barriers
- Specific information needs (events, transport, weather)
- Frustrations with existing solutions
- Ideal information access scenarios

### Key Activities
- Conducted 5 qualitative interviews
- Explored current behaviors and pain points
- Identified needs around local information access
- Documented direct quotes for later reference

### Output
Raw interview data including:
- Demographic information
- Behavioral patterns
- Direct quotes
- Observed frustrations
- Stated needs and desires

### Data Summary

| Respondent | Age | Key Insight |
|------------|-----|-------------|
| R1 | 27 | "Hard to know what to trust" - wants centralized reliable source |
| R2 | 56 | Uses multiple Facebook groups, finds it fragmented |
| R3 | 83 | Depends on others for bus times, avoids complex digital |
| R4 | 28 | Key use case: checking bus schedules |
| R5 | 68 | Limited digital skills, prefers personal contacts |

---

## Phase 2: Analysis & Synthesis

### Objective
Transform raw interview data into actionable insights through pattern identification.

### Method
**Behavioral variable mapping** - identifying dimensions along which users vary, then mapping each respondent.

### Behavioral Variables Identified

| Variable | Range |
|----------|-------|
| Digital proficiency | Low ←→ High |
| Information seeking | Passive ←→ Active |
| Trust in digital | Skeptical ←→ Trusting |
| Social connectivity | Isolated ←→ Connected |
| Age-related needs | Standard ←→ Accessibility-focused |

### Key Activities
- Identified behavioral variables from interview data
- Mapped each respondent to variables
- Discovered patterns and natural groupings
- Synthesized insights across respondents

### Output
Two distinct user clusters emerged:

**Cluster A (Younger, Tech-Comfortable)**
- R1 (27), R4 (28)
- High digital proficiency
- Active information seekers
- Frustrated by fragmented sources
- Want centralized, reliable info

**Cluster B (Older, Tech-Challenged)**
- R3 (83), R5 (68)
- Limited digital confidence
- Prefer passive information receipt
- Depend on personal networks
- Need accessibility support

---

## Phase 3: Persona Development

### Objective
Create research-backed user archetypes to guide design decisions.

### Method
**Goal-directed persona creation** based on behavioral clusters, following the Goodwin/Cooper methodology.

### Key Activities
- Defined goals, behaviors, and frustrations
- Added realistic demographic details
- Created usage scenarios
- Established primary/secondary prioritization

### Output

**Primary Persona: Erik Lindqvist (27)**
- Represents Cluster A
- High-frequency user
- Drives feature requirements
- Pain point: Scattered, unreliable information

**Secondary Persona: Gunnel Bergström (78)**
- Represents Cluster B
- Drives accessibility requirements
- Pain point: Digital complexity, dependency on others
- Key use case: Bus schedule access

### Prioritization Rationale
Erik is **primary** because he represents larger user volume and higher usage frequency. Gunnel is **secondary** but her accessibility needs create a "curb cut effect" - improvements for her benefit all users.

---

## Phase 4: Requirements Specification

### Objective
Define testable, traceable requirements based on persona needs.

### Method
**Volere template** - industry-standard format ensuring requirements include rationale, source, and fit criteria.

### Key Activities
- Traced requirements directly to interview data
- Defined measurable fit criteria
- Prioritized based on persona impact
- Documented dependencies

### Output
Three core requirements:

| ID | Type | Summary | Priority |
|----|------|---------|----------|
| REQ-F01 | Functional | Event information display | High |
| REQ-NF01 | Non-Functional | Accessibility and readability | High |
| REQ-F02 | Functional | Real-time bus schedule | High |

### Traceability
Every requirement traces back to:
- Specific interview quotes
- Identified persona needs
- Defined use cases

---

## Phase 5: Use Case Modeling

### Objective
Describe concrete user-system interactions to guide detailed design.

### Method
**Use case specification** with main flows, alternative flows, and business rules.

### Key Activities
- Defined actors based on personas
- Documented preconditions and postconditions
- Created step-by-step interaction flows
- Identified alternative and exception paths

### Output

| ID | Name | Primary Actor |
|----|------|---------------|
| UC-01 | View Local Events | Erik Lindqvist |
| UC-02 | Check Bus Schedule | Gunnel Bergström |

Each use case includes:
- Main flow (happy path)
- Alternative flows (variations)
- Exception handling
- Business rules
- UI requirements

---

## Phase 6: Prototyping

### Objective
Visualize the solution through low-fidelity prototypes that embody design decisions.

### Method
**Low-fidelity wireframing** with explicit design rationale linking every decision to persona needs.

### Key Activities
- Designed 4 key screens (Home, Events, Event Detail, Bus Schedule)
- Applied accessibility requirements throughout
- Documented design rationale for each element
- Created interactive prototype for demonstration

### Output

| Screen | Purpose | Key Design Decisions |
|--------|---------|---------------------|
| Home | Navigation + passive info | Sidebar for Gunnel, source attribution for Erik |
| Events List | Browse events | Simple filters, no dropdowns, clear cards |
| Event Detail | Full event info | Large text, QR code bridge to mobile |
| Bus Schedule | Departure times | Extra-large times, "NEXT" highlight, day toggle |

### Design Decision Traceability

| Decision | Rationale | Source |
|----------|-----------|--------|
| 48px+ touch targets | Accessibility for elderly | REQ-NF01, Gunnel |
| Quick info sidebar | Passive viewing preference | Interview R3, Gunnel |
| Source footer | Trust building | Interview R1, Erik |
| "NEXT" bus badge | Immediate relevance | UC-02, Gunnel |
| No dropdown menus | Reduce complexity | Cluster B findings |

---

## Key UCD Principles Applied

### 1. User Involvement
- Real users interviewed throughout process
- Personas based on actual data, not assumptions
- Design decisions traced to user quotes

### 2. Iterative Process
- Each phase builds on previous insights
- Requirements derived from personas
- Use cases derived from requirements
- Prototypes validate against use cases

### 3. Evidence-Based Design
- No design decision without research backing
- Direct quotes used as evidence
- Fit criteria enable validation

### 4. Accessibility First
- Secondary persona drives accessibility
- "Curb cut effect" benefits all users
- WCAG compliance as baseline

---

## Process Reflection

### What Worked Well
- Strong traceability from research → design decisions
- Persona prioritization clarified decision-making
- Volere template ensured testable requirements
- Two distinct user types captured full spectrum

### Challenges Encountered
- Limited interview sample (5 respondents)
- Remote/rural context difficult to fully understand
- Technical constraints (API availability) unknown

### Recommendations for Future Work
- Conduct usability testing with prototype
- Expand interview sample size
- Include stakeholder interviews (municipality, transport)
- Create high-fidelity prototype for validation

---

## Artifacts Produced

| Artifact | Location | Purpose |
|----------|----------|---------|
| Interview data | (Course materials) | Raw research |
| Pattern analysis | (Working documents) | Synthesis |
| Personas | `/docs/PERSONAS.md` | User archetypes |
| Requirements | `/docs/REQUIREMENTS.md` | Specifications |
| Use Cases | `/docs/USE-CASES.md` | Interaction flows |
| Prototype | `/src/` | Visual solution |

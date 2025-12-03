# Requirements Specification

## Overview
Requirements were defined using the **Volere template**, ensuring each requirement is traceable to user research, testable through fit criteria, and connected to specific personas and use cases.

---

## REQ-F01: Event Information Display

| Field | Value |
|-------|-------|
| **ID** | REQ-F01 |
| **Type** | Functional |
| **Priority** | High |
| **Version** | 1.0 |

### Description
The system shall display a list of upcoming local events including: event name, date, time, location, and description. Events shall be sorted chronologically with nearest events first.

### Rationale
Interview data (R1, R4) reveals that local information is scattered across multiple Facebook groups, making it difficult to find reliable event information. R1 specifically mentioned difficulty knowing "what to trust" due to hearsay. A centralized, authoritative event display addresses this pain point.

### Source
- Interview: R1 (scattered info), R2 (wants local events), R4 (uses Facebook for events), R5 (wants community info)
- Persona: Erik Lindqvist (primary)
- Use Case: UC-01

### Fit Criterion
1. System displays minimum 10 upcoming events when available
2. Each event includes all required fields (name, date, time, location, description)
3. Events are verifiably sorted by date (ascending)
4. Event list updates within 60 seconds of content changes
5. 95% of test users can find event information within 3 taps

### Dependencies
- Content Management System for event data input
- Integration with local organizations/föreningar for event submissions
- Network connectivity for data sync

### Supporting Materials
```
Interview quote (R1): "Det är svårt att veta vad man kan lita på 
när det är mycket hörsägen."
```

---

## REQ-NF01: Accessibility and Readability

| Field | Value |
|-------|-------|
| **ID** | REQ-NF01 |
| **Type** | Non-Functional (Usability) |
| **Priority** | High |
| **Version** | 1.0 |

### Description
All text content shall be readable from a distance of 2 meters. Body text shall use minimum 24pt font size, headings minimum 36pt. Color contrast ratio shall be minimum 7:1 (WCAG AAA). All interactive elements shall have touch targets of minimum 48x48 pixels.

### Rationale
Secondary persona Gunnel (78 years) and interview respondent R3 (83 years) have visual limitations common in the elderly population. R1 mentioned avoiding services that are "cluttered" or have poor UX. Accessibility requirements ensure the screen serves users of all abilities and ages.

### Source
- Interview: R1 (avoids bad UX), R3 (elderly, needs help with digital)
- Persona: Gunnel Bergström (secondary)
- WCAG 2.1 Guidelines (Level AA minimum, AAA for contrast)

### Fit Criterion
1. 90% task completion rate for users aged 65+ in usability testing
2. WCAG 2.1 AA compliance verified by automated testing tool
3. Text readability verified at 2 meters distance with 20/40 corrected vision
4. All touch targets pass 48x48px minimum when measured
5. Contrast ratio verified ≥7:1 using WebAIM contrast checker

### Dependencies
- Hardware specification (screen size, resolution, brightness)
- Mounting height and angle specification
- Ambient lighting conditions at installation site

### Supporting Materials
```
WCAG 2.1 References:
- 1.4.3 Contrast (Minimum) - Level AA: 4.5:1
- 1.4.6 Contrast (Enhanced) - Level AAA: 7:1
- 2.5.5 Target Size - Level AAA: 44x44px (we exceed with 48x48px)
```

---

## REQ-F02: Real-Time Bus Schedule Integration

| Field | Value |
|-------|-------|
| **ID** | REQ-F02 |
| **Type** | Functional |
| **Priority** | High |
| **Version** | 1.0 |

### Description
The system shall display real-time bus schedule for the nearest bus stop, including departure times, destinations, line numbers, and delay information. Data shall update every 5 minutes. Schedule shall be viewable for current day plus 7 days ahead.

### Rationale
Interview respondent R3 (83 years, matches Gunnel persona) explicitly mentioned needing bus schedule information and currently depends on others for help. R4 described checking bus times as a key use case. Integrating real-time bus data removes dependency on smartphone apps that many elderly users find difficult.

### Source
- Interview: R3 (needs bus times, depends on help), R4 (bus times key use case)
- Persona: Gunnel Bergström (secondary)
- Use Case: UC-02

### Fit Criterion
1. Displayed departure times match regional transport API within 1 minute accuracy
2. Data refreshes every 5 minutes ±30 seconds
3. "Last updated" timestamp visible and accurate
4. Delay information displays within 2 minutes of API update
5. 7-day schedule accessible within 2 taps from home screen
6. Fallback to cached data within 10 seconds if API unavailable

### Dependencies
- API access agreement with Länstrafiken Norrbotten
- Network connectivity (primary and fallback)
- Bus stop location configuration

### Supporting Materials
```
Interview quote (R3): Behöver hjälp av hemtjänst eller son 
för att kolla busstider.

API Requirements:
- Endpoint: Länstrafiken Norrbotten GTFS-RT
- Update frequency: Real-time (streaming) or 5-minute polling
- Data fields: stop_id, departure_time, route_id, delay_seconds
```

---

## Requirements Traceability Matrix

| Req ID | Type | Persona | Use Case | Interview | Priority |
|--------|------|---------|----------|-----------|----------|
| REQ-F01 | Functional | Erik | UC-01 | R1, R2, R4, R5 | High |
| REQ-NF01 | Non-Functional | Gunnel | UC-01, UC-02 | R1, R3 | High |
| REQ-F02 | Functional | Gunnel | UC-02 | R3, R4 | High |

---

## Requirement Categories

### Functional Requirements
Requirements describing **what** the system must do.

| ID | Summary | Status |
|----|---------|--------|
| REQ-F01 | Display event information | Defined |
| REQ-F02 | Real-time bus schedule | Defined |

### Non-Functional Requirements
Requirements describing **how well** the system must perform.

| ID | Category | Summary | Status |
|----|----------|---------|--------|
| REQ-NF01 | Usability | Accessibility and readability | Defined |

---

## Future Requirements (Backlog)

The following requirements were identified but not prioritized for initial release:

| ID | Description | Source |
|----|-------------|--------|
| REQ-F03 | Weather forecast display | R2, R5 |
| REQ-F04 | Local news feed | R2 |
| REQ-F05 | Emergency alerts | General safety |
| REQ-NF02 | Offline functionality | R1 (poor connectivity) |
| REQ-NF03 | Multi-language support | Accessibility |

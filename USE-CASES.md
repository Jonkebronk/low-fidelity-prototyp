# Use Cases

## Overview
Two primary use cases were developed based on persona goals and interview data. Each use case describes a concrete interaction between a user and the digital information screen.

---

## UC-01: View Local Events on Information Screen

### Metadata
| Field | Value |
|-------|-------|
| **ID** | UC-01 |
| **Name** | View Local Events on Information Screen |
| **Primary Actor** | Erik Lindqvist (Primary Persona) |
| **Goal** | Find reliable information about upcoming local events |

### Description
A user approaches the public information screen to discover upcoming local events in the village. They want to quickly scan what's happening, filter by category if needed, and get details about specific events.

### Preconditions
- Information screen is powered on and functional
- Event data has been synced from content management system
- User is within viewing/touching distance of screen

### Postconditions
- User has obtained information about upcoming events
- Screen returns to idle/home state after 30 seconds of inactivity

### Main Flow

| Step | Actor | System |
|------|-------|--------|
| 1 | User approaches the information screen | Screen displays home screen with navigation options |
| 2 | User views the home screen | System shows 6 main categories + quick info sidebar |
| 3 | User taps "Events" button | System navigates to events list |
| 4 | User views event list | System displays events sorted by date (chronological) |
| 5 | User scrolls through events | System supports swipe gesture, shows scroll indicator |
| 6 | User taps on a specific event | System displays event detail view |
| 7 | User views event details | System shows: name, date, time, location, description |
| 8 | User taps back or waits | System returns to events list or home after timeout |

### Alternative Flows

#### 4a. No Events Available
| Step | Description |
|------|-------------|
| 4a.1 | System displays message: "Inga kommande evenemang just nu" |
| 4a.2 | System suggests checking back later or shows past events |

#### 5a. Passive Viewing Mode
| Step | Description |
|------|-------------|
| 5a.1 | If user doesn't interact, events auto-rotate every 10 seconds |
| 5a.2 | Rotation stops when user touches screen |

#### 6a. Event Has External Link
| Step | Description |
|------|-------------|
| 6a.1 | Event detail shows QR code for more information |
| 6a.2 | User can scan QR with personal phone |

### Business Rules
- Events must be published at least 7 days before event date
- Past events are automatically removed from list
- Maximum 20 events displayed at once
- Events without complete information (date, time, location) are not shown

### UI Requirements
- Event cards show: title (large), location, date, time
- Filter buttons: All, Markets, Sports, Culture
- Touch targets minimum 48x48px
- Scroll indicator visible when more content exists

---

## UC-02: Check Public Transportation Schedule

### Metadata
| Field | Value |
|-------|-------|
| **ID** | UC-02 |
| **Name** | Check Public Transportation Schedule |
| **Primary Actor** | Gunnel Bergström (Secondary Persona) |
| **Goal** | Find bus departure times without using smartphone app |

### Description
An elderly user approaches the public information screen to check when the next bus departs from the local stop. They need to see today's and tomorrow's schedule clearly, without requiring any app download, login, or complex navigation.

### Preconditions
- Information screen is powered on and functional
- Bus schedule data is synced with regional transport API
- User is within viewing distance (can see from 2 meters)

### Postconditions
- User knows the next bus departure time(s)
- User can plan their trip independently
- Screen returns to idle state after inactivity

### Main Flow

| Step | Actor | System |
|------|-------|--------|
| 1 | User approaches information screen | Screen displays home screen |
| 2 | User views home screen | System shows large navigation buttons + bus times in sidebar |
| 3 | User taps "Bus Schedule" button | System navigates to full bus schedule |
| 4 | User views today's departures | System shows next 5 departures with times and destinations |
| 5 | User identifies next bus | System highlights next departure with "NEXT" badge and green color |
| 6 | User taps "Tomorrow" | System shows tomorrow's schedule |
| 7 | User views tomorrow's departures | System displays morning departures first |
| 8 | User leaves | System returns to home after 30 second timeout |

### Alternative Flows

#### 3a. Passive Viewing (No Tap Required)
| Step | Description |
|------|-------------|
| 3a.1 | Home screen sidebar shows next 3 departures automatically |
| 3a.2 | User can see basic info without any interaction |

#### 5a. Weekend/Holiday Schedule
| Step | Description |
|------|-------------|
| 5a.1 | System displays notice: "Helgtidtabell - färre avgångar" |
| 5a.2 | Reduced schedule is clearly indicated |

#### 6a. Delay Information
| Step | Description |
|------|-------------|
| 6a.1 | If bus is delayed, orange badge shows "+X min" |
| 6a.2 | Delay info updates in real-time when available |

### Accessibility Requirements
| Requirement | Specification |
|-------------|---------------|
| Font size (times) | Minimum 24pt, preferably 32pt |
| Font size (destinations) | Minimum 18pt |
| Contrast ratio | 7:1 minimum |
| Touch targets | 48x48px minimum |
| Screen height | Readable from wheelchair height |
| Color coding | Green (next), Orange (delay), not color-only |

### Business Rules
- Schedule syncs with regional transport API every 5 minutes
- Real-time delay information shown when available
- Schedule available for today + 7 days ahead
- "Last updated" timestamp always visible
- If API unavailable, show cached data with warning

### UI Requirements
- Bus stop name and number clearly displayed
- Day selector: Today / Tomorrow / This Week
- Next departure prominently highlighted
- Departure times in extra-large font (24pt+)
- Destination and line number for each departure
- Last updated timestamp visible

---

## Use Case Diagram

```
                    ┌─────────────────────────────┐
                    │  Digital Information Screen │
                    └─────────────────────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
              ┌─────┴─────┐               ┌─────┴─────┐
              │  UC-01    │               │  UC-02    │
              │  View     │               │  Check    │
              │  Events   │               │  Bus      │
              └─────┬─────┘               └─────┬─────┘
                    │                           │
              ┌─────┴─────┐               ┌─────┴─────┐
              │   Erik    │               │  Gunnel   │
              │ (Primary) │               │(Secondary)│
              └───────────┘               └───────────┘
```

---

## Traceability Matrix

| Use Case | Persona | Interview Data | Requirements |
|----------|---------|----------------|--------------|
| UC-01 | Erik | R1, R2, R4 mention event info needs | REQ-F01 |
| UC-02 | Gunnel | R3 explicitly needs bus times | REQ-F02, REQ-NF01 |

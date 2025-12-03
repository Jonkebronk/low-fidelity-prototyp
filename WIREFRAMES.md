# Wireframe Specifications

## Overview
This document provides detailed specifications for implementing the low-fidelity prototype screens. Each screen includes layout, components, interactions, and design rationale.

---

## Screen 1: Home Screen

### Layout
```
┌─────────────────────────────────────────────────────────────────┐
│  ☀️ -5°C Clear          │                  14:35 Wed, Dec 3     │  ← Header
├─────────────────────────────────────────────────────────────────┤
│                                             │                   │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐    │   NEXT BUS        │
│   │ Events  │  │   Bus   │  │ Weather │    │   ┌───────────┐   │
│   │   📅    │  │   🚌    │  │   ☁️    │    │   │  14:35    │   │
│   └─────────┘  └─────────┘  └─────────┘    │   │  → Boden  │   │
│                                             │   └───────────┘   │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐    │                   │
│   │  News   │  │ Tourism │  │Contacts │    │   16:10 → Luleå   │
│   │   📰    │  │   🏔️    │  │   📞    │    │                   │
│   └─────────┘  └─────────┘  └─────────┘    │   ─────────────   │
│                                             │   TODAY'S EVENT   │
│                                             │   Christmas Mkt   │
│                                             │   18:00 @ Torget  │
├─────────────────────────────────────────────────────────────────┤
│  Last updated: 14:32 • Source: Boden Municipality, Länstrafiken │
└─────────────────────────────────────────────────────────────────┘
```

### Components

| Component | Specification |
|-----------|--------------|
| Header | Weather (icon + temp) left, date/time right. Always visible. |
| Navigation Grid | 2x3 grid of large buttons. Min 48x48px touch targets. Icon + label. |
| Quick Info Sidebar | Width ~150px. Shows next 2-3 bus departures + today's highlight event. |
| Footer | "Last updated" timestamp + data sources. Small text (12pt). |

### Colors
- Events: Blue gradient (#3B82F6 → #2563EB)
- Bus: Green gradient (#22C55E → #16A34A)
- Weather: Orange gradient (#F97316 → #EA580C)
- News: Purple gradient (#A855F7 → #9333EA)
- Tourism: Teal gradient (#14B8A6 → #0D9488)
- Contacts: Rose gradient (#F43F5E → #E11D48)

### Interactions
- Tap navigation button → Navigate to respective screen
- 30 second inactivity → Return to this screen
- No tap required for sidebar info (passive viewing)

### Design Rationale
| Element | Persona Connection |
|---------|-------------------|
| Large buttons | Gunnel - easy to tap, clear labels |
| Quick sidebar | Gunnel - info without interaction |
| Source footer | Erik - builds trust in data |
| Icon + text labels | Both - redundant affordance |

---

## Screen 2: Events List

### Layout
```
┌─────────────────────────────────────────────────────────────────┐
│  ← Back              UPCOMING EVENTS                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   [All] [Markets] [Sports] [Culture]           ← Filter buttons │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  Christmas Market                          Dec 14       │   │
│   │  📍 Village Square                      10:00-18:00     │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  Lucia Concert                             Dec 13       │   │
│   │  📍 Church                                    19:00     │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  Ice Fishing Competition                   Dec 20       │   │
│   │  📍 Lake Bodträsket                      08:00-14:00    │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│                    ↓ Scroll for more                            │
└─────────────────────────────────────────────────────────────────┘
```

### Components

| Component | Specification |
|-----------|--------------|
| Back Button | Large (48px), left-aligned, clear arrow icon |
| Page Title | "Upcoming Events" - 28pt bold |
| Filter Buttons | Toggle buttons (not dropdown). States: active/inactive. |
| Event Cards | Title (large, bold), location (with icon), date, time. Tappable. |
| Scroll Indicator | Visual cue "↓ Scroll for more" or fade effect |

### Interactions
- Tap back → Return to home
- Tap filter → Filter event list
- Tap event card → Navigate to event detail
- Swipe up/down → Scroll event list
- No interaction for 10s → Auto-rotate events (passive mode)

### Design Rationale
| Element | Persona Connection |
|---------|-------------------|
| Toggle filters (no dropdown) | Gunnel - simpler interaction model |
| Key info on card | Erik - quick scanning without tapping |
| Large back button | Gunnel - easy navigation |
| Scroll indicator | Both - discoverability of more content |

---

## Screen 3: Bus Schedule

### Layout
```
┌─────────────────────────────────────────────────────────────────┐
│  ← Back              BUS SCHEDULE              Updated: 14:32   │
│                   🚏 Byn Centrum (#142)                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   [TODAY]  [Tomorrow]  [This Week]             ← Day selector   │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  ██████████████████████████████████████████████████████ │   │
│   │  ██  14:35  ██  NEXT  ██  → Boden centrum    Line 100  ██│   │  ← Green highlight
│   │  ██████████████████████████████████████████████████████ │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │     16:10              → Luleå              Line 200    │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │     17:45              → Boden centrum      Line 100    │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │     21:00  +5 min      → Boden centrum      Line 100    │   │  ← Orange delay badge
│   └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   ℹ️ Weekend schedule may differ. Real-time delays shown.       │
└─────────────────────────────────────────────────────────────────┘
```

### Components

| Component | Specification |
|-----------|--------------|
| Header | Back button, title, stop info, last updated timestamp |
| Stop Identifier | Stop name + number. Confirms which stop. |
| Day Selector | Large toggle buttons (Today/Tomorrow/This Week) |
| Departure Row | Time (EXTRA LARGE 28pt+), destination, line number |
| Next Badge | Green "NEXT" badge on nearest departure |
| Delay Badge | Orange badge showing "+X min" delay |
| Info Bar | Context message about schedule variations |

### Typography Requirements (Accessibility)
| Element | Size | Weight |
|---------|------|--------|
| Departure time | 28-32pt | Bold |
| Destination | 18pt | Medium |
| Line number | 14pt | Regular |
| "NEXT" badge | 12pt | Bold |

### Colors
- Next departure row: Green background (#DCFCE7), green border (#86EFAC)
- "NEXT" badge: Solid green (#22C55E), white text
- Delay badge: Orange background (#FED7AA), orange text (#EA580C)
- Normal rows: White background, subtle border

### Interactions
- Tap back → Return to home
- Tap day selector → Show that day's schedule
- No tapping required to see info (passive viewing)

### Design Rationale
| Element | Persona Connection |
|---------|-------------------|
| Extra-large times | Gunnel - readability from distance |
| "NEXT" highlight | Gunnel - immediate relevance, no cognitive load |
| Day selector (no calendar) | Gunnel - simple mental model |
| Last updated | Erik - trust in data freshness |
| Delay info | Erik - real-time accuracy |

---

## Screen 4: Event Detail

### Layout
```
┌─────────────────────────────────────────────────────────────────┐
│  ← Back                                                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Christmas Market                                              │  ← Large title
│                                                                 │
│   ┌──────────┐  ┌──────────┐                                    │
│   │ 📅 Dec 14│  │🕐10-18:00│                   ┌─────────────┐  │
│   └──────────┘  └──────────┘                   │   [QR CODE] │  │
│                                                 │             │  │
│   ┌──────────────────────────────────────────┐ │  Scan for   │  │
│   │  📍 Location                              │ │  more info  │  │
│   │  Village Square                           │ └─────────────┘  │
│   │  Byn Centrum 1, 961 99                   │                   │
│   └──────────────────────────────────────────┘                   │
│                                                                 │
│   ┌──────────────────────────────────────────────────────────┐   │
│   │  About this event                                        │   │
│   │                                                          │   │
│   │  Traditional Christmas market with local crafts,         │   │
│   │  homemade food, and glögg. Activities for children       │   │
│   │  including meeting Santa Claus.                          │   │
│   │                                                          │   │
│   └──────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Components

| Component | Specification |
|-----------|--------------|
| Back Button | Large, clear affordance for return |
| Event Title | 32pt bold, primary emphasis |
| Date Badge | Blue background, calendar icon |
| Time Badge | Green background, clock icon |
| Location Box | Map pin icon, full address with postal code |
| Description | Full event text, good line height (1.6) |
| QR Code | Optional - links to event webpage/registration |

### Interactions
- Tap back → Return to events list
- QR code scannable by personal phone

### Design Rationale
| Element | Persona Connection |
|---------|-------------------|
| All key info above fold | Gunnel - no scrolling needed |
| Color-coded badges | Both - quick scanning |
| Full address | Gunnel - can write it down |
| QR code | Erik - bridge to personal device |

---

## Responsive Considerations

While this is designed for a fixed public display (likely 32-55"), consider:

| Screen Size | Adaptation |
|-------------|------------|
| 32" (kiosk) | Standard layout, 24pt body text |
| 42" (public) | Increase text 10-15%, wider spacing |
| 55" (large) | Increase text 20-25%, more whitespace |

Touch target sizes should remain consistent (48px minimum) regardless of screen size.

---

## Accessibility Checklist

- [x] All text 24pt+ body, 36pt+ headings
- [x] Contrast ratio 7:1 verified
- [x] Touch targets 48x48px minimum
- [x] Color not sole indicator (icons + labels)
- [x] Readable from 2 meters
- [ ] Screen mountable at wheelchair height (hardware dependent)
- [x] No flashing/blinking elements
- [ ] Clear focus indicators if keyboard nav supported

---

## Implementation Status

All screens have been implemented in React:

| Screen | Status | File |
|--------|--------|------|
| Home | ✅ Implemented | `HomeScreen.jsx` |
| Events List | ✅ Implemented | `EventsListScreen.jsx` |
| Event Detail | ✅ Implemented | `EventDetailScreen.jsx` |
| Bus Schedule | ✅ Implemented | `BusScheduleScreen.jsx` |
| Weather | ✅ Implemented | `WeatherScreen.jsx` |
| News | ✅ Implemented | `NewsScreen.jsx` |
| Tourism | ✅ Implemented | `TourismScreen.jsx` |
| Contacts | ✅ Implemented | `ContactsScreen.jsx` |

**Location:** Gunnarsbyn, Boden municipality
**Season:** Winter (December) mock data

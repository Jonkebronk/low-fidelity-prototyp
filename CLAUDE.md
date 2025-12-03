# CLAUDE.md - Project Instructions

## Project Overview
This is a UX Design project for course I0004E at Luleå University of Technology. The goal is to create a **digital information screen prototype** for rural communities in Norrbotten, Sweden.

**Target Location:** Gunnarsbyn, Boden municipality, Norrbotten

## Tech Stack
- **Framework**: React 18+ with Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: UI in Swedish, code comments in English

## Project Structure
```
/src
  /components
    /screens              # Screen components
      HomeScreen.jsx      # Navigation grid + sidebar
      EventsListScreen.jsx
      EventDetailScreen.jsx
      BusScheduleScreen.jsx
      WeatherScreen.jsx
      NewsScreen.jsx
      TourismScreen.jsx
      ContactsScreen.jsx
    /ui                   # Reusable UI components
      Header.jsx
      BackButton.jsx
      NavButton.jsx
      FilterButton.jsx
      EventCard.jsx
      BusDepartureRow.jsx
  /data
    events.js             # Local events (Gunnarsbyn)
    busSchedule.js        # Bus times to Boden/Luleå
    weather.js            # Weather + aurora forecast
    news.js               # Local news + traffic
    tourism.js            # Outdoor activities
    contacts.js           # Important phone numbers
  App.jsx                 # Main app with routing
  main.jsx                # Entry point
  index.css               # Tailwind config + custom theme
```

## Design Requirements

### Accessibility (WCAG 2.1 AA)
- Minimum 24pt body text, 36pt headings
- Contrast ratio 7:1 minimum
- Touch targets minimum 48x48px
- Readable from 2 meters distance

### Color Scheme
- Primary (Erik): Blue #1A5276 / #2980B9
- Secondary (Gunnel): Purple #6C3483 / #9B59B6
- Success/Next: Green #27AE60
- Warning/Delay: Orange #E67E22
- Background: Slate gradients

## Implemented Screens
1. **Home Screen** - Navigation grid + quick info sidebar (bus, events)
2. **Events List** - Filterable event cards (markets, sports, culture)
3. **Event Detail** - Full event info + QR code
4. **Bus Schedule** - Departures with NEXT badge + delay info
5. **Weather** - Temperature, aurora forecast, sun times, warnings
6. **News** - Local news with severity indicators (urgent, warning, info)
7. **Tourism** - Outdoor activities, attractions, aurora viewing spots
8. **Contacts** - Emergency numbers, healthcare, municipality, local

## Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
```

## Git Repository
https://github.com/Jonkebronk/low-fidelity-prototyp

## Important Notes
- Every design decision traces back to persona needs
- Sidebar on home screen enables passive viewing (Gunnel's preference)
- Source attribution in footer builds trust (Erik's concern)
- "NÄSTA" badge on bus schedule is critical for Gunnel's use case
- Aurora forecast included - important for winter tourism in Norrbotten
- All mock data is localized for Gunnarsbyn area

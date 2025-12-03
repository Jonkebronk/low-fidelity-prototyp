# CLAUDE.md - Project Instructions

## Project Overview
This is a UX Design project for course I0004E at Luleå University of Technology. The goal is to create a **digital information screen prototype** for rural communities in Norrbotten, Sweden.

## Tech Stack
- **Framework**: React 18+ with Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: UI in Swedish, code comments in English

## Project Structure
```
/src
  /components
    /screens        # Individual screen components
    /ui             # Reusable UI components
    /personas       # Persona display components
  /data
    personas.js     # Persona data
    events.js       # Mock event data
    busSchedule.js  # Mock bus data
  App.jsx           # Main app with routing
  main.jsx          # Entry point
/docs
  PERSONAS.md       # Detailed persona descriptions
  USE-CASES.md      # Use case specifications
  REQUIREMENTS.md   # Volere requirements
  IXD-PROCESS.md    # Design process documentation
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

## Key Screens to Build
1. **Home Screen** - Navigation grid + quick info sidebar
2. **Events List** - Filterable event cards
3. **Event Detail** - Full event info + QR code
4. **Bus Schedule** - Real-time departures with highlighting

## Commands
```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
```

## Important Notes
- Every design decision must trace back to persona needs
- Sidebar on home screen enables passive viewing (Gunnel's preference)
- Source attribution in footer builds trust (Erik's concern)
- "NEXT" badge on bus schedule is critical for Gunnel's use case

import { useState } from 'react';
import HomeScreen from './components/screens/HomeScreen';
import EventsListScreen from './components/screens/EventsListScreen';
import EventDetailScreen from './components/screens/EventDetailScreen';
import BusScheduleScreen from './components/screens/BusScheduleScreen';
import WeatherScreen from './components/screens/WeatherScreen';
import NewsScreen from './components/screens/NewsScreen';
import TourismScreen from './components/screens/TourismScreen';
import ContactsScreen from './components/screens/ContactsScreen';

// Main application with simple state-based routing
// No complex router needed for this kiosk-style prototype
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Navigation handler
  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  // Go back to home
  const handleGoHome = () => {
    setCurrentScreen('home');
    setSelectedEvent(null);
  };

  // Go back to events list
  const handleGoToEvents = () => {
    setCurrentScreen('events');
    setSelectedEvent(null);
  };

  // Select an event and show detail
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setCurrentScreen('eventDetail');
  };

  // Render current screen based on state
  const renderScreen = () => {
    switch (currentScreen) {
      case 'events':
        return (
          <EventsListScreen
            onBack={handleGoHome}
            onSelectEvent={handleSelectEvent}
          />
        );

      case 'eventDetail':
        return (
          <EventDetailScreen
            event={selectedEvent}
            onBack={handleGoToEvents}
          />
        );

      case 'bus':
        return (
          <BusScheduleScreen
            onBack={handleGoHome}
          />
        );

      case 'weather':
        return (
          <WeatherScreen
            onBack={handleGoHome}
          />
        );

      case 'news':
        return (
          <NewsScreen
            onBack={handleGoHome}
          />
        );

      case 'tourism':
        return (
          <TourismScreen
            onBack={handleGoHome}
          />
        );

      case 'contacts':
        return (
          <ContactsScreen
            onBack={handleGoHome}
          />
        );

      case 'home':
      default:
        return (
          <HomeScreen
            onNavigate={handleNavigate}
          />
        );
    }
  };

  return (
    <div className="min-h-screen">
      {renderScreen()}
    </div>
  );
}

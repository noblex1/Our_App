import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    // Mark as read when opened
    if (!showNotifications && notifications.length > 0) {
      window.localStorage.setItem('lastReadNotifications', new Date().toISOString());
    }
  };

  // Add demo notifications on initial load if none exist
  useEffect(() => {
    const storedNotifications = window.localStorage.getItem('notifications');
    if (!storedNotifications || JSON.parse(storedNotifications).length === 0) {
      const demoNotifications = [
        "Welcome to the CS Department website!",
        "New course registration opens next week",
        "Faculty office hours updated for this semester"
      ];
      window.localStorage.setItem('notifications', JSON.stringify(demoNotifications));
    }
  }, []);

  // Check for notifications from localStorage
  useEffect(() => {
    const checkForNotifications = () => {
      const storedNotifications = window.localStorage.getItem('notifications');
      if (storedNotifications) {
        setNotifications(JSON.parse(storedNotifications));
      }
    };
    
    // Initial check
    checkForNotifications();
    
    // Set up interval to check periodically
    const intervalId = setInterval(checkForNotifications, 5000);
    
    // Clean up
    return () => clearInterval(intervalId);
  }, []);

  // Count unread notifications
  const unreadCount = notifications.length;

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="CS Department Logo"
            className="h-12 w-12"
          />
          <span className="text-2xl font-bold">CS Department, UDS</span> {/* Updated text */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
          <Link to="/courses" className="hover:text-blue-300 transition-colors">Courses</Link>
          <Link to="/faculty" className="hover:text-blue-300 transition-colors">Faculty</Link>
          <Link to="/news" className="hover:text-blue-300 transition-colors">News</Link>
          <Link to="/events" className="hover:text-blue-300 transition-colors">Events</Link>
          <Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
        </nav>

        {/* Notification Bell */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="text-white relative"
              onClick={toggleNotifications}
            >
              <Bell className="h-6 w-6" />
              {unreadCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-600 text-white">
                  {unreadCount}
                </Badge>
              )}
            </Button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white text-black rounded-md shadow-lg z-50">
                <div className="p-3 border-b">
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length > 0 ? (
                    notifications.map((notification, i) => (
                      <div key={i} className="p-3 border-b hover:bg-gray-100 cursor-pointer">
                        <p>{notification}</p>
                        <span className="text-xs text-gray-500">Just now</span>
                      </div>
                    ))
                  ) : (
                    <div className="p-3 text-center text-gray-500">No notifications</div>
                  )}
                </div>
                {notifications.length > 0 && (
                  <div className="p-2 text-center border-t">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setNotifications([]);
                        window.localStorage.removeItem('notifications');
                      }}
                    >
                      Clear all
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <Link to="/" className="hover:text-blue-300 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/courses" className="hover:text-blue-300 transition-colors" onClick={toggleMenu}>Courses</Link>
            <Link to="/faculty" className="hover:text-blue-300 transition-colors" onClick={toggleMenu}>Faculty</Link>
            <Link to="/news" className="hover:text-blue-300 transition-colors" onClick={toggleMenu}>News</Link>
            <Link to="/events" className="hover:text-blue-300 transition-colors" onClick={toggleMenu}>Events</Link>
            <Link to="/contact" className="hover:text-blue-300 transition-colors" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

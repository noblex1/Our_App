
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Book, Bell, User } from 'lucide-react';
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
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Book className="h-6 w-6" />
            <span className="text-xl font-bold">CS Department, UDS</span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/courses" className="hover:text-accent transition-colors">Courses</Link>
            <Link to="/faculty" className="hover:text-accent transition-colors">Faculty</Link>
            <Link to="/news" className="hover:text-accent transition-colors">News</Link>
            <Link to="/events" className="hover:text-accent transition-colors">Events</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </nav>

          {/* Notification Bell */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-primary-foreground relative"
                onClick={toggleNotifications}
              >
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-destructive text-destructive-foreground">
                    {unreadCount}
                  </Badge>
                )}
              </Button>
              
              {/* Notification Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white text-foreground rounded-md shadow-lg z-50">
                  <div className="p-3 border-b">
                    <h3 className="font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notification, i) => (
                        <div key={i} className="p-3 border-b hover:bg-muted cursor-pointer">
                          <p>{notification}</p>
                          <span className="text-xs text-muted-foreground">Just now</span>
                        </div>
                      ))
                    ) : (
                      <div className="p-3 text-center text-muted-foreground">
                        No notifications
                      </div>
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
              className="md:hidden text-primary-foreground"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-accent transition-colors py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/courses" className="hover:text-accent transition-colors py-2" onClick={toggleMenu}>Courses</Link>
              <Link to="/faculty" className="hover:text-accent transition-colors py-2" onClick={toggleMenu}>Faculty</Link>
              <Link to="/news" className="hover:text-accent transition-colors py-2" onClick={toggleMenu}>News</Link>
              <Link to="/events" className="hover:text-accent transition-colors py-2" onClick={toggleMenu}>Events</Link>
              <Link to="/contact" className="hover:text-accent transition-colors py-2" onClick={toggleMenu}>Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

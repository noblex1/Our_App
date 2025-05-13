import React, { useState, useEffect } from 'react';
import UniversityLogo from './p1.jpg';
import CSDeptLogo from './p4.jpg';
import { Bell } from 'lucide-react'; // Assuming you're using Lucide icons
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [notifications, setNotifications] = useState<number>(3); // Initial notification count
  const [showNotifications, setShowNotifications] = useState<boolean>(false); // Toggle notification dropdown
  const [notificationList, setNotificationList] = useState<string[]>([]); // List of notifications

  useEffect(() => {
    // Simulate real-time notifications with random messages
    const messages = [
      "New course added: Advanced AI",
      "Faculty meeting scheduled for 3 PM",
      "Event: Hackathon starts tomorrow!",
      "Reminder: Submit your assignments",
      "New research paper published by Dr. Smith",
    ];

    const interval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      const newNotification = `${randomMessage} at ${new Date().toLocaleTimeString()}`;
      setNotificationList((prev) => [newNotification, ...prev]); // Add new notification to the list
      setNotifications((prev) => prev + 1); // Increment notification count
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleNotificationClick = () => {
    setShowNotifications((prev) => !prev); // Toggle the dropdown
    setNotifications(0); // Reset notification count when clicked
  };

  return (
    <div>
      {/* Header Section */}
      <header className="flex items-center justify-between bg-primary text-white p-4">
        {/* Left Section: Logos */}
        <div className="flex items-center space-x-4">
          <img src={UniversityLogo} alt="University Logo" className="h-10 w-auto" />
          <img src={CSDeptLogo} alt="CS Department Logo" className="h-10 w-auto" />
          <span className="text-lg font-bold">CS Department</span>
        </div>

        {/* Center Section: Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/faculty" className="hover:underline">Faculty</a></li>
            <li><a href="/news" className="hover:underline">News</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>

        {/* Right Section: Notification Icon */}
        <div className="relative">
          <button onClick={handleNotificationClick} className="relative">
            <Bell className="h-6 w-6" />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {notifications}
              </span>
            )}
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Notifications</h3>
              {notificationList.length > 0 ? (
                <ul className="space-y-2">
                  {notificationList.map((notification, index) => (
                    <li key={index} className="text-sm border-b pb-2">
                      {notification}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm">No new notifications</p>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Layout;

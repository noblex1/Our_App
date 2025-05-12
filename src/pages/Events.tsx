
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Events = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // Sample events data - this would typically come from an API
  const events = [
    {
      id: "event1",
      title: "Guest Lecture: The Future of AI",
      date: "May 15, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Science Building, Room 305",
      description: "Join us for a guest lecture by Dr. Emily Zhao from Tech Innovations Inc. She will discuss the latest developments in artificial intelligence and their implications for society."
    },
    {
      id: "event2",
      title: "Senior Project Showcase",
      date: "May 20, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Computer Science Building, Main Hall",
      description: "Our graduating seniors will present their capstone projects. This is a great opportunity to see the innovative work of our students and network with industry partners."
    },
    {
      id: "event3",
      title: "Workshop: Introduction to Blockchain",
      date: "May 25, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Science Building, Room 310",
      description: "This hands-on workshop will cover the basics of blockchain technology and guide participants through building a simple blockchain application. Bring your laptop!"
    },
    {
      id: "event4",
      title: "Research Symposium",
      date: "June 5, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "University Conference Center",
      description: "Annual research symposium featuring presentations from faculty and graduate students on their current research projects in computer science and related fields."
    },
    {
      id: "event5",
      title: "Career Fair: Tech Edition",
      date: "June 10, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "University Gymnasium",
      description: "Connect with potential employers from leading tech companies. Bring your resume and be prepared for on-the-spot interviews. Professional attire recommended."
    }
  ];

  return (
    <Layout>
      <SectionHeading 
        title="Events Calendar" 
        subtitle="Stay updated with upcoming events, lectures, workshops, and other activities" 
      />
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5" />
              Calendar
            </h3>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            
            <div className="mt-4 pt-4 border-t">
              <h4 className="font-medium mb-2">
                {date ? format(date, "MMMM d, yyyy") : "Select a date"}
              </h4>
              <p className="text-sm text-muted-foreground">
                {date ? "No events scheduled for this date" : "Click on a date to see events"}
              </p>
            </div>
          </Card>
          
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">Notifications</h3>
            <Card>
              <p className="text-sm mb-4">
                Sign up to receive notifications about upcoming events
              </p>
              <div className="space-y-2">
                <Button className="w-full">Enable Notifications</Button>
                <Button variant="outline" className="w-full">Add to Calendar</Button>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {events.map((event) => (
              <Card key={event.id}>
                <h3 className="text-xl font-bold">{event.title}</h3>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-3">
                  <div className="flex items-center text-sm">
                    <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="mt-4 text-muted-foreground">{event.description}</p>
                
                <div className="mt-4 flex gap-4">
                  <Button size="sm">Register</Button>
                  <Button variant="outline" size="sm">Add to Calendar</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;

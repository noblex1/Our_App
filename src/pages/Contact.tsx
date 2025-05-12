
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from '@/components/ui/select';
import { Mail, Phone, MapPin, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const addNotification = (message: string) => {
    // Get existing notifications or initialize empty array
    const existingNotifications = JSON.parse(localStorage.getItem('notifications') || '[]');
    
    // Add new notification to the beginning
    const updatedNotifications = [message, ...existingNotifications];
    
    // Store in localStorage (limited to 10 recent notifications)
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications.slice(0, 10)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      // Display toast
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll respond as soon as possible.",
      });
      
      // Add notification
      addNotification(`New message from ${formData.name} about "${formData.subject}"`);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <SectionHeading 
        title="Contact Us" 
        subtitle="Get in touch with the Computer Science Department" 
      />
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={formData.category} onValueChange={handleSelectChange} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="admissions">Admissions</SelectItem>
                  <SelectItem value="courses">Courses & Curriculum</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="research">Research Opportunities</SelectItem>
                  <SelectItem value="technical">Technical Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Message subject"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                required
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6">Department Information</h3>
          
          <div className="space-y-8">
            <div className="flex">
              <div className="mr-4 bg-primary rounded-full p-3 text-primary-foreground">
                <Building className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Department Address</h4>
                <p className="text-muted-foreground">
                  Computer Science Department<br />
                  Science Building, Room 301<br />
                  University Campus<br />
                  Cityville, ST 12345
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 bg-primary rounded-full p-3 text-primary-foreground">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-muted-foreground">General: cs@university.edu</p>
                <p className="text-muted-foreground">Admissions: cs-admissions@university.edu</p>
                <p className="text-muted-foreground">Technical Support: cs-support@university.edu</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 bg-primary rounded-full p-3 text-primary-foreground">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-muted-foreground">Main Office: (123) 456-7890</p>
                <p className="text-muted-foreground">Student Services: (123) 456-7891</p>
                <p className="text-muted-foreground">Fax: (123) 456-7892</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 bg-primary rounded-full p-3 text-primary-foreground">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Office Hours</h4>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          {/* Google Maps placeholder */}
          <div className="mt-8 bg-muted h-64 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Interactive map would be displayed here</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

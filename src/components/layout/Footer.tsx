import React from 'react';
import { Book } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Book className="h-6 w-6" />
              <span className="text-xl font-bold">CS Department</span>
            </Link>
            <p className="mt-4 text-sm">
              Providing quality education in Computer Science and fostering innovation through research and collaboration.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">Courses</Link></li>
              <li><Link to="/faculty" className="hover:text-accent transition-colors">Faculty</Link></li>
              <li><Link to="/news" className="hover:text-accent transition-colors">News</Link></li>
              <li><Link to="/events" className="hover:text-accent transition-colors">Events</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Computer Science Department</li>
              <li>Science Building, Room 301</li>
              <li>Email: <a href="mailto:cs@university.edu" className="hover:text-accent transition-colors">cs@university.edu</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-accent transition-colors">(123) 456-7890</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-4 text-sm text-center">
          <p>&copy; {currentYear} Computer Science Department. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

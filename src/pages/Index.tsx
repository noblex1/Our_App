
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Book, Users, Newspaper, Calendar, Download, MessageSquare } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-accent rounded-lg mb-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 font-heading">
            Computer Science Department
          </h1>
          <p className="text-lg md:text-xl text-foreground mb-8">
            Providing quality education and fostering innovation through research and collaboration.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/courses">View Courses</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Department Overview */}
      <section className="mb-16">
        <SectionHeading 
          title="Department Overview" 
          subtitle="Learn about our mission, vision, and values in computer science education and research" 
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              The Computer Science Department is dedicated to excellence in teaching, research, and service. We prepare students 
              for successful careers in computer science and related fields through a comprehensive curriculum that 
              combines theoretical foundations with practical skills.
            </p>
            <p className="text-muted-foreground mt-4">
              We maintain a supportive learning environment that encourages critical thinking, creativity, 
              and collaboration. Our faculty members are committed to advancing knowledge through innovative research 
              and professional engagement.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 bg-primary rounded-full p-1 text-primary-foreground">
                  <Book className="h-4 w-4" />
                </div>
                <span>Offering 25+ specialized courses in Computer Science</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 bg-primary rounded-full p-1 text-primary-foreground">
                  <Users className="h-4 w-4" />
                </div>
                <span>15+ faculty members with extensive industry experience</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 bg-primary rounded-full p-1 text-primary-foreground">
                  <Calendar className="h-4 w-4" />
                </div>
                <span>Regular workshops, seminars, and industry events</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 bg-primary rounded-full p-1 text-primary-foreground">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <span>Strong alumni network in leading tech companies</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="mb-16">
        <SectionHeading 
          title="Explore Our Department" 
          subtitle="Discover what our Computer Science Department has to offer" 
        />
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/courses">
            <Card className="h-full hover:border-primary cursor-pointer">
              <Book className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Courses</h3>
              <p className="text-muted-foreground">
                Explore our comprehensive range of computer science courses designed to build your skills and knowledge.
              </p>
            </Card>
          </Link>
          
          <Link to="/faculty">
            <Card className="h-full hover:border-primary cursor-pointer">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Faculty</h3>
              <p className="text-muted-foreground">
                Meet our experienced faculty members who are leaders in research and education.
              </p>
            </Card>
          </Link>
          
          <Link to="/news">
            <Card className="h-full hover:border-primary cursor-pointer">
              <Newspaper className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Latest News</h3>
              <p className="text-muted-foreground">
                Stay updated with department announcements, achievements, and upcoming events.
              </p>
            </Card>
          </Link>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="mb-16">
        <SectionHeading 
          title="Latest News" 
          subtitle="Stay updated with the latest announcements from our department" 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "New Machine Learning Lab Opening",
              date: "May 8, 2025",
              excerpt: "We're excited to announce the opening of our state-of-the-art Machine Learning Laboratory."
            },
            {
              title: "Research Grant for AI Ethics Project",
              date: "May 5, 2025",
              excerpt: "Our department has been awarded a significant research grant to study ethical implications of AI."
            },
            {
              title: "Summer Internship Opportunities",
              date: "May 1, 2025",
              excerpt: "Several tech companies are offering exclusive summer internships for our students."
            }
          ].map((news, index) => (
            <Card key={index}>
              <p className="text-sm text-muted-foreground mb-2">{news.date}</p>
              <h3 className="text-xl font-bold mb-2">{news.title}</h3>
              <p className="text-muted-foreground mb-4">{news.excerpt}</p>
              <Link to="/news" className="text-primary hover:underline inline-block">
                Read more
              </Link>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/news">View All News</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          We're here to help! Contact our department for information about courses, 
          admission requirements, or any other inquiries you may have.
        </p>
        <Button asChild variant="secondary" size="lg">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </section>
    </Layout>
  );
};

export default Index;

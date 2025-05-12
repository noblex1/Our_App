
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const News = () => {
  // Sample news data - this would typically come from an API
  const news = [
    {
      id: "news1",
      title: "New Machine Learning Lab Opening",
      date: "May 8, 2025",
      category: "Announcements",
      content: "We're excited to announce the opening of our state-of-the-art Machine Learning Laboratory. The lab features high-performance computing resources and specialized equipment for deep learning research. Students and faculty will have access to the latest tools and technologies for machine learning projects. The lab will officially open next week with a ribbon-cutting ceremony attended by university leadership and industry partners. Special thanks to our donors who made this possible."
    },
    {
      id: "news2",
      title: "Research Grant for AI Ethics Project",
      date: "May 5, 2025",
      category: "Research",
      content: "Our department has been awarded a significant research grant to study ethical implications of AI. The three-year project led by Dr. Johnson will examine bias in machine learning algorithms and develop frameworks for responsible AI deployment. Graduate student positions will be available for those interested in joining this important research initiative. The project will collaborate with partners from philosophy, sociology, and law departments."
    },
    {
      id: "news3",
      title: "Summer Internship Opportunities",
      date: "May 1, 2025",
      category: "Opportunities",
      content: "Several tech companies are offering exclusive summer internships for our students. Applications are now open for positions in software development, data analysis, and cybersecurity. The internships provide valuable industry experience and many lead to full-time job offers. Interested students should attend the information session next Thursday or contact the departmental career advisor for more information."
    },
    {
      id: "news4",
      title: "Student Team Wins Hackathon",
      date: "April 25, 2025",
      category: "Achievements",
      content: "Congratulations to our student team who won first place at the Regional Coding Hackathon. Their project, a sustainable transportation app, impressed judges with its innovation and technical execution. Team members include Jennifer Lopez, Michael Smith, and David Chen, all junior CS majors. The team will advance to the national competition next month in Chicago."
    },
    {
      id: "news5",
      title: "New Course on Quantum Computing",
      date: "April 20, 2025",
      category: "Announcements",
      content: "Starting Fall 2025, we will offer a new course on Quantum Computing Fundamentals. The course will cover quantum algorithms, quantum information theory, and practical implementations. Prerequisites include Linear Algebra and Introduction to Computer Science. Registration will open during the regular course selection period in August."
    }
  ];

  return (
    <Layout>
      <SectionHeading 
        title="News & Announcements" 
        subtitle="Stay updated with the latest news, events, and opportunities from our department" 
      />
      
      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All News</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6 space-y-6">
          {news.map((item) => (
            <Card key={item.id}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="flex gap-3 text-sm">
                  <span className="text-muted-foreground">{item.date}</span>
                  <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded">{item.category}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{item.content}</p>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="announcements" className="mt-6 space-y-6">
          {news.filter(item => item.category === "Announcements").map((item) => (
            <Card key={item.id}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="flex gap-3 text-sm">
                  <span className="text-muted-foreground">{item.date}</span>
                  <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded">{item.category}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{item.content}</p>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="research" className="mt-6 space-y-6">
          {news.filter(item => item.category === "Research").map((item) => (
            <Card key={item.id}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="flex gap-3 text-sm">
                  <span className="text-muted-foreground">{item.date}</span>
                  <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded">{item.category}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{item.content}</p>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="opportunities" className="mt-6 space-y-6">
          {news.filter(item => item.category === "Opportunities").map((item) => (
            <Card key={item.id}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="flex gap-3 text-sm">
                  <span className="text-muted-foreground">{item.date}</span>
                  <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded">{item.category}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{item.content}</p>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="achievements" className="mt-6 space-y-6">
          {news.filter(item => item.category === "Achievements").map((item) => (
            <Card key={item.id}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="flex gap-3 text-sm">
                  <span className="text-muted-foreground">{item.date}</span>
                  <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded">{item.category}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{item.content}</p>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default News;

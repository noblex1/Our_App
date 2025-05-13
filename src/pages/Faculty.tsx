import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Mail } from 'lucide-react';

const Faculty = () => {
  // Sample faculty data - this would typically come from an API
  const faculty = [

    {
      id: "prof1",
      name: "Prof Ibrahim Yakubu Seini",
      title: "Faculty Dean of Students Affairs",
      specialization: "Mathematics, Physics",
      email: "ibrahimyakubuseini@uds.edu",
      office: "Faculty Building, Room 101",
      phone: "(233) 456-7891",
      officeHours: "Tuesday, Thursday: 1:00 PM - 3:00 PM",
      bio: "Prof. Seini is a distinguished professor with over 20 years of experience in mathematics and physics. He has received numerous awards for his research and teaching excellence, and he is passionate about mentoring students in their academic pursuits."
    },
        {
      id: "prof2",
      name: "Prof. ALHASSAN Abdul-Barik",
      title: "Head of Department",
      specialization: "Computational Mathematics, Economics",
      email: "alhassanabdulbarik@uds.edu",
      office: "Faculty Building, Room 202",
      phone: "(233) 456-7890",
      officeHours: "Monday, Wednesday: 2:00 PM - 4:00 PM",
      bio: "Prof. Abdul-Barik is a leading researcher in computational mathematics and its applications in economics. He has published numerous papers in top-tier journals and is a sought-after speaker at international conferences."
    },
    {
      id: "prof3",
      name: "Dr. Tandoh Lawrence",
      title: "Faculty Examination Officer",
      specialization: "Software Engineering, Human-Computer Interaction",
      email: "tandohlawrence@uds.edu",
      office: "Faculty Building, Room 312",
      phone: "(233) 456-7892",
      officeHours: "Monday, Friday: 11:00 AM - 1:00 PM",
      bio: "Dr. Lawrence is an expert in software engineering and human-computer interaction. He has worked on several high-profile projects and is known for his innovative approaches to software design and user experience."
    },
    {
      id: "prof4",
      name: "Dr. Alhassan Salamudeen",
      title: "DCROP Coordinator",
      specialization: "Algorithms, Theoretical Computer Science",
      email: "salamudeenalhassan@uds.edu",
      office: "Science Building, Room 307",
      phone: "(233) 456-7893",
      officeHours: "Wednesday, Friday: 10:00 AM - 12:00 PM",
      bio: "Dr. Salamudeen is known for his work in computational complexity theory. He has authored three textbooks on algorithms and data structures that are widely used in computer science curricula."
    }
  ];

  return (
    <Layout>
      <SectionHeading 
        title="Faculty Directory" 
        subtitle="Meet our dedicated faculty members who are leaders in research and education" 
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {faculty.map((member) => (
          <Card 
            key={member.id} 
            className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-lg"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="text-2xl bg-gray-200 text-gray-600">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-primary font-medium">{member.title}</p>
                <p className="text-gray-600 mt-1">{member.specialization}</p>
                
                <div className="mt-4 space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-gray-700">Email:</span>{" "}
                    <a 
                      href={`mailto:${member.email}`} 
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      <Mail className="h-4 w-4" />
                      {member.email}
                    </a>
                  </p>
                  <p><span className="font-semibold text-gray-700">Office:</span> {member.office}</p>
                  <p><span className="font-semibold text-gray-700">Phone:</span> {member.phone}</p>
                  <p><span className="font-semibold text-gray-700">Office Hours:</span> {member.officeHours}</p>
                </div>
                
                <p className="mt-4 text-gray-500 text-sm line-clamp-3">{member.bio}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Faculty;

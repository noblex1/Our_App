import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Courses = () => {
  // Sample course data - this would typically come from an API
  const courses = [
    {
      id: "csc101",
      code: "CSC 101",
      name: "Introduction to Computer Science",
      credits: 3,
      description: "An introduction to the fundamental concepts of computer science. Topics include data types, control structures, functions, arrays, files, and the mechanics of running, testing, and debugging.",
      prerequisites: "None"
    },
    {
      id: "csc201",
      code: "CSC 201",
      name: "Data Structures",
      credits: 4,
      description: "Study of common data structures including linked lists, stacks, queues, hash tables, trees, and graphs. Implementation of these structures and basic algorithms for manipulating them.",
      prerequisites: "CSC 101"
    },
    {
      id: "csc305",
      code: "CSC 305",
      name: "Database Systems",
      credits: 3,
      description: "Introduction to database systems concepts and architecture. Topics include data modeling, relational algebra, SQL, database design, and transaction processing.",
      prerequisites: "CSC 201"
    },
    {
      id: "csc306",
      code: "CSC 306",
      name: "Mobile Device Programming",
      credits: 3,
      description: "Principles and practice of developing applications for mobile devices. Topics include user interfaces, data storage, networking, sensors, and deployment.",
      prerequisites: "CSC 201"
    },
    {
      id: "csc401",
      code: "CSC 401",
      name: "Artificial Intelligence",
      credits: 3,
      description: "Introduction to the concepts and techniques of artificial intelligence. Topics include search, knowledge representation, machine learning, and natural language processing.",
      prerequisites: "CSC 201"
    },
    {
      id: "csc405",
      code: "CSC 405",
      name: "Computer Networks",
      credits: 3,
      description: "Principles and practice of computer networking. Topics include network architecture, protocols, routing, congestion control, and network security.",
      prerequisites: "CSC 201"
    },
    {
      id: "csc410",
      code: "CSC 410",
      name: "Operating Systems",
      credits: 4,
      description: "Study of operating system concepts including process management, memory management, file systems, and concurrency.",
      prerequisites: "CSC 201"
    },
    {
      id: "csc415",
      code: "CSC 415",
      name: "Software Engineering",
      credits: 3,
      description: "Introduction to software development methodologies, project management, and software design principles.",
      prerequisites: "CSC 201"
    },
    {
      id: "csc420",
      code: "CSC 420",
      name: "Web Development",
      credits: 3,
      description: "Principles and practice of web application development. Topics include HTML, CSS, JavaScript, and modern web frameworks.",
      prerequisites: "CSC 201"
    },
    {
      id: "csc425",
      code: "CSC 425",
      name: "Cybersecurity",
      credits: 3,
      description: "Introduction to cybersecurity principles and practices. Topics include cryptography, network security, and risk management.",
      prerequisites: "CSC 201"
    },
    {
      id: "csc430",
      code: "CSC 430",
      name: "Cloud Computing",
      credits: 3,
      description: "Study of cloud computing concepts, architectures, and services. Topics include virtualization, cloud storage, and distributed systems.",
      prerequisites: "CSC 201"
    },
    {
      id: "csc435",
      code: "CSC 435",
      name: "Machine Learning",
      credits: 3,
      description: "Introduction to machine learning algorithms and techniques. Topics include supervised learning, unsupervised learning, and neural networks.",
      prerequisites: "CSC 401"
    },
    {
      id: "csc440",
      code: "CSC 440",
      name: "Human-Computer Interaction",
      credits: 3,
      description: "Study of user interface design and evaluation. Topics include usability principles, prototyping, and user experience.",
      prerequisites: "CSC 201"
    },
    {
      id: "csc445",
      code: "CSC 445",
      name: "Game Development",
      credits: 3,
      description: "Introduction to game development concepts and tools. Topics include game design, graphics, physics, and AI in games.",
      prerequisites: "CSC 201"
    },
    {
      id: "csc450",
      code: "CSC 450",
      name: "Big Data Analytics",
      credits: 3,
      description: "Study of big data technologies and analytics. Topics include Hadoop, Spark, and data visualization.",
      prerequisites: "CSC 305"
    }
  ];

  return (
    <Layout>
      <SectionHeading 
        title="Courses" 
        subtitle="Explore our comprehensive range of computer science courses designed to build your skills and knowledge" 
      />
      
      {/* Timetable Download */}
      <div className="bg-accent p-6 rounded-lg mb-8 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">Course Timetable</h3>
          <p className="text-muted-foreground">Download the complete course schedule for the current semester</p>
        </div>
        <a href="/path/to/timetable.pdf" download className="mt-4 sm:mt-0">
          <Button size="lg">
            <Download className="mr-2 h-4 w-4" /> Download Timetable
          </Button>
        </a>
      </div>

      {/* Department Timetable */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Department Timetable</h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-primary text-white">
                <th className="border border-gray-300 px-4 py-2">Day</th>
                <th className="border border-gray-300 px-4 py-2">9:00 AM - 11:00 AM</th>
                <th className="border border-gray-300 px-4 py-2">11:00 AM - 1:00 PM</th>
                <th className="border border-gray-300 px-4 py-2">2:00 PM - 4:00 PM</th>
                <th className="border border-gray-300 px-4 py-2">4:00 PM - 6:00 PM</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Monday</td>
                <td className="border border-gray-300 px-4 py-2">Algorithms (Room 101)</td>
                <td className="border border-gray-300 px-4 py-2">Data Structures (Room 102)</td>
                <td className="border border-gray-300 px-4 py-2">Software Engineering (Room 103)</td>
                <td className="border border-gray-300 px-4 py-2">Research Seminar (Room 104)</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Tuesday</td>
                <td className="border border-gray-300 px-4 py-2">Mathematics (Room 201)</td>
                <td className="border border-gray-300 px-4 py-2">Physics (Room 202)</td>
                <td className="border border-gray-300 px-4 py-2">AI & ML (Room 203)</td>
                <td className="border border-gray-300 px-4 py-2">Database Systems (Room 204)</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Wednesday</td>
                <td className="border border-gray-300 px-4 py-2">Operating Systems (Room 301)</td>
                <td className="border border-gray-300 px-4 py-2">Networking (Room 302)</td>
                <td className="border border-gray-300 px-4 py-2">Cybersecurity (Room 303)</td>
                <td className="border border-gray-300 px-4 py-2">Web Development (Room 304)</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Thursday</td>
                <td className="border border-gray-300 px-4 py-2">Human-Computer Interaction (Room 401)</td>
                <td className="border border-gray-300 px-4 py-2">Cloud Computing (Room 402)</td>
                <td className="border border-gray-300 px-4 py-2">Mobile Development (Room 403)</td>
                <td className="border border-gray-300 px-4 py-2">Ethics in Computing (Room 404)</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 font-semibold">Friday</td>
                <td className="border border-gray-300 px-4 py-2">Capstone Project (Room 501)</td>
                <td className="border border-gray-300 px-4 py-2">Machine Learning (Room 502)</td>
                <td className="border border-gray-300 px-4 py-2">Big Data (Room 503)</td>
                <td className="border border-gray-300 px-4 py-2">Faculty Meeting (Room 504)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Course Filters */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Filter Courses</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline">All Courses</Button>
          <Button variant="outline">Introductory</Button>
          <Button variant="outline">Intermediate</Button>
          <Button variant="outline">Advanced</Button>
        </div>
      </div>

      {/* Course Listings */}
      <div className="space-y-6">
        {courses.map((course) => (
          <Card key={course.id} className="relative">
            <div className="absolute top-6 right-6 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
              {course.credits} Credits
            </div>
            <h3 className="text-xl font-bold">{course.code}: {course.name}</h3>
            <p className="mt-2 text-muted-foreground">{course.description}</p>
            <div className="mt-4 text-sm">
              <span className="font-semibold">Prerequisites:</span> {course.prerequisites}
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Courses;

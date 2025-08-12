import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, Eye, X } from 'lucide-react';
import TeamModal from './modal/teams';

const teamMembers = [
  {
    name: "Avhisek Shaw",
    image: "./images/avishek.jpg",
    languages: ["Java", "C", "Python", "SQL", "JavaScript"],
    frameworks: ["React.js", "Next (Started)", "Spring Boot", "Express (TS)"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    librariesTools: ["NumPy", "Pandas", "Scikit-learn"],
    versionControl: ["Git", "GitHub"],
    platform: "VS Code",
    degree: "B.Tech in CSE (AIML)",
    college: "MSIT",
    expertise: ["Web Development ", " Machine Learning"],
    projects: ["DMS", "School Management App", "WishAlpha (Under Progress)", "Multiple Games"],
    joined: "Jan 2022",
    connectedSince: "Very Beginning"
  },
  {
    name: "Dipika Mandal",
    image: "./images/dipika.jpg",
    languages: ["Java", "C", "Python", "SQL", "JavaScript"],
    frameworks: ["React.js", "Next (Started)", "Spring Boot", "Express"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    librariesTools: ["NumPy", "Pandas", "Scikit-learn"],
    versionControl: ["Git", "GitHub"],
    platform: "VS Code",
    degree: "B.Tech in CSE (AIML)",
    college: "MSIT",
    expertise: "Web Development",
    projects: ["Chit Chat (Chatting Site)", "WishAlpha (Under Progress)", "Multiple Games"],
    joined: "2019",
    connectedSince: "Starting"
  },
  {
    name: "Sonu Kumar Shaw",
    image: "./images/sonu.jpg",
    languages: ["Java", "C", "C++", "Python", "SQL", "JavaScript", "TypeScript"],
    frameworks: ["React.js", "Next (Started)", "Spring Boot", "Express (TS)"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    librariesTools: ["NumPy"],
    versionControl: ["Git", "GitHub"],
    platform: "VS Code",
    degree: "B.Tech in CSE",
    college: "TIU",
    expertise: "Web Development",
    projects: ["WishAlpha (Under Progress)", "Multiple Games (Minesweeper, Othello, Checkers)"],
    joined: "Jan 2024",
    connectedSince: "Very Beginning"
  },
  {
    name: "Soham Saha",
    image: "./images/soham.jpg",
    languages: ["Java", "C", "Python", "JavaScript"],
    frameworks: ["React.js", "Next (Started)", "Spring Boot", "Express (TS)"],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    librariesTools: ["Pandas", "Scikit-learn"],
    versionControl: ["Git", "GitHub"],
    platform: "VS Code",
    degree: "B.Tech in CSE",
    college: "SurTech",
    expertise: "Web Development",
    projects: ["DMS", "Library Management System (Under Progress)", "Multiple Games"],
    joined: "Mar 2024",
    connectedSince: "Very Beginning"
  },
  {
    name: "Krishanu Dey",
    image: "./images/krishanu.jpg",
    languages: ["C", "C++", "Python", "JavaScript", "R"],
    frameworks: ["React.js", "Next", "Express (TS) (Started)"],
    databases: ["MySQL"],
    versionControl: ["GitHub"],
    platform: "VS Code",
    degree: "BCA (H)",
    college: "Techno India University",
    expertise: "Web Development",
    projects: ["Jobsite", "Library Management System (In Progress)", "Multiple Games"],
    joined: "Nov 2023",
    connectedSince: "Very Beginning"
  },
  {
    name: "Sneha Ghoshal",
    image: "./images/sneha.jpg",
    languages: ["C", "C++", "Python", "SQL", "JavaScript", "R"],
    frameworks: ["React.js", "Next.js (Started)", "Express.js (TS)"],
    databases: ["MySQL", "MongoDB"],
    librariesTools: ["Figma", "Adobe Photoshop", "Blender"],
    versionControl: ["GitHub"],
    platform: "VS Code",
    degree: "BCA (H)",
    college: "Techno India University",
    expertise: ["Web Development", "Design"],
    projects: ["Jobsite (In Progress)", "POPO (In Progress)", "Biodata Maker", "Games (Minesweeper, Reversi, BlockBurst, ColorClash, Checkers)"],
    joined: "Aug 2021",
    connectedSince: "Since the Beginning"
  },
  {
    name: "Aryan Kumar Ray",
    image: "./images/aryan.jpg",
    languages: ["C++", "Java", "JavaScript"],
    frameworks: ["React"],
    versionControl: ["GitHub"],
    databases: [],
    platform: "VS Code",
    class: "11",
    school: "Calcutta Public School",
    expertise: "Web Development",
    projects: ["Games"],
    joined: "July 2022",
    connectedSince: "March 2025"
  },
  {
    name: "Shramana Show",
    image: "./images/shramana.jpg",
    languages: ["C", "Java", "Python", "JavaScript", "SQL"],
    frameworks: [
      "React.js (TS)",
      "Next.js (TS) (learning)",
      "Express.js (TS)",
      "Laravel (Eloquent ORM)",
      "Spring Boot (JPA)",
      "Django (SQLite ORM)",
      "React Native (learning)",
      "ASP .NET (learning)",
      "Pandas",
      "NumPy",
      "Scikit-learn (learning)"
    ],
    databases: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"],
    librariesTools: [
      "VS Code",
      "Spring Tool Suite",
      "Apache NetBeans",
      "Visual Studio",
      "Blender",
      "Figma",
      "Canva",
      "Jupyter Notebook",
      "Colab",
      "Postman"
    ],
    versionControl: ["GitHub"],
    platform: "Multiple (VSCode, Spring Tool Suite, Apache NetBeans, Visual Studio, etc.)",
    degree: "B.Tech in CSE",
    college: "SurTech",
    expertise: "Web Development",
    projects: [
      "Neighbourlink",
      "LegalLink",
      "BhooDrishti (in progress)",
      "DMS (in progress)",
      "BioCraft",
      "JobSite (in progress)",
      "Games (NumTrip, MineSweeper, Checkers, Othello)"
    ],
    joined: "July 2022",
    connectedSince: "Starting"
  },
  {
    name: "Priyanshu Chourasia",
    image: "./images/priyanshu.jpg",
    languages: ["JavaScript", "Java", "Python", "TypeScript", "C", "SQL"],
    frameworks: [
      "Next.js",
      "React.js",
      "Vue.js",
      "Bootstrap",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Laravel",
      "Spring Boot"
    ],
    databases: ["MySQL", "MongoDB", "PostgreSQL"],
    librariesTools: [
      "Postman",
      "Swagger UI",
      "Jest",
      "GitHub",
      "GitHub Actions",
      "Docker",
      "Redis",
      "Docker-Desktop",
      "Ubuntu",
      "Nginx",
      "VS Code",
      "Figma",
      "IntelliJ IDEA"
    ],
    versionControl: ["GitHub"],
    platform: "VS Code, IntelliJ IDEA, Ubuntu",
    degree: "B.Tech in Mechanical Engineering",
    college: "JIS College of Engineering, Kolkata",
    expertise: "Frontend Development",
    projects: [
      "Live tracking of IoT devices (running)",
      "Admin Panel & User Interactive Panel (running)"
    ],
    joined: "2023",
    connectedSince: "2 years",
    currentCompany: "Primesys Technologies, Pune",
    role: "Software Developer",
    experience: "2 years of development experience",
    github: "https://github.com/PriyanshuChourasia"
  }


];


const expertises = ["All", "Leadership", "Web Deployment", "Development", " Database handling", "Design"];

const Button = ({ children, className = "", variant = "default", size = "default", onClick, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-blue-600 text-gray-700 hover:bg-blue-700 focus:ring-blue-500",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-gray-500",
  };

  const sizes = {
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variantClasses = variants[variant] || variants.default;
  const sizeClasses = sizes[size] || sizes.default;

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};




export default function Teams() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpertise, setSelectedExpertise] = useState("All");

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const filteredMembers = selectedExpertise === "All"
    ? teamMembers
    : teamMembers.filter(member => member.expertise === selectedExpertise);

  return (
    <main className="min-h-screen bg-gray-900">

      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">

        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              animation: "backgroundMove 20s linear infinite"
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fadeInUp">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Our diverse team of gaming experts, engineers, and visionaries are dedicated to creating the future of
            interactive entertainment.
          </p>
        </div>
      </section>


      <section className="py-8 px-4 border-b border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {expertises.map((expertise, index) => (
              <button
                key={expertise}
                onClick={() => setSelectedExpertise(expertise)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${selectedExpertise === expertise
                    ? 'bg-blue-600 text-white border border-blue-500'
                    : 'bg-gray-800 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 hover:bg-gray-700'
                  }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {expertise}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className="group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />


                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-900">
                      {member.expertise}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.linkedin}
                      className="p-2 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.twitter}
                      className="p-2 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href={member.github}
                      className="p-2 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>


                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => openModal(member)}
                      className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full font-medium shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                    >
                      <Eye className="h-4 w-4 mr-2 inline" />
                      View Profile
                    </button>
                  </div>
                </div>


                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 cursor-pointer transition-transform duration-300 hover:translate-x-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-2">
                    {Array.isArray(member.expertise) ? member.expertise.join(", ") : member.expertise}
                  </p>
                  <div className="text-gray-300 text-sm mb-2">
                    <span>{member.degree || member.class}</span>
                    <span className="ml-2">{member.college || member.school}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {member.languages && member.languages.map((lang, idx) => (
                      <span key={idx} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-700 text-gray-300">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {member.frameworks && member.frameworks.map((fw, idx) => (
                      <span key={idx} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-700 text-gray-300">
                        {fw}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    {member.college || member.school}
                  </div>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    Joined {member.joined}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {member.projects && member.projects.slice(0, 2).map((proj, idx) => (
                      <span key={idx} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-700 text-gray-300">
                        {proj}
                      </span>
                    ))}
                    {member.projects && member.projects.length > 2 && (
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-700 text-gray-300">
                        +{member.projects.length - 2} more
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <Button
                        onClick={() => openModal(member)}
                        className="w-full bg-white text-gray-900 hover:bg-gray-100 font-medium hover:scale-105 transition-transform duration-200"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Profile
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent hover:scale-105 transition-transform duration-200"
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-6 text-white">Join Our Team</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for gaming and innovation. Explore
              career opportunities and help us shape the future of gaming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="hover:scale-105 transition-transform duration-200">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8">
                  View Open Positions
                </Button>
              </div>
              <div className="hover:scale-105 transition-transform duration-200">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 bg-transparent"
                >
                  Submit Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <TeamModal member={selectedMember} isOpen={isModalOpen} onClose={closeModal} />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes backgroundMove {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}
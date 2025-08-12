import React from "react";
import { Linkedin, Twitter, Github, Mail, MapPin, Calendar, X } from "lucide-react";

const TeamModal = ({ member, isOpen, onClose }) => {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">{member.name}</h2>
                  <p className="text-blue-400 font-medium mb-2">{Array.isArray(member.expertise) ? member.expertise.join(", ") : member.expertise}</p>
                  <div className="flex flex-col items-center space-y-1 mb-4">
                    <span className="text-gray-300 text-sm">{member.degree || member.class}</span>
                    <span className="text-gray-400 text-xs">{member.college || member.school}</span>
                  </div>
                  <div className="flex justify-center space-x-3 mb-4">
                    {member.linkedin && (
                      <a href={member.linkedin} className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">About</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 text-sm">
                    <div>
                      <span className="font-semibold">Joined:</span> {member.joined}
                    </div>
                    <div>
                      <span className="font-semibold">Connected Since:</span> {member.connectedSince}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(member.expertise)
                      ? member.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))
                      : <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">{member.expertise}</span>
                    }
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.languages && member.languages.map((lang, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">{lang}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.frameworks && member.frameworks.map((fw, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">{fw}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Databases</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.databases && member.databases.map((db, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">{db}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Libraries/Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.librariesTools && member.librariesTools.map((lib, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">{lib}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Version Control</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.versionControl && member.versionControl.map((vc, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">{vc}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Platform</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.platform && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">{member.platform}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Projects</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    {member.projects && member.projects.map((proj, idx) => (
                      <li key={idx}>{proj}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
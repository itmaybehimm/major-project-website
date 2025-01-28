import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
export default function TeamCard({ imageSrc, name, rollNo, githubLink, linkedinLink, facebookLink }) {
    return (
      <div className="work-canvas rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 bg-gray-800 min-h-[20rem] flex flex-col items-center">
        {/* Team member photo */}
        <div className="p-4">
          <img
            src={imageSrc}
            alt={name}
            className="w-32 h-32 rounded-full object-cover" // Circular image with proper aspect ratio
          />
        </div>
  
        {/* Team member details */}
        <div className="p-4 text-center flex-grow flex flex-col justify-between">
          <h3 className="text-lg font-bold text-white">{name || 'Name'}</h3>
          <p className="text-gray-400">Roll No: {rollNo || 'N/A'}</p>
  
          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-4 justify-center">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <FaGithub size={24} />
              </a>
          
        
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <FaLinkedin size={24} />
              </a>
            
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <FaFacebook size={24} />
              </a>
        
          </div>
        </div>
      </div>
    );
  }
  
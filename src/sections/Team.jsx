import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';
import TeamCard from '../components/TeamCard.jsx';

const Team = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20 " id="team">
      <div className="w-full text-white-600">
        <p className="head-text">Team</p>

        <div className="work-container">
          <div className='work-canvas'>
            <TeamCard 
              imageSrc="assets/team/himanshu.jpeg" 
              name="Himanshu Pradhan"
              rollNo="077BCT030"
              facebookLink=""
              githubLink=""
              linkedinLink=""
            />
          </div>
          <div className='work-canvas'>
            <TeamCard 
              imageSrc="assets/team/janam.jpg" 
              name="Janam Shrestha"
              rollNo="077BCT032"
              facebookLink=""
              githubLink=""
              linkedinLink=""
            />
          </div>
          <div className='work-canvas'>
            <TeamCard 
              imageSrc="assets/team/mejan.jpg" 
              name="Mejan Lamichhane"
              rollNo="077BCT047"
              facebookLink=""
              githubLink=""
              linkedinLink=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

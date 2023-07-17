import React from 'react';
import { background, subject } from '../assets/images';

const About = () => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="about-container p-40 px-14">
        <div className="about-text">
          <div className="cursive text-8xl">
            Registered Nurse.
            <br /> Licensed Aesthetician.
          </div>
          <div>
            <p>
              Taylor Northcott Aesthetics specializes in anti-aging and
              restorative treatments.Your journey begins with a custom
              consultation resulting in an anti-aging plan personalized for you.
            </p>{' '}
            <p className="mb-12">
              All treatments are performed by Taylor Northcott, who has spent
              countless hours perfecting her aesthetic treatments.
            </p>
            <input
              type="button"
              value="Learn More"
              className="bg-black text-white py-4 w-full text-lg text-center mb-12"
            />
          </div>
        </div>
        <div className="about_background py-10 mb-10">
          <img src={subject} className="about_front" />
        </div>
      </div>
    </div>
  );
};

export default About;

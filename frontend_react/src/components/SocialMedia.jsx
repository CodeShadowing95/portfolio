import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/frank-patrick-namegni/"><BsLinkedin /></a>
      </div>
      <div>
        <a href="https://github.com/CodeShadowing95"><BsGithub /></a>
      </div>
      <div>
        <FaFacebook />
      </div>
    </div>
  );
}

export default SocialMedia;

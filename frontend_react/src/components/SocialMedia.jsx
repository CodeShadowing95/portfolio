import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {

  const openLinkedinLink = () => (
    window.open('https://www.linkedin.com/in/frank-patrick-namegni/', '_blank')
  );

  const openGithubLink = () => (
    window.open('https://github.com/CodeShadowing95', '_blank')
  );

  return (
    <div className="app__social">
      <div onClick={openLinkedinLink}>
        <BsLinkedin />
      </div>
      <div onClick={openGithubLink}>
        <BsGithub />
      </div>
      <div>
        <FaFacebook />
      </div>
    </div>
  );
}

export default SocialMedia;

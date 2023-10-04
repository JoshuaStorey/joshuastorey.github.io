import React from 'react';
import Image from 'next/image';
interface project {
  id: number;
  name: string;
  description: string;
  skills: string[];
  github: string;
}
interface Props {
  projects: project[];
}
const Card = ({ projects }: Props) => {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className='max-w-sm rounded-xl overflow-hidden shadow-lg bg-main-color opacity-80 items-center text-center'
        >
          <div className='flex justify-center'>
            <Image
              className='flex justify-center items-center'
              width={256}
              height={256}
              src={`images/${project.id}.png`}
              alt='project-image'
            />
          </div>

          <div className='px-6 py-4 '>
            <div className='font-bold text-xl mb-2 '>{project.name}</div>
            <p className='text-gray-700 text-base'>{project.description}</p>
            <p className='text-gray-700 text-base font-bold pt-2'>
              <a href={project.github} className=''>
                View Source Code
              </a>
            </p>
          </div>
          <div className='px-6 pt-4 pb-6'>
            {project.skills.map((skill) => (
              <span
                key={Math.random()}
                className=' bg-cool-blue-color inline-block rounded-full px-3 py-1 text-sm font-semibold text-main-color mr-2 mb-2 '
              >
                {' '}
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

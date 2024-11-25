import React from 'react'
import Tool from './Tool'

export default function Section() {
    const tools = [
        {
          link: '/tools/stats',
          name: 'Stats',
          src: 'https://res.cloudinary.com/elrioslab/image/upload/v1732482911/files/Home/stats.webp',
          alt: 'Stats'
        },
        {
          link: '/tools/adaptation',
          name: 'Adaptation',
          src: 'https://res.cloudinary.com/elrioslab/image/upload/v1732482911/files/Home/adaptation.webp',
          alt: 'Adaptation'
        },
        {
          link: '/tools/reforge',
          name: 'Reforge',
          src: 'https://res.cloudinary.com/elrioslab/image/upload/v1732482911/files/Home/reforge.webp',
          alt: 'Reforge'
        },
        {
          link: '/tools/ignore-defense',
          name: 'Ignore Defense',
          src: 'https://res.cloudinary.com/elrioslab/image/upload/v1732482911/files/Home/ignore.webp',
          alt: 'Ignore Defense'
        },
        {
          link: '/tools/el-search-party-collection',
          name: 'Collection and synergy',
          src: 'https://res.cloudinary.com/elrioslab/image/upload/v1732482911/files/Home/el-search-party-collection.webp',
          alt: 'El search party collection'
        },
        {
          link: '/tools/experience',
          name: 'Experience',
          src: 'https://res.cloudinary.com/elrioslab/image/upload/v1732482907/files/Home/experience.webp',
          alt: 'Experience'
        }
      ];

    return (
        <div className="row justify-content-center text-center">
            {tools.map(tool => 
                <Tool 
                    key={tool.name} 
                    link={tool.link} 
                    name={tool.name} 
                    src={tool.src} 
                    alt={tool.alt} />
            )}
        </div>
    )
}
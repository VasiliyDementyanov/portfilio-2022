import { WorkPlace } from '../../types/WorkPlace';

export const workPlaces: WorkPlace[] = [
  {
    projectName: 'Additional software for call center',
    location: 'Saints-Petersburg, Russia',
    duration: '09/2020 - 09/2022',
    theses: [
      {
        name: 'Company:',
        descriptionLines: ['Software solutions']
      },
      {
        name: 'Position:',
        descriptionLines: ['Full Stack Developer']
      },
      {
        name: 'Description:',
        descriptionLines: [
          'Development of a corporate solution for assessing the quality of service for call center operators',
          `The software is a convinient environment, where you can listen (media player), read (transcribed text syncrinised with audio), evaluate operator's job and give him feedback`,
          'Helped other teams with their projects'
        ]
      },
      {
        name: 'Responsibilities:',
        descriptionLines: [
          'Communication with users',
          'Implementing new solutions on all development layers (front-end/back-end/deployment)',
          'Bug-fixing',
          'Deploying software to production environment'
        ]
      }
    ],
    technologies: [
      {
        name: 'Front-end:',
        descriptionLines: ['React (TypeScript), HTML, CSS (SCSS), Redux, React Router']
      },
      {
        name: 'Back-end:',
        descriptionLines: ['Go, Postgres, Redis, GraphQL, Bolt, RabbitMQ']
      },
      {
        name: 'Microservice Architecture:',
        descriptionLines: ['HTTP, gRPC, API Gateway, nginx proxy, Linux daemons']
      },
      {
        name: 'DevOps:',
        descriptionLines: [
          'Linux OS structure and tools, ansible auto-installators (deb packages)',
          'Docker, Docker Compose',
          'Virtual machines, Git'
        ]
      }
    ]
  },
  {
    projectName: 'Software for monitoring systems',
    location: 'Yekaterinburg, Russia',
    duration: '08/2018 - 03/2019',
    theses: [
      {
        name: 'Company',
        link: 'http://www.uwca.ru/',
        descriptionLines: ['Ural factory of civil aviation']
      },
      {
        name: 'Position',
        descriptionLines: ['C++ Developer']
      },
      {
        name: 'Description',
        descriptionLines: [
          'Development of сustomizable multi-window application for reading, displaying (in different forms) information from monitoring systems.'
        ]
      },
      {
        name: 'Responsibilities',
        descriptionLines: [
          'Project architecture development',
          'User interface prototyping and implementation',
          'Accompanying of develop from start to release'
        ]
      }
    ],
    technologies: [
      {
        name: 'Platforms:',
        descriptionLines: ['Qt, Debian']
      },
      {
        name: 'Languages & Technologies:',
        descriptionLines: ['C++, SQLite, Virtual machines, TortoiseSVN']
      }
    ]
  },
  {
    projectName: 'Software for sensor system',
    location: 'Yekaterinburg, Russia',
    duration: '04/2017 - 08/2018',
    theses: [
      {
        name: 'Company',
        link: 'https://www.npoa.ru/',
        descriptionLines: ['NPOA']
      },
      {
        name: 'Position',
        descriptionLines: ['C / C++ C Engineer developer']
      },
      {
        name: 'Description',
        descriptionLines: [
          'Development embedded software for microcontrollers reading data from various sensors',
          'Development desktop software for managing microcontrollers bus and displaying data from them'
        ]
      },
      {
        name: 'Responsibilities',
        descriptionLines: [
          'Exchange protocol development',
          'Microcontrollers control logic development',
          'User interface prototyping and implementation'
        ]
      }
    ],
    technologies: [
      {
        name: 'Platforms:',
        descriptionLines: ['Qt, Debian']
      },
      {
        name: 'Tools:',
        descriptionLines: ['QtCreator, Code Composer Studio']
      },
      {
        name: 'Languages & Technologies:',
        descriptionLines: ['C, C++, Virtual machines, Git']
      }
    ]
  }
];

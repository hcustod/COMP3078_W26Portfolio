import type { ImageMetadata } from 'astro';
import votingAppImg from '../assets/recentprojects/voting-app.webp';
import projectMgmtImg from '../assets/recentprojects/project-management.webp';
import inventoryMgmtImg from '../assets/recentprojects/inventory-management.webp';
import gomokuImg from '../assets/recentprojects/gomoku.webp';
import asciiRogueImg from '../assets/recentprojects/ascii-rogue.webp';
import mudGameImg from '../assets/recentprojects/mud-game.webp';
import flightReservationImg from '../assets/recentprojects/flight-reservation.webp';
import simpleChatCppImg from '../assets/recentprojects/simple-chat-cpp.webp';

export interface PortfolioProject {
  slug: string;
  title: string;
  track: 'Academic' | 'Personal';
  category: string;
  summary: string;
  tech: string[];
  image: ImageMetadata;
  code: string;
  demo?: string;
  docker?: string;
  featured: boolean;
  features: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'voting-web-app',
    title: 'Voting Web App',
    track: 'Academic',
    category: 'Web',
    summary: 'A PHP topic creation and voting platform with CRUD operations, user participation, and Docker packaging.',
    tech: ['PHP', 'MySQL', 'Docker'],
    image: votingAppImg,
    code: 'https://github.com/hcustod/topic-voting-php-webapp',
    docker: 'https://hub.docker.com/r/hcustodio/voting-app',
    featured: true,
    features: [
      'Topic and voting workflows with persistent storage.',
      'CRUD support for discussion items and basic profile handling.',
      'Containerized deployment for easier local setup and review.',
    ],
  },
  {
    slug: 'project-management-system',
    title: 'Project Management System',
    track: 'Academic',
    category: 'Web',
    summary: 'An ASP.NET Core MVC system for managing projects, tasks, users, and role-based workflows.',
    tech: ['C#', '.NET', 'MVC', 'PostgreSQL'],
    image: projectMgmtImg,
    code: 'https://github.com/hcustod/project-management-system',
    docker: 'https://hub.docker.com/repository/docker/hcustodio/project-management-system/general',
    featured: true,
    features: [
      'Project and task management flows backed by PostgreSQL.',
      'User and role administration within an MVC structure.',
      'Container-ready delivery path for consistent testing and review.',
    ],
  },
  {
    slug: 'inventory-management-system',
    title: 'Inventory Management System',
    track: 'Academic',
    category: 'Web',
    summary: 'A database-driven ASP.NET Core MVC app for products, stock movement, orders, and inventory visibility.',
    tech: ['C#', '.NET', 'MVC', 'PostgreSQL'],
    image: inventoryMgmtImg,
    code: 'https://github.com/hcustod/inventory-management-system',
    docker: 'https://hub.docker.com/repository/docker/hcustodio/inventory-management-system/general',
    featured: true,
    features: [
      'Inventory, product, and stock-tracking workflows.',
      'Server-rendered MVC patterns tied to persistent relational data.',
      'Operational focus on data accuracy and repeatable order handling.',
    ],
  },
  {
    slug: 'gomoku-java-console-game',
    title: 'Gomoku Java Console Game',
    track: 'Academic',
    category: 'Games',
    summary: 'A turn-based Gomoku game featuring Minimax-driven AI in a Java console interface.',
    tech: ['Java', 'Console', 'Minimax'],
    image: gomokuImg,
    code: 'https://github.com/hcustod/gomoku-minimax-ai-console',
    featured: true,
    features: [
      'Console-based board rendering and turn handling.',
      'Minimax-inspired decision logic for computer moves.',
      'Clear game-state management and win detection logic.',
    ],
  },
  {
    slug: 'ascii-roguelike',
    title: 'ASCII Roguelike',
    track: 'Personal',
    category: 'Games',
    summary: 'A Python roguelike rendered in the terminal using ASCII graphics and grid-based exploration.',
    tech: ['Python', 'ASCII', 'Console'],
    image: asciiRogueImg,
    code: 'https://github.com/hcustod/ascii-rogue-libtcod-console',
    featured: true,
    features: [
      'ASCII rendering for map, entities, and movement feedback.',
      'Turn-based exploration and encounter handling.',
      'Python-based architecture for rapid iteration on rules and mechanics.',
    ],
  },
  {
    slug: 'mud-roguelike',
    title: 'MUD Roguelike',
    track: 'Personal',
    category: 'Games',
    summary: 'A Python text-based MUD with combat, party generation, items, and command-driven interaction.',
    tech: ['Python', 'Console', 'Networking'],
    image: mudGameImg,
    code: 'https://github.com/hcustod/mud-roguelike-python-console',
    featured: false,
    features: [
      'Command-driven text gameplay with party and item systems.',
      'Combat logic and world-state transitions.',
      'Reusable Python structures for rooms, entities, and interactions.',
    ],
  },
  {
    slug: 'flight-reservation-system',
    title: 'Flight Reservation System',
    track: 'Academic',
    category: 'Console Apps',
    summary: 'A C# console application for creating, searching, and reserving bookings in a transport-style workflow.',
    tech: ['C#', 'Console'],
    image: flightReservationImg,
    code: 'https://github.com/hcustod/flight-res-sys-console',
    docker: 'https://hub.docker.com/repository/docker/hcustodio/flight-res-sys-console/general',
    featured: false,
    features: [
      'Reservation creation, search, and data-entry flows.',
      'Console-friendly interaction design for stepwise tasks.',
      'Clear class modeling for bookings and business rules.',
    ],
  },
  {
    slug: 'simple-chat-server',
    title: 'Simple Chat Server',
    track: 'Personal',
    category: 'Console Apps',
    summary: 'A C++ chat client/server project using sockets and multithreading for real-time communication.',
    tech: ['C++', 'Console', 'Networking'],
    image: simpleChatCppImg,
    code: 'https://github.com/hcustod/simple-chat-cpp',
    featured: true,
    features: [
      'Socket-based message passing between client and server.',
      'Multithreaded handling for concurrent communication.',
      'Low-level systems exposure through C++ networking patterns.',
    ],
  },
];

export const featuredProjects = portfolioProjects.filter((project) => project.featured);
export const projectArchive = portfolioProjects;
export const projectCategories = ['All', ...new Set(portfolioProjects.map((project) => project.category))];

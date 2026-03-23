import logo from '../assets/myLogo/myFinalLogoTeal.png';
import bdsrLogo from '../assets/experienceLogos/bdsr-logo-final.png';
import gigALogo from '../assets/experienceLogos/gig-a-logo.svg';
import inteleradLogo from '../assets/experienceLogos/intelerad-logo.jpeg';
import telusLogo from '../assets/experienceLogos/telus-icon.png';

import javaLogo from '../assets/skills/java.png';
import csharpLogo from '../assets/skills/c-sharp.png';
import javascriptLogo from '../assets/skills/javascript-icon.png';
import pythonLogo from '../assets/skills/python-logo-only.png';

import reactLogo from '../assets/skills/React-icon.png';
import astroLogo from '../assets/skills/Astro-icon.png';
import tailwindLogo from '../assets/skills/Tailwind-icon.png';
import reduxLogo from '../assets/skills/Redux-icon.png';

import aspNetLogo from '../assets/skills/Aspnet-core-icon.png';
import nodeLogo from '../assets/skills/node-icon.png';
import flaskLogo from '../assets/skills/flask-logo.png';
import laravelLogo from '../assets/skills/Laravel-icon.png';

import awsLogo from '../assets/skills/Aws-icon.png';
import gcpLogo from '../assets/skills/google-cloud.png';
import dockerLogo from '../assets/skills/docker-logo.webp';
import terraformLogo from '../assets/skills/terraform.png';

import postgresLogo from '../assets/skills/postgresql-logo.png';
import oracleLogo from '../assets/skills/oracle-db-icon.png';
import dbeaverLogo from '../assets/skills/dbeaver-icon.png';
import linuxLogo from '../assets/skills/Linux-icon.png';

import gitLogo from '../assets/skills/git.png';
import githubActionsLogo from '../assets/skills/github-actions-icon.png';
import shellLogo from '../assets/skills/shell-icon.png';
import jiraLogo from '../assets/skills/jira-icon.png';

export type DocumentCategory = 'personal' | 'academic' | 'capstone';

export interface PortfolioDocument {
  title: string;
  path: string;
  type: string;
  summary: string;
  category: DocumentCategory;
}

export const siteMeta = {
  title: 'Henrique Custodio | Portfolio',
  description:
    'Portfolio for Henrique Custodio featuring projects, professional experience, academic background, and capstone work.',
  email: 'h.custodio.dev@gmail.com',
  location: 'Toronto, Ontario, Canada',
  resumePath: '/resume/Henrique_Custodio_Resume_2026.pdf',
  coverLetterPath: '/docs/Henrique_Custodio_Cover_Letter.pdf',
  capstoneDocumentsPath: '/capstone/#documents',
  logo,
};

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hcustod/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/hcustod', icon: 'github' },
  { label: 'Email', href: `mailto:${siteMeta.email}`, icon: 'mail' },
] as const;

export const experiences = [
  {
    company: 'Gig-a',
    role: 'Developer Technical Support',
    date: 'October 2025 - Present',
    location: 'Toronto, ON',
    logo: gigALogo,
    link: '#',
    summary:
      'Supported a Java-based file transfer platform through escalated technical support, certificate automation, platform remediation, and legacy modernization work.',
    points: [
      'Provide escalated developer support for a Java-based file transfer platform, troubleshooting application and infrastructure issues.',
      'Automated SSL certificate renewal across the enterprise fleet, improving reliability and reducing manual overhead.',
      'Modernized legacy codebases and tooling using Apache Tomcat, Apache Struts, and Apache Commons.',
      'Perform server patching and remediation in alignment with security scan findings and compliance requirements.',
    ],
    tools: ['Java', 'Apache Tomcat', 'Apache Struts', 'SSL', 'Linux', 'Patching', 'Support'],
  },
  {
    company: 'Bohrium Data & Security Research Corp.',
    role: 'Assistant Developer',
    date: 'October 2024 - September 2025',
    location: 'Toronto, ON',
    logo: bdsrLogo,
    link: '#',
    summary:
      'Supported modernization work for legacy web properties by upgrading PostgreSQL, migrating CMS workloads to AWS and GCP, and tightening backup and monitoring practices.',
    points: [
      'Migrated end-of-life PostgreSQL deployments to version 13+ while protecting data integrity and performance.',
      'Moved CMS websites to AWS and GCP, provisioning secure infrastructure with virtual machines, storage, DNS, firewalls, and SSL.',
      'Verified automated backup and disaster recovery integrity through scenario-based QA checks and regular audits.',
      'Set up monitoring, alerting, and scheduled backups for cloud workloads to support availability and disaster recovery readiness.',
    ],
    tools: ['Docker', 'PostgreSQL', 'AWS', 'GCP', 'Git', 'Java', 'Bash', 'CI/CD'],
  },
  {
    company: 'Intelerad Medical Systems',
    role: 'System Technology Specialist',
    date: 'January 2024 - September 2024',
    location: 'Toronto, ON',
    logo: inteleradLogo,
    link: 'https://www.intelerad.com/en/',
    summary:
      'Provided systems administration and production support for healthcare imaging environments where Linux reliability, database performance, and incident response were critical.',
    points: [
      'Managed and optimized RHEL servers running PACS radiology software.',
      'Deployed and maintained Linux services including HL7 and DICOM routers, cron jobs, SELinux policy, and iptables controls.',
      'Administered and fine-tuned Sybase and PostgreSQL databases for performance and security.',
      'Provided rapid resolution for high-severity production incidents while meeting SLA expectations.',
      'Collaborated with cross-functional teams to automate deployment pipelines for new client environments using Ansible and Bash.',
    ],
    tools: ['RHEL', 'PostgreSQL', 'Sybase', 'HL7', 'Bash', 'Ansible', 'DICOM'],
  },
  {
    company: 'TELUS',
    role: 'Developer Analyst II',
    date: 'May 2022 - August 2023',
    location: 'Montreal, QC',
    logo: telusLogo,
    link: 'https://www.telus.com',
    summary:
      'Resolved cloud platform issues for enterprise customers using structured troubleshooting, Linux diagnostics, and clear technical communication.',
    points: [
      'Resolved technical issues across Google Cloud services, with a focus on cloud databases and storage including Cloud SQL, BigQuery, Firestore, and Spanner.',
      'Investigated and reproduced customer-reported bugs using structured troubleshooting workflows and Linux-based tools.',
      'Applied infrastructure and platform support practices to move issues toward resolution under production conditions.',
      'Produced documentation and troubleshooting guidance that supported clearer handoff and faster investigation.',
    ],
    tools: ['GCP', 'Bash', 'Git', 'Jira', 'Networking', 'IAM', 'Java', 'Python'],
  },
];

export const education = [
  {
    school: 'George Brown College',
    location: 'Toronto, Ontario',
    degree: 'Advanced Diploma in Computer Programming and Analysis',
    cgpa: '3.84 / 4.0',
    date: 'September 2022 - April 2025',
    link: 'https://www.georgebrown.ca/',
    coursework: [
      'Object-oriented programming in Java and C#.',
      'Agile team delivery with Git and Jira.',
      'Data structures, algorithms, and performance analysis.',
      'Database-backed web application development.',
      'Linux fundamentals, shell scripting, and operating systems.',
    ],
  },
  {
    school: 'The University of British Columbia',
    location: 'Vancouver, British Columbia',
    degree: 'Bachelor of Arts in Psychology',
    cgpa: '3.13 / 4.33',
    date: 'September 2016 - April 2021',
    link: 'https://www.ubc.ca/',
    coursework: [
      'Research methods and study design.',
      'Quantitative analysis using SPSS and R.',
      'Scientific communication and written reports.',
      'Critical thinking and behavioral analysis.',
    ],
  },
];

export const certifications = [
  {
    title: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    year: '2025',
  },
  {
    title: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    year: '2024',
  },
  {
    title: 'Google Associate Cloud Engineer',
    issuer: 'Google Cloud',
    year: '2023',
  },
  {
    title: 'Red Hat Certified System Administrator (RHCSA)',
    issuer: 'Red Hat',
    year: '2023',
  },
  {
    title: 'Systems Security Certified Practitioner (SSCP)',
    issuer: '(ISC)2',
    year: '2023',
  },
  {
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    year: '2022',
  },
  {
    title: 'CompTIA Network+',
    issuer: 'CompTIA',
    year: '2022',
  },
  {
    title: 'CompTIA A+',
    issuer: 'CompTIA',
    year: '2022',
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', icon: javaLogo },
      { name: 'C#', icon: csharpLogo },
      { name: 'JavaScript', icon: javascriptLogo },
      { name: 'Python', icon: pythonLogo },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'Astro', icon: astroLogo },
      { name: 'Tailwind CSS', icon: tailwindLogo },
      { name: 'React', icon: reactLogo },
      { name: 'Redux', icon: reduxLogo },
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      { name: '.NET Core', icon: aspNetLogo },
      { name: 'Node.js', icon: nodeLogo },
      { name: 'Flask', icon: flaskLogo },
      { name: 'Laravel', icon: laravelLogo },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: awsLogo },
      { name: 'GCP', icon: gcpLogo },
      { name: 'Docker', icon: dockerLogo },
      { name: 'Terraform', icon: terraformLogo },
    ],
  },
  {
    title: 'Databases & Systems',
    items: [
      { name: 'PostgreSQL', icon: postgresLogo },
      { name: 'Oracle', icon: oracleLogo },
      { name: 'DBeaver', icon: dbeaverLogo },
      { name: 'Linux', icon: linuxLogo },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: gitLogo },
      { name: 'GitHub Actions', icon: githubActionsLogo },
      { name: 'Shell Scripting', icon: shellLogo },
      { name: 'Jira', icon: jiraLogo },
    ],
  },
];

export const documents: PortfolioDocument[] = [
  {
    title: 'Resume',
    path: siteMeta.resumePath,
    type: 'PDF',
    summary: 'Current 2026 resume used by the homepage and document links.',
    category: 'personal',
  },
  {
    title: 'Cover Letter',
    path: siteMeta.coverLetterPath,
    type: 'PDF',
    summary: 'Cover letter PDF aligned with the current portfolio and resume set.',
    category: 'personal',
  },
  {
    title: 'WrenchIT Capstone Documents',
    path: siteMeta.capstoneDocumentsPath,
    type: 'Hub',
    summary: 'Capstone document shelf with the project vision, requirements, design packet, technology plan, report, and final deck.',
    category: 'capstone',
  },
];

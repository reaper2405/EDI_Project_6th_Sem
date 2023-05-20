import { Cv, LEVELS } from '~/types/cvfy';

export const cvSettingTemplate: Cv = {
  jobTitle: 'Software Developer',
  name: 'Raj Kunwar',
  lastName: 'Singh',
  email: 'rajkunwarsingh123@gmail.com',
  location: 'Pune, Maharashtra',
  phoneNumber: '+91 9876543210',
  aboutme:
    "My name is Raj Kunwar Singh. I am a passionate, over-achieving government employee who believes the government's #1 job is serving the people. By pairing the right people with the right messaging at the right time, the department and your local government can make the world a better place for everyone! I have met the CM of my state, and one day I will become the President of the India.",
  jobSkills: ['Microsoft', 'Word', 'Excel', 'PerfectMind'],
  softSkills: ['Positivity', 'Leadership', 'Public Speaking'],
  languages: [{ lang: 'English', level: LEVELS[4] }],
  linkedin: 'rksingh',
  twitter: 'rksingh05',
  github: 'reaper24',
  website: 'www.rksingh.com',
  education: [
    {
      title: 'A Environmental and Public Affairs',
      location: 'Vishwakarma Institute of Technology, Maharashtra, India',
      from: new Date(2020, 9, 1),
      to: new Date(2020, 4, 1),
      current: false,
      summary: 'Very passionate',
    },
  ],
  work: [
    {
      title: 'HR',
      location: 'Pune, Maharashtra',
      from: new Date(2021, 1, 1),
      to: new Date(2021, 1, 1),
      current: true,
      summary: `- I was very passionate with my work.
- Very enthusiastic to learn new things from new people.
- Easy to mix up with everyone at work.`,
    },
    {
      title: 'City Councilor',
      location: 'Pune, India',
      from: new Date(2022, 1, 1),
      to: new Date(),
      current: true,
      summary: `- 
- I am working deligently and with full zeal`,
    },
  ],
  projects: [
    {
      title: 'Lot 48',
      location: 'Pune, India',
      from: new Date(2019, 1, 1),
      to: new Date(2021, 1, 1),
      current: true,
      summary: `- I was very passionate with my work.
- Very enthusiastic to learn new things from new people.
- Easy to mix up with everyone at work.`,
    },
  ],
  displayEducation: true,
  displayProjects: false,
  activeColor: '#5B21B6',
};

export const cvSettingsEmptyTemplate: Cv = {
  jobTitle: '',
  name: '',
  lastName: '',
  email: '',
  location: '',
  phoneNumber: '',
  aboutme: '',
  jobSkills: [],
  softSkills: [],
  languages: [],
  linkedin: '',
  twitter: '',
  github: '',
  website: '',
  education: [],
  work: [],
  projects: [],
  displayEducation: true,
  displayProjects: false,
  activeColor: '#5B21B6',
};

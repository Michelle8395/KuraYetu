export const students = [
  { id: '1', name: 'Jabari Kamau', admissionNo: 'JSS/001/2026', class: 'Grade 7 East', pin: '1234' },
  { id: '2', name: 'Zuri Otieno', admissionNo: 'JSS/002/2026', class: 'Grade 8 North', pin: '2233' },
  { id: '3', name: 'Kendi Mwangi', admissionNo: 'JSS/003/2026', class: 'Grade 9 South', pin: '4455' },
  { id: '4', name: 'Baraka Kiprop', admissionNo: 'JSS/004/2026', class: 'Grade 7 West', pin: '6677' },
  { id: '5', name: 'Imani Wambui', admissionNo: 'JSS/005/2026', class: 'Grade 8 East', pin: '8899' },
];

export const elections = [
  {
    id: 'elec-001',
    title: 'Main School Council Elections 2026',
    status: 'active', // active, closed, upcoming
    startDate: '2026-05-26T08:00:00Z',
    endDate: '2026-05-26T17:00:00Z',
  }
];

export const positions = [
  { id: 'pos-1', title: 'School President', electionId: 'elec-001' },
  { id: 'pos-2', title: 'Deputy President', electionId: 'elec-001' },
  { id: 'pos-3', title: 'Sports Captain', electionId: 'elec-001' },
  { id: 'pos-4', title: 'Entertainment Prefect', electionId: 'elec-001' },
  { id: 'pos-5', title: 'Dining Hall Prefect', electionId: 'elec-001' },
];

export const candidates = [
  {
    id: 'cand-1',
    name: 'Jabari Kamau',
    positionId: 'pos-1',
    class: 'Grade 9 North',
    manifesto: 'I will ensure every student has a voice in our school leadership. My goal is to improve student welfare and communication with teachers.',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jabari',
  },
  {
    id: 'cand-2',
    name: 'Zuri Otieno',
    positionId: 'pos-1',
    class: 'Grade 9 South',
    manifesto: 'Transparency and fairness for all. I want to organize more student-led events and workshops for skills development.',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zuri',
  },
  {
    id: 'cand-3',
    name: 'Kendi Mwangi',
    positionId: 'pos-2',
    class: 'Grade 8 East',
    manifesto: 'Supporting the president to make our school the best in the county. Focus on discipline and academic excellence.',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kendi',
  },
  {
    id: 'cand-4',
    name: 'Baraka Kiprop',
    positionId: 'pos-2',
    class: 'Grade 8 West',
    manifesto: 'I believe in servant leadership. I will work tirelessly to represent your interests in the school board.',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Baraka',
  },
  {
    id: 'cand-5',
    name: 'Malik Juma',
    positionId: 'pos-3',
    class: 'Grade 9 West',
    manifesto: 'Let us revitalize our sports culture! More inter-house competitions and better equipment for all teams.',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Malik',
  },
  {
    id: 'cand-6',
    name: 'Amani Njeri',
    positionId: 'pos-3',
    class: 'Grade 8 South',
    manifesto: 'Sports for everyone, not just the experts. I will introduce more diverse sporting activities like chess and archery.',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amani',
  },
];

export const turnoutAnalytics = {
  totalRegistered: 1200,
  totalVotesCast: 846,
  turnoutPercentage: 70.5,
  recentActivity: [
    { id: 1, action: 'Vote cast', time: '2 minutes ago', student: 'Grade 7 East' },
    { id: 2, action: 'Vote cast', time: '5 minutes ago', student: 'Grade 9 North' },
    { id: 3, action: 'Vote cast', time: '12 minutes ago', student: 'Grade 8 South' },
  ]
};

export const resultsData = [
  { position: 'School President', results: [
    { name: 'Jabari Kamau', votes: 450, percentage: 53.2 },
    { name: 'Zuri Otieno', votes: 396, percentage: 46.8 },
  ]},
  { position: 'Deputy President', results: [
    { name: 'Kendi Mwangi', votes: 480, percentage: 56.7 },
    { name: 'Baraka Kiprop', votes: 366, percentage: 43.3 },
  ]},
];

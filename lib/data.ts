export const schemes = [
  {
    id: '1',
    title: 'Startup India Seed Fund Scheme',
    description: 'Financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization.',
    eligibility: 'DPIIT recognized startups not more than 2 years old',
    benefits: ['Up to Rs. 20 Lakhs for validation', 'Up to Rs. 50 Lakhs for market entry'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Register on Startup India portal',
      'Apply for DPIIT recognition',
      'Submit application with required documents',
      'Pitch to incubator committee',
      'Receive funding upon approval'
    ],
    externalLink: 'https://seedfund.startupindia.gov.in'
  },
  {
    id: '2',
    title: 'MUDRA Loan Scheme',
    description: 'Micro Units Development and Refinance Agency provides loans up to 10 lakh to non-corporate, non-farm small/micro enterprises.',
    eligibility: 'Small business owners, entrepreneurs, startups',
    benefits: ['Shishu: Up to Rs. 50,000', 'Kishore: Rs. 50,001 to Rs. 5 Lakhs', 'Tarun: Rs. 5 Lakhs to Rs. 10 Lakhs'],
    industry: 'Manufacturing, Trading, Services',
    location: 'Pan India',
    fundingType: 'Loan',
    applicationSteps: [
      'Visit nearest bank or NBFC',
      'Fill MUDRA loan application',
      'Submit KYC and business documents',
      'Bank verification and approval',
      'Loan disbursement'
    ],
    externalLink: 'https://www.mudra.org.in'
  },
  {
    id: '3',
    title: 'Stand-Up India Scheme',
    description: 'Facilitates bank loans between Rs. 10 lakh and Rs. 1 Crore to at least one SC/ST and one woman borrower per bank branch.',
    eligibility: 'SC/ST and Women entrepreneurs above 18 years',
    benefits: ['Loans from Rs. 10 Lakh to Rs. 1 Crore', 'Composite loan including term loan and working capital'],
    industry: 'Manufacturing, Services, Trading',
    location: 'Pan India',
    fundingType: 'Loan',
    applicationSteps: [
      'Visit Stand-Up India portal',
      'Register and submit application',
      'Connect with nearest bank branch',
      'Document verification',
      'Loan sanction and disbursement'
    ],
    externalLink: 'https://www.standupmitra.in'
  },
  {
    id: '4',
    title: 'Atal Innovation Mission',
    description: 'Establishing Atal Tinkering Labs and Atal Incubation Centers across India to promote innovation and entrepreneurship.',
    eligibility: 'Schools, universities, and organizations',
    benefits: ['Grant of Rs. 20 Lakhs for ATL', 'Up to Rs. 10 Crore for AIC'],
    industry: 'Technology, Innovation',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Apply through AIM portal',
      'Submit proposal and documents',
      'Evaluation by committee',
      'Selection and grant disbursement'
    ],
    externalLink: 'https://aim.gov.in'
  },
  {
    id: '5',
    title: 'Credit Guarantee Fund Trust',
    description: 'Provides credit guarantee to banks for collateral-free loans to MSMEs up to Rs. 5 Crore.',
    eligibility: 'New and existing MSMEs',
    benefits: ['Collateral-free loans', 'Credit guarantee coverage up to 85%'],
    industry: 'Manufacturing, Services',
    location: 'Pan India',
    fundingType: 'Guarantee',
    applicationSteps: [
      'Apply through lending institution',
      'Bank evaluates and sanctions loan',
      'CGTMSE provides guarantee',
      'Loan disbursement'
    ],
    externalLink: 'https://www.cgtmse.in'
  },
  {
    id: '6',
    title: 'Technology Development Board',
    description: 'Provides financial assistance for commercialization of indigenous technology and adaptation of imported technology.',
    eligibility: 'Indian companies with innovative technology',
    benefits: ['Equity up to 50%', 'Soft loan at concessional rates'],
    industry: 'Technology',
    location: 'Pan India',
    fundingType: 'Equity/Loan',
    applicationSteps: [
      'Submit proposal to TDB',
      'Technical evaluation',
      'Financial appraisal',
      'Board approval and funding'
    ],
    externalLink: 'https://tdb.gov.in'
  }
]

export const entrepreneurs = [
  {
    id: '1',
    name: 'Priya Sharma',
    title: 'Founder & CEO',
    company: 'GreenTech Solutions',
    industry: 'CleanTech',
    location: 'Bangalore',
    bio: 'Building sustainable energy solutions for rural India. Forbes 30 Under 30.',
    connections: 234,
    avatar: null
  },
  {
    id: '2',
    name: 'Rahul Verma',
    title: 'Co-Founder',
    company: 'FinEdge',
    industry: 'FinTech',
    location: 'Mumbai',
    bio: 'Democratizing financial services for the underbanked. Previously at PayTM.',
    connections: 567,
    avatar: null
  },
  {
    id: '3',
    name: 'Anjali Patel',
    title: 'Founder',
    company: 'HealthFirst AI',
    industry: 'HealthTech',
    location: 'Hyderabad',
    bio: 'AI-powered diagnostics for tier-2 cities. Stanford AI Lab alumna.',
    connections: 345,
    avatar: null
  },
  {
    id: '4',
    name: 'Vikram Singh',
    title: 'CEO',
    company: 'AgroNext',
    industry: 'AgriTech',
    location: 'Pune',
    bio: 'Helping farmers increase yield with precision agriculture technology.',
    connections: 189,
    avatar: null
  },
  {
    id: '5',
    name: 'Neha Gupta',
    title: 'Co-Founder & CTO',
    company: 'EduSpark',
    industry: 'EdTech',
    location: 'Delhi',
    bio: 'Personalized learning for every child. Ex-Google engineer.',
    connections: 423,
    avatar: null
  },
  {
    id: '6',
    name: 'Arjun Reddy',
    title: 'Founder',
    company: 'LogiChain',
    industry: 'Logistics',
    location: 'Chennai',
    bio: 'Optimizing last-mile delivery with AI. Y Combinator W22.',
    connections: 312,
    avatar: null
  }
]

export const events = [
  {
    id: '1',
    title: 'Startup Funding Masterclass',
    organizer: 'T-Hub',
    date: '2026-05-15',
    time: '10:00 AM',
    mode: 'Online',
    description: 'Learn the art of pitching and securing funding from top investors.',
    registrations: 234
  },
  {
    id: '2',
    title: 'AI Innovation Summit 2026',
    organizer: 'NASSCOM',
    date: '2026-05-20',
    time: '9:00 AM',
    mode: 'Offline',
    location: 'Bangalore',
    description: 'Annual summit bringing together AI startups, investors, and industry leaders.',
    registrations: 567
  },
  {
    id: '3',
    title: 'Women Founders Connect',
    organizer: 'She Leads Tech',
    date: '2026-05-25',
    time: '2:00 PM',
    mode: 'Hybrid',
    location: 'Mumbai',
    description: 'Networking event exclusively for women entrepreneurs and founders.',
    registrations: 189
  },
  {
    id: '4',
    title: 'Scale-Up Bootcamp',
    organizer: 'IIM Incubator',
    date: '2026-06-01',
    time: '9:00 AM',
    mode: 'Offline',
    location: 'Ahmedabad',
    description: 'Intensive 3-day bootcamp on scaling your startup to the next level.',
    registrations: 78
  }
]

export const incubators = [
  {
    id: '1',
    name: 'T-Hub',
    location: 'Hyderabad',
    programs: ['Pre-Incubation', 'Incubation', 'Acceleration'],
    facilities: ['Co-working space', 'Mentorship', 'Funding access', 'Legal support'],
    startups: 1200,
    website: 'https://t-hub.co'
  },
  {
    id: '2',
    name: 'NASSCOM 10000 Startups',
    location: 'Multiple Cities',
    programs: ['Incubation', 'Acceleration', 'Corporate Connect'],
    facilities: ['Mentorship network', 'Investor connect', 'Tech support'],
    startups: 2500,
    website: 'https://nasscom.in'
  },
  {
    id: '3',
    name: 'IIM Bangalore NSRCEL',
    location: 'Bangalore',
    programs: ['Launchpad', 'Women Startup Program', 'Social Ventures'],
    facilities: ['Campus incubation', 'Academic resources', 'Industry network'],
    startups: 450,
    website: 'https://nsrcel.org'
  }
]

export const discussions = [
  {
    id: '1',
    title: 'Best practices for raising a seed round in 2026?',
    author: 'Priya Sharma',
    date: '2026-04-18',
    replies: 23,
    upvotes: 45,
    tags: ['Funding', 'Seed Round']
  },
  {
    id: '2',
    title: 'How to approach government schemes as a first-time founder?',
    author: 'Rahul Verma',
    date: '2026-04-17',
    replies: 15,
    upvotes: 32,
    tags: ['Government Schemes', 'First-time Founder']
  },
  {
    id: '3',
    title: 'Looking for tech co-founder for AgriTech startup',
    author: 'Vikram Singh',
    date: '2026-04-16',
    replies: 8,
    upvotes: 12,
    tags: ['Co-founder', 'AgriTech']
  },
  {
    id: '4',
    title: 'Experiences with DPIIT recognition process?',
    author: 'Neha Gupta',
    date: '2026-04-15',
    replies: 31,
    upvotes: 56,
    tags: ['DPIIT', 'Registration']
  }
]

export const resources = [
  {
    id: '1',
    title: 'Complete Guide to Startup Registration in India',
    type: 'Guide',
    description: 'Step-by-step guide covering company registration, GST, DPIIT recognition, and compliance.',
    downloads: 1234
  },
  {
    id: '2',
    title: 'Pitch Deck Template',
    type: 'Template',
    description: 'Investor-ready pitch deck template used by successful Indian startups.',
    downloads: 2567
  },
  {
    id: '3',
    title: 'Financial Projection Model',
    type: 'Template',
    description: 'Excel template for creating 3-5 year financial projections for your startup.',
    downloads: 1890
  },
  {
    id: '4',
    title: 'Understanding Term Sheets',
    type: 'Article',
    description: 'Comprehensive article explaining term sheet components and negotiation tips.',
    downloads: 987
  },
  {
    id: '5',
    title: 'Legal Checklist for Startups',
    type: 'Guide',
    description: 'Essential legal requirements and compliance checklist for Indian startups.',
    downloads: 1456
  },
  {
    id: '6',
    title: 'Cap Table Template',
    type: 'Template',
    description: 'Professional cap table template to track equity and ownership.',
    downloads: 1123
  }
]

export const testimonials = [
  {
    id: '1',
    name: 'Amit Kumar',
    company: 'TechFlow',
    quote: 'EnterNet helped us discover the perfect government scheme for our AI startup. We secured Rs. 50 Lakhs in seed funding!',
    image: null
  },
  {
    id: '2',
    name: 'Sneha Reddy',
    company: 'GreenLeaf',
    quote: 'The networking features connected me with mentors who transformed our business strategy. Highly recommended!',
    image: null
  },
  {
    id: '3',
    name: 'Karthik Iyer',
    company: 'EduBridge',
    quote: 'From scheme discovery to application, EnterNet made the entire process seamless. A must-have for every entrepreneur.',
    image: null
  }
]

export const adminUsers = [
  { id: '1', name: 'Priya Sharma', email: 'priya@greentech.com', role: 'Entrepreneur', status: 'Active', joinDate: '2026-01-15' },
  { id: '2', name: 'Rahul Verma', email: 'rahul@finedge.io', role: 'Entrepreneur', status: 'Active', joinDate: '2026-02-20' },
  { id: '3', name: 'Admin User', email: 'admin@enternet.in', role: 'Admin', status: 'Active', joinDate: '2025-12-01' },
  { id: '4', name: 'Anjali Patel', email: 'anjali@healthfirst.ai', role: 'Entrepreneur', status: 'Pending', joinDate: '2026-04-10' },
]

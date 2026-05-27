export const schemes = [
  // === FLAGSHIP MSME SCHEMES ===
  {
    id: '1',
    title: 'Startup India Seed Fund Scheme (SISFS)',
    description: 'Financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization. Aims to provide funding to early-stage startups.',
    eligibility: 'DPIIT recognized startups not more than 2 years old at the time of application',
    benefits: ['Up to Rs. 20 Lakhs as grant for validation of PoC, prototype development, or product trials', 'Up to Rs. 50 Lakhs as debt/convertible debentures for market entry, commercialization'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Grant',
    category: 'Startup Funding',
    ministry: 'Ministry of Commerce and Industry (DPIIT)',
    applicationSteps: [
      'Register on Startup India portal (startupindia.gov.in)',
      'Apply for DPIIT recognition',
      'Submit application through eligible incubator',
      'Pitch to incubator committee',
      'Due diligence and approval',
      'Receive funding upon approval'
    ],
    externalLink: 'https://seedfund.startupindia.gov.in'
  },
  {
    id: '2',
    title: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    description: 'Micro Units Development and Refinance Agency provides loans up to Rs. 10 lakh to non-corporate, non-farm small/micro enterprises. Three categories: Shishu, Kishore, and Tarun.',
    eligibility: 'Any Indian citizen with a business plan for non-farm income generating activity in manufacturing, trading, or services',
    benefits: ['Shishu: Loans up to Rs. 50,000', 'Kishore: Loans from Rs. 50,001 to Rs. 5 Lakhs', 'Tarun: Loans from Rs. 5 Lakhs to Rs. 10 Lakhs', 'No collateral required'],
    industry: 'Manufacturing, Trading, Services',
    location: 'Pan India',
    fundingType: 'Loan',
    category: 'Credit Support',
    ministry: 'Ministry of Finance',
    applicationSteps: [
      'Visit nearest bank, MFI, or NBFC',
      'Fill MUDRA loan application form',
      'Submit KYC documents and business plan',
      'Bank verification and processing',
      'Loan sanction and disbursement'
    ],
    externalLink: 'https://www.mudra.org.in'
  },
  {
    id: '3',
    title: 'Stand-Up India Scheme',
    description: 'Facilitates bank loans between Rs. 10 lakh and Rs. 1 Crore to at least one SC/ST and one woman borrower per bank branch for setting up a greenfield enterprise.',
    eligibility: 'SC/ST and/or Women entrepreneurs above 18 years, should not be a defaulter, should be a first-time entrepreneur',
    benefits: ['Composite loans from Rs. 10 Lakh to Rs. 1 Crore', 'Covers term loan and working capital', 'Repayment period up to 7 years', 'Moratorium period up to 18 months'],
    industry: 'Manufacturing, Services, Trading',
    location: 'Pan India',
    fundingType: 'Loan',
    category: 'Women & SC/ST',
    ministry: 'Ministry of Finance',
    applicationSteps: [
      'Visit Stand-Up India portal (standupmitra.in)',
      'Register and create profile',
      'Submit online application',
      'Connect with Lead District Manager or bank branch',
      'Document verification and loan processing',
      'Loan sanction and disbursement'
    ],
    externalLink: 'https://www.standupmitra.in'
  },
  {
    id: '4',
    title: 'Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)',
    description: 'Provides credit guarantee to eligible lending institutions against default in payment by MSMEs for loans extended without collateral security and/or third party guarantee.',
    eligibility: 'New and existing Micro and Small Enterprises engaged in manufacturing and service activities',
    benefits: ['Collateral-free credit up to Rs. 5 Crore', 'Guarantee coverage from 75% to 85%', 'Lower guarantee fees for women entrepreneurs and units in NER'],
    industry: 'Manufacturing, Services',
    location: 'Pan India',
    fundingType: 'Guarantee',
    category: 'Credit Support',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Approach any Member Lending Institution (MLI)',
      'Submit loan application with business plan',
      'MLI processes and evaluates the proposal',
      'MLI applies for guarantee cover from CGTMSE',
      'Loan disbursement upon approval'
    ],
    externalLink: 'https://www.cgtmse.in'
  },
  {
    id: '5',
    title: 'Prime Minister Employment Generation Programme (PMEGP)',
    description: 'Credit-linked subsidy programme for generating self-employment opportunities through establishment of micro-enterprises in rural and urban areas.',
    eligibility: 'Any individual above 18 years, SHGs, Trusts, Cooperative Societies. 8th pass for projects above Rs. 10 lakh in manufacturing and Rs. 5 lakh in services',
    benefits: ['Subsidy of 15-35% of project cost', 'Maximum project cost: Rs. 50 lakh for manufacturing, Rs. 20 lakh for services', 'Higher subsidy for SC/ST/OBC/Women/Minorities'],
    industry: 'Manufacturing, Services',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Employment Generation',
    ministry: 'Ministry of MSME (KVIC)',
    applicationSteps: [
      'Apply online at KVIC/KVIB portal',
      'Submit project proposal with required documents',
      'Interview by District Level Task Force Committee',
      'Bank sanctions the loan',
      'Subsidy claimed after unit establishment'
    ],
    externalLink: 'https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp'
  },
  {
    id: '6',
    title: 'Atal Innovation Mission (AIM)',
    description: 'NITI Aayog flagship initiative to promote innovation and entrepreneurship across India through Atal Tinkering Labs (ATL), Atal Incubation Centers (AIC), and other programs.',
    eligibility: 'Schools for ATL, Higher Educational Institutions and private organizations for AIC',
    benefits: ['ATL: Grant of Rs. 20 Lakhs spread over 5 years', 'AIC: Grant-in-aid up to Rs. 10 Crore over 5 years', 'Atal New India Challenges for startups'],
    industry: 'Technology, Innovation',
    location: 'Pan India',
    fundingType: 'Grant',
    category: 'Innovation & Technology',
    ministry: 'NITI Aayog',
    applicationSteps: [
      'Apply through AIM portal (aim.gov.in)',
      'Submit detailed proposal and documents',
      'Evaluation by expert committee',
      'Selection and grant disbursement',
      'Periodic monitoring and compliance'
    ],
    externalLink: 'https://aim.gov.in'
  },
  {
    id: '7',
    title: 'Technology Upgradation Fund Scheme (TUFS)',
    description: 'Provides credit at reduced rates to modernize and upgrade the textile industry by providing access to capital at internationally competitive rates.',
    eligibility: 'Textile and jute industry units including spinning, weaving, processing, garmenting, and technical textiles',
    benefits: ['Capital subsidy of 15% for specified machinery', 'Additional 5% for SC/ST/women entrepreneurs', 'Interest reimbursement for technology upgradation'],
    industry: 'Textiles',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Sector Specific',
    ministry: 'Ministry of Textiles',
    applicationSteps: [
      'Submit application through bank',
      'Bank sanctions term loan',
      'Apply for subsidy with TexUMS portal',
      'Verification and approval',
      'Subsidy disbursement'
    ],
    externalLink: 'https://texmin.nic.in'
  },
  {
    id: '8',
    title: 'Scheme of Fund for Regeneration of Traditional Industries (SFURTI)',
    description: 'Organizes traditional industries and artisans into clusters to make them competitive and increase their income, with focus on Khadi, Coir, and Village Industries.',
    eligibility: 'Traditional industry clusters, NGOs, State/Semi-Government organizations implementing cluster projects',
    benefits: ['Financial support up to Rs. 8 Crore for Heritage clusters (1000-2500 artisans)', 'Up to Rs. 3 Crore for Major clusters (500-1000 artisans)', 'Up to Rs. 1.5 Crore for Mini clusters (up to 500 artisans)'],
    industry: 'Traditional Industries, Handicrafts',
    location: 'Pan India',
    fundingType: 'Grant',
    category: 'Cluster Development',
    ministry: 'Ministry of MSME (KVIC)',
    applicationSteps: [
      'Identify a potential cluster',
      'Engage with Nodal Agency (KVIC/Coir Board)',
      'Submit Detailed Project Report (DPR)',
      'Evaluation and approval by Project Steering Committee',
      'Fund release in phases'
    ],
    externalLink: 'https://sfurti.msme.gov.in'
  },
  {
    id: '9',
    title: 'Micro and Small Enterprises Cluster Development Programme (MSE-CDP)',
    description: 'Supports development of MSE clusters through soft interventions, hard interventions, and infrastructure development for enhancing productivity and competitiveness.',
    eligibility: 'SPVs (Special Purpose Vehicles) of clusters, State Governments, Industrial Associations, Cooperative Societies',
    benefits: ['Soft interventions: Up to Rs. 25 Lakh per cluster', 'Hard interventions: Up to Rs. 10 Crore for CFC/CTP', 'Infrastructure development: Up to Rs. 10 Crore'],
    industry: 'Manufacturing, Services',
    location: 'Pan India',
    fundingType: 'Grant',
    category: 'Cluster Development',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Form SPV with cluster units',
      'Engage Technical Agency for DPR preparation',
      'Submit proposal to State MSME Director',
      'Approval by Steering Committee',
      'Implementation and fund release'
    ],
    externalLink: 'https://msme.gov.in/cluster-development-programme'
  },
  {
    id: '10',
    title: 'Technology Development Board (TDB)',
    description: 'Provides financial assistance for commercialization of indigenous technology and adaptation of imported technology for wider domestic application.',
    eligibility: 'Indian industrial concerns (companies, partnerships, proprietorships) with innovative technology to be commercialized',
    benefits: ['Equity participation up to 50% of project cost', 'Soft loans at concessional interest rates', 'Technology awards for successful commercialization'],
    industry: 'Technology',
    location: 'Pan India',
    fundingType: 'Equity/Loan',
    category: 'Innovation & Technology',
    ministry: 'Department of Science and Technology',
    applicationSteps: [
      'Submit proposal to TDB with detailed project report',
      'Technical evaluation by experts',
      'Financial appraisal and due diligence',
      'Board approval',
      'Agreement signing and fund disbursement'
    ],
    externalLink: 'https://tdb.gov.in'
  },
  {
    id: '11',
    title: 'Interest Subvention Scheme for MSMEs',
    description: 'Provides 2% interest subvention on fresh or incremental loans to MSMEs, promoting access to credit at reduced rates.',
    eligibility: 'All MSMEs with valid Udyam Registration, with loans up to Rs. 1 Crore',
    benefits: ['2% interest subvention on term loans', '2% interest subvention on working capital loans', 'Automatic benefit through banks'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Credit Support',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Obtain Udyam Registration',
      'Apply for loan at any scheduled bank',
      'Bank automatically includes in scheme',
      'Interest benefit applied during loan tenure'
    ],
    externalLink: 'https://msme.gov.in'
  },
  {
    id: '12',
    title: 'Emergency Credit Line Guarantee Scheme (ECLGS)',
    description: 'Provides fully guaranteed and collateral-free additional credit to MSMEs, business enterprises, and MUDRA borrowers to meet operational liabilities.',
    eligibility: 'MSMEs, Business Enterprises, MUDRA borrowers with outstanding loans as on specified dates',
    benefits: ['100% guarantee coverage', 'Additional credit up to 20% of outstanding', 'Tenure up to 6 years with 1-year moratorium', 'No guarantee fee'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Guarantee',
    category: 'Credit Support',
    ministry: 'Ministry of Finance',
    applicationSteps: [
      'Approach existing lending institution',
      'Submit application for ECLGS loan',
      'Lender evaluates eligibility',
      'Loan sanctioned under 100% guarantee',
      'Disbursement as per requirement'
    ],
    externalLink: 'https://www.ncgtc.in/eclgs'
  },
  {
    id: '13',
    title: 'A Scheme for Promotion of Innovation, Rural Industry & Entrepreneurship (ASPIRE)',
    description: 'Sets up network of technology centers and incubation centers to accelerate entrepreneurship and promote startups for innovation in agro-industry.',
    eligibility: 'Host institutes for Livelihood Business Incubators (LBI) and Technology Business Incubators (TBI)',
    benefits: ['LBI: Grant up to Rs. 1 Crore', 'TBI: Grant up to Rs. 1 Crore', 'Incubatee support up to Rs. 15 Lakhs per startup'],
    industry: 'Agro-Industry, Rural Enterprises',
    location: 'Pan India',
    fundingType: 'Grant',
    category: 'Incubation & Innovation',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Host institute submits proposal',
      'Evaluation by National Expert Committee',
      'Approval and MoU signing',
      'Setup of incubation center',
      'Support for incubatees'
    ],
    externalLink: 'https://aspire.msme.gov.in'
  },
  {
    id: '14',
    title: 'Credit Linked Capital Subsidy Scheme (CLCSS)',
    description: 'Facilitates technology upgradation of MSEs by providing 15% upfront capital subsidy on institutional finance for induction of well-established and improved technologies.',
    eligibility: 'Micro and Small Enterprises in approved sub-sectors undertaking technology upgradation',
    benefits: ['15% capital subsidy on eligible investment', 'Maximum subsidy of Rs. 15 Lakhs', 'Coverage for various technologies under 51 sub-sectors'],
    industry: 'Manufacturing',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Technology Upgradation',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Apply for term loan from bank/FI',
      'Submit application for CLCSS through MSME portal',
      'Technical verification of machinery',
      'Approval and subsidy release to bank'
    ],
    externalLink: 'https://clcss.dcmsme.gov.in'
  },
  {
    id: '15',
    title: 'ZED Certification Scheme',
    description: 'Zero Defect Zero Effect certification promotes quality manufacturing with minimal environmental impact, making MSMEs globally competitive.',
    eligibility: 'All registered MSMEs with valid Udyam Registration',
    benefits: ['Certification subsidy: 80% for Micro, 60% for Small, 50% for Medium', 'Free online assessment', 'Handholding support', 'Recognition and marketing benefits'],
    industry: 'Manufacturing',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Quality Certification',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Register on ZED portal with Udyam number',
      'Complete online self-assessment',
      'Apply for ZED certification',
      'Third-party assessment',
      'Certification issuance'
    ],
    externalLink: 'https://zed.msme.gov.in'
  },
  {
    id: '16',
    title: 'MSME Champions Portal',
    description: 'Single-window system for MSMEs to resolve grievances, access information, loans, market linkages, and capture new opportunities including export and manufacturing.',
    eligibility: 'All MSMEs registered or seeking to register',
    benefits: ['Grievance redressal', 'Finance facilitation', 'Market access support', 'Export assistance', 'COVID-19 support'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Support Services',
    category: 'Facilitation',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Visit Champions portal',
      'Register with business details',
      'Select required service',
      'Submit request/grievance',
      'Track resolution status'
    ],
    externalLink: 'https://champions.gov.in'
  },
  {
    id: '17',
    title: 'Udyam Registration',
    description: 'Free, paperless online registration for MSMEs based on self-declaration with no requirement of documents or proof. Linked to PAN and Aadhaar.',
    eligibility: 'Any enterprise meeting MSME classification criteria based on investment and turnover',
    benefits: ['Free online registration', 'No documents required', 'Lifetime validity', 'Access to all MSME schemes and benefits', 'Priority sector lending'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Registration',
    category: 'Facilitation',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Visit Udyam Registration portal',
      'Enter Aadhaar number for authentication',
      'Fill in basic details (auto-populated from GST/IT)',
      'Self-declare investment and turnover',
      'Receive Udyam Registration Number immediately'
    ],
    externalLink: 'https://udyamregistration.gov.in'
  },
  {
    id: '18',
    title: 'NSIC Raw Material Assistance Scheme',
    description: 'NSIC helps MSMEs procure raw materials by financing the procurement both indigenous and imported raw materials.',
    eligibility: 'MSMEs registered with NSIC under Single Point Registration Scheme',
    benefits: ['Finance for raw material procurement', 'Up to 90 days credit period', 'Assistance for both indigenous and imported raw materials'],
    industry: 'Manufacturing',
    location: 'Pan India',
    fundingType: 'Credit',
    category: 'Raw Material Support',
    ministry: 'Ministry of MSME (NSIC)',
    applicationSteps: [
      'Register with NSIC',
      'Apply for raw material assistance',
      'Submit purchase orders and requirements',
      'Credit limit sanctioned',
      'Procurement facilitated through NSIC'
    ],
    externalLink: 'https://www.nsic.co.in'
  },
  {
    id: '19',
    title: 'Single Point Registration Scheme (SPRS)',
    description: 'Facilitates MSMEs to participate in government purchases without requiring security deposits and with price preference benefits.',
    eligibility: 'MSMEs with satisfactory quality products and sound financial position',
    benefits: ['Exemption from earnest money deposit', 'Issue of tender sets free of cost', '358 items reserved for MSE procurement', '25% procurement target from MSEs'],
    industry: 'Manufacturing, Services',
    location: 'Pan India',
    fundingType: 'Market Access',
    category: 'Government Procurement',
    ministry: 'Ministry of MSME (NSIC)',
    applicationSteps: [
      'Apply to NSIC for registration',
      'Submit required documents and samples',
      'Technical inspection of unit',
      'Financial verification',
      'Registration certificate issued'
    ],
    externalLink: 'https://www.nsic.co.in/schemes/govt-purchase-programme'
  },
  {
    id: '20',
    title: 'Government e-Marketplace (GeM)',
    description: 'Online procurement platform for government buyers to purchase goods and services from registered sellers including MSMEs with various benefits.',
    eligibility: 'All MSMEs with valid Udyam Registration',
    benefits: ['Direct access to government buyers', 'No fees for registration or sale', '25% procurement reserved for MSEs', 'Timely payments'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Market Access',
    category: 'Government Procurement',
    ministry: 'Ministry of Commerce',
    applicationSteps: [
      'Register as seller on GeM portal',
      'Complete Udyam registration linkage',
      'Upload product/service catalog',
      'Participate in bids and direct purchases',
      'Fulfill orders and receive payment'
    ],
    externalLink: 'https://gem.gov.in'
  },
  {
    id: '21',
    title: 'Trade Receivables Discounting System (TReDS)',
    description: 'Electronic platform for financing trade receivables of MSMEs from corporate and government buyers through multiple financiers.',
    eligibility: 'MSMEs as sellers with buyers registered on TReDS platforms (RXIL, A.TReDS, M1xchange)',
    benefits: ['Early payment against receivables', 'Competitive financing rates', 'No collateral required', 'Digital and transparent process'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Invoice Financing',
    category: 'Credit Support',
    ministry: 'RBI / Ministry of MSME',
    applicationSteps: [
      'Register on any TReDS platform',
      'Upload invoices against buyers',
      'Buyer accepts the invoice',
      'Multiple financiers bid',
      'Receive early payment at best rate'
    ],
    externalLink: 'https://msme.gov.in/treds'
  },
  {
    id: '22',
    title: 'Market Development Assistance (MDA) Scheme',
    description: 'Financial assistance to MSMEs for participation in international trade fairs and exhibitions abroad to showcase products and explore export markets.',
    eligibility: 'MSMEs registered with FIEO or EPCH participating in approved international fairs',
    benefits: ['Airfare subsidy up to Rs. 1.5 Lakhs', 'Space rental subsidy', 'Shipping cost assistance', 'Support for buyer-seller meets'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Export Promotion',
    ministry: 'Ministry of Commerce / MSME',
    applicationSteps: [
      'Identify approved international fair',
      'Register through Export Promotion Council',
      'Submit application before fair',
      'Participate in the fair',
      'Claim reimbursement with bills'
    ],
    externalLink: 'https://commerce.gov.in'
  },
  {
    id: '23',
    title: 'International Cooperation Scheme',
    description: 'Encourages MSMEs to participate in international exhibitions, study missions, and technology exchange programs with foreign countries.',
    eligibility: 'MSME representatives, industry associations, and individual MSMEs',
    benefits: ['Participation support in international exhibitions', 'Funding for technology acquisition', 'Study mission sponsorship', 'Business delegation support'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Export Promotion',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Apply through MSME-DI',
      'Submit proposal for participation',
      'Selection by screening committee',
      'Participate in event/mission',
      'Submit utilization report'
    ],
    externalLink: 'https://msme.gov.in/international-cooperation'
  },
  {
    id: '24',
    title: 'Procurement and Marketing Support Scheme (P&MS)',
    description: 'Enhances competitiveness of MSMEs through skill development, improved packaging, participation in exhibitions, and buyer-seller meets.',
    eligibility: 'All MSMEs, industry associations, and State MSME bodies',
    benefits: ['Participation subsidy in trade fairs', 'Packaging development support', 'Skill development programs', 'Geographical indication support'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Marketing Support',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Apply through State MSME office',
      'Submit participation request',
      'Approval for participation',
      'Participate in event',
      'Claim subsidies'
    ],
    externalLink: 'https://msme.gov.in/procurement-and-marketing-support'
  },
  {
    id: '25',
    title: 'National SC/ST Hub',
    description: 'Provides professional support to SC/ST entrepreneurs for participation in public procurement, expanding into new markets, and capacity building.',
    eligibility: 'SC/ST entrepreneurs and MSMEs owned by SC/ST',
    benefits: ['Handholding support', 'Vendor development programs', 'Credit facilitation', 'Market access support', 'Skill development'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Support Services',
    category: 'Women & SC/ST',
    ministry: 'Ministry of MSME (NSIC)',
    applicationSteps: [
      'Register on National SC/ST Hub portal',
      'Access free services and schemes',
      'Participate in vendor development programs',
      'Get handholding support',
      'Access credit facilitation'
    ],
    externalLink: 'https://www.scsthub.in'
  },
  {
    id: '26',
    title: 'Entrepreneurship and Skill Development Programme (ESDP)',
    description: 'Short-term entrepreneurship development programs conducted through MSME-DIs to develop new entrepreneurs and upgrade skills of existing ones.',
    eligibility: 'Aspiring entrepreneurs, existing MSME entrepreneurs, unemployed youth',
    benefits: ['Free training programs', 'Industry exposure visits', 'Practical hands-on training', 'Linkages to credit and markets'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Training',
    category: 'Skill Development',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Contact nearest MSME-DI',
      'Apply for relevant EDP/SDP',
      'Attend selection process',
      'Complete training program',
      'Receive certificate and support'
    ],
    externalLink: 'https://dcmsme.gov.in'
  },
  {
    id: '27',
    title: 'Lean Manufacturing Competitiveness Scheme',
    description: 'Helps MSMEs reduce waste, increase productivity, and improve quality through lean manufacturing techniques with financial support from government.',
    eligibility: 'Manufacturing MSMEs willing to adopt lean practices',
    benefits: ['80% government contribution for lean consultant', 'Productivity improvement', 'Cost reduction techniques', 'Quality enhancement'],
    industry: 'Manufacturing',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Quality & Competitiveness',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Form cluster of 10+ MSMEs',
      'Engage empaneled lean consultant',
      'Submit application to MSME-DI',
      'Implement lean practices',
      'Claim government contribution'
    ],
    externalLink: 'https://msme.gov.in/lean-manufacturing-competitiveness'
  },
  {
    id: '28',
    title: 'Design Clinic Scheme',
    description: 'Brings design expertise to MSMEs to enhance their products design and packaging through engagement with professional designers.',
    eligibility: 'All MSMEs seeking design improvement for their products',
    benefits: ['60% government contribution for design projects', 'Access to NID design experts', 'Product design improvement', 'Packaging design support'],
    industry: 'Manufacturing',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Design & Innovation',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Apply through Design Clinic portal',
      'Submit design requirement',
      'Matching with design expert',
      'Design project execution',
      'Claim government contribution'
    ],
    externalLink: 'https://designclinic.dcmsme.gov.in'
  },
  {
    id: '29',
    title: 'Intellectual Property Facilitation Centre (IPFC)',
    description: 'Provides guidance and financial support to MSMEs for filing and registering patents, trademarks, GIs, and designs.',
    eligibility: 'All MSMEs seeking IP protection for their innovations',
    benefits: ['Free IP guidance and awareness', 'Subsidy for patent/trademark filing', 'IP audit support', 'Legal support for IP'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Innovation & IP',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Contact nearest IPFC',
      'Get guidance on IP protection',
      'File IP application',
      'Claim subsidy for filing costs',
      'Get support for IP management'
    ],
    externalLink: 'https://msme.gov.in/ip-facilitation-centre'
  },
  {
    id: '30',
    title: 'Building Awareness on Intellectual Property Rights (IPR)',
    description: 'Creates awareness and provides financial support to MSMEs for IP protection including patents, GIs, trademarks, and designs.',
    eligibility: 'MSMEs innovating and creating new products/processes',
    benefits: ['Reimbursement of patent filing fees', 'GI registration support', 'Trademark filing assistance', 'IP awareness programs'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Innovation & IP',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Register innovation with MSME',
      'File IP application',
      'Submit reimbursement claim',
      'Verification by MSME-DI',
      'Reimbursement credited'
    ],
    externalLink: 'https://dcmsme.gov.in/schemes/IPR.htm'
  },
  {
    id: '31',
    title: 'SIDBI Make in India Soft Loan Fund (SMILE)',
    description: 'SIDBI provides soft loans to MSMEs for meeting funding requirements including working capital and term loan with focus on startup and entrepreneurship.',
    eligibility: 'MSMEs and startups, especially in manufacturing',
    benefits: ['Soft loans at concessional rates', 'Quick disbursement', 'Minimal documentation', 'Flexible repayment'],
    industry: 'Manufacturing',
    location: 'Pan India',
    fundingType: 'Loan',
    category: 'Credit Support',
    ministry: 'SIDBI',
    applicationSteps: [
      'Apply through SIDBI website or branch',
      'Submit business documents',
      'Credit appraisal',
      'Loan sanction',
      'Disbursement'
    ],
    externalLink: 'https://www.sidbi.in'
  },
  {
    id: '32',
    title: 'Fund of Funds for Startups (FFS)',
    description: 'Rs. 10,000 Crore fund established under Startup India to provide funding support through SEBI registered AIFs to startups.',
    eligibility: 'DPIIT recognized startups through SEBI registered AIFs',
    benefits: ['Access to equity funding', 'Growth capital availability', 'Professional fund management', 'Investor connect'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Equity',
    category: 'Startup Funding',
    ministry: 'Ministry of Commerce (DPIIT) / SIDBI',
    applicationSteps: [
      'Get DPIIT recognition',
      'Connect with registered AIF',
      'Pitch for funding',
      'Due diligence and investment',
      'Growth and scale'
    ],
    externalLink: 'https://startupindia.gov.in/fund-of-funds'
  },
  {
    id: '33',
    title: 'Venture Capital Assistance Scheme',
    description: 'NABARD provides venture capital assistance to agri-business and rural enterprises for innovative projects.',
    eligibility: 'Agri-business enterprises with innovative projects',
    benefits: ['Venture capital up to Rs. 50 Lakhs', 'Soft loan with deferred repayment', 'Equity-type funding'],
    industry: 'Agri-Business',
    location: 'Pan India',
    fundingType: 'Venture Capital',
    category: 'Agri-Business',
    ministry: 'NABARD',
    applicationSteps: [
      'Submit project proposal to NABARD',
      'Technical evaluation',
      'Financial appraisal',
      'Sanction and agreement',
      'Fund disbursement'
    ],
    externalLink: 'https://www.nabard.org'
  },
  {
    id: '34',
    title: 'Dairy Entrepreneurship Development Scheme (DEDS)',
    description: 'Provides financial assistance for setting up small dairy units, heifer rearing, milk processing equipment, and related infrastructure.',
    eligibility: 'Farmers, individual entrepreneurs, SHGs, Dairy cooperatives',
    benefits: ['Subsidy of 25-33.33% depending on category', 'Loan for dairy infrastructure', 'Support for milk processing units'],
    industry: 'Dairy',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Agri-Business',
    ministry: 'Ministry of Fisheries, Animal Husbandry and Dairying',
    applicationSteps: [
      'Apply through NABARD or designated bank',
      'Submit project proposal',
      'Site inspection and evaluation',
      'Loan sanction with subsidy',
      'Implementation and subsidy claim'
    ],
    externalLink: 'https://dahd.nic.in'
  },
  {
    id: '35',
    title: 'Agricultural and Processed Food Products Export Development Authority (APEDA) Schemes',
    description: 'Various schemes for development and promotion of export of agricultural and processed food products.',
    eligibility: 'Food processing MSMEs registered with APEDA',
    benefits: ['Infrastructure development assistance', 'Quality development support', 'Market development assistance', 'Transport assistance'],
    industry: 'Food Processing',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Export Promotion',
    ministry: 'Ministry of Commerce (APEDA)',
    applicationSteps: [
      'Register with APEDA',
      'Apply for relevant scheme',
      'Submit project proposal',
      'Approval and implementation',
      'Claim assistance'
    ],
    externalLink: 'https://apeda.gov.in'
  },
  {
    id: '36',
    title: 'Pradhan Mantri Kisan SAMPADA Yojana',
    description: 'Umbrella scheme for food processing sector development including mega food parks, cold chain, food processing units, and agro-processing clusters.',
    eligibility: 'Food processing MSMEs, entrepreneurs, cooperatives, SHGs',
    benefits: ['Grants up to 35-75% of eligible project cost', 'Support for infrastructure and equipment', 'Cold chain development support'],
    industry: 'Food Processing',
    location: 'Pan India',
    fundingType: 'Grant',
    category: 'Food Processing',
    ministry: 'Ministry of Food Processing Industries',
    applicationSteps: [
      'Apply through MOFPI portal',
      'Submit detailed project report',
      'Evaluation by IMAC',
      'Approval and agreement',
      'Implementation and grant release'
    ],
    externalLink: 'https://mofpi.nic.in/pmksy'
  },
  {
    id: '37',
    title: 'Production Linked Incentive (PLI) Scheme for Food Processing',
    description: 'Incentivizes manufacturing of food products in India with sales-based incentive to promote local manufacturing and exports.',
    eligibility: 'Food processing companies meeting minimum sales and investment criteria',
    benefits: ['Incentive of 4-10% on incremental sales', 'Valid for 6 years', 'Support for branding and marketing'],
    industry: 'Food Processing',
    location: 'Pan India',
    fundingType: 'Incentive',
    category: 'Food Processing',
    ministry: 'Ministry of Food Processing Industries',
    applicationSteps: [
      'Apply during open window',
      'Submit investment and sales projections',
      'Evaluation and selection',
      'Agreement signing',
      'Claim incentives based on sales'
    ],
    externalLink: 'https://www.plifpi.in'
  },
  {
    id: '38',
    title: 'PM Formalization of Micro Food Processing Enterprises (PM FME)',
    description: 'Provides financial, technical, and business support for upgradation of existing micro food processing enterprises.',
    eligibility: 'Existing micro food processing units, FPOs, SHGs, Cooperatives',
    benefits: ['Credit-linked capital subsidy of 35%', 'Maximum subsidy of Rs. 10 Lakhs', 'Support for One District One Product'],
    industry: 'Food Processing',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Food Processing',
    ministry: 'Ministry of Food Processing Industries',
    applicationSteps: [
      'Apply through State nodal agency',
      'Submit application with DPR',
      'Bank sanctions loan',
      'Subsidy linked to loan',
      'Unit upgradation and subsidy claim'
    ],
    externalLink: 'https://pmfme.mofpi.gov.in'
  },
  {
    id: '39',
    title: 'National Beekeeping & Honey Mission (NBHM)',
    description: 'Promotes scientific beekeeping to achieve Sweet Revolution with focus on infrastructure development, capacity building, and market access.',
    eligibility: 'Beekeepers, FPOs, entrepreneurs in honey and bee products',
    benefits: ['Subsidy for beekeeping equipment', 'Honey testing laboratory support', 'Training and capacity building', 'Market development assistance'],
    industry: 'Beekeeping',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Agri-Business',
    ministry: 'Ministry of Agriculture',
    applicationSteps: [
      'Apply through State agriculture department',
      'Submit proposal for assistance',
      'Approval by state/national committee',
      'Procurement and setup',
      'Training completion'
    ],
    externalLink: 'https://nbb.gov.in'
  },
  {
    id: '40',
    title: 'Skill India - PMKVY for MSMEs',
    description: 'Short-term skill development training aligned to industry needs with focus on MSME sector skill requirements.',
    eligibility: 'Indian nationals seeking skill training for MSME employment',
    benefits: ['Free skill training', 'Industry-aligned curriculum', 'Certification and assessment', 'Placement assistance'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Training',
    category: 'Skill Development',
    ministry: 'Ministry of Skill Development',
    applicationSteps: [
      'Register on Skill India portal',
      'Select training program',
      'Complete training at authorized center',
      'Assessment and certification',
      'Placement support'
    ],
    externalLink: 'https://skillindia.gov.in'
  },
  {
    id: '41',
    title: 'NITI Aayog Women Entrepreneurship Platform (WEP)',
    description: 'Platform to promote and support women entrepreneurs through mentorship, funding, compliance, and market access.',
    eligibility: 'Women entrepreneurs and women-owned enterprises',
    benefits: ['Access to mentors and incubators', 'Funding connect', 'Compliance support', 'Marketing assistance'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Support Services',
    category: 'Women & SC/ST',
    ministry: 'NITI Aayog',
    applicationSteps: [
      'Register on WEP platform',
      'Complete entrepreneur profile',
      'Access free resources',
      'Connect with mentors',
      'Apply for support services'
    ],
    externalLink: 'https://wep.gov.in'
  },
  {
    id: '42',
    title: 'Mahila Coir Yojana',
    description: 'Provides spinning equipment to women artisans in coir industry for self-employment and income generation.',
    eligibility: 'Women above 18 years from coir producing states',
    benefits: ['75% subsidy on spinning equipment', 'Motorized ratts at subsidized cost', 'Training in coir processing'],
    industry: 'Coir',
    location: 'Coir Producing States',
    fundingType: 'Subsidy',
    category: 'Women & SC/ST',
    ministry: 'Ministry of MSME (Coir Board)',
    applicationSteps: [
      'Apply through Coir Board office',
      'Submit required documents',
      'Verification and approval',
      'Equipment distribution',
      'Training completion'
    ],
    externalLink: 'https://coirboard.gov.in'
  },
  {
    id: '43',
    title: 'Scheme for Women in Distress',
    description: 'Support for women in distress to start micro-enterprises through training, financial assistance, and market linkage.',
    eligibility: 'Women facing distress including widows, divorced, deserted women',
    benefits: ['Skill training', 'Micro-enterprise support', 'Working capital assistance', 'Marketing support'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Grant',
    category: 'Women & SC/ST',
    ministry: 'Ministry of Women and Child Development',
    applicationSteps: [
      'Apply through Women Development Corporation',
      'Counseling and identification',
      'Skill training',
      'Enterprise setup support',
      'Follow-up assistance'
    ],
    externalLink: 'https://wcd.nic.in'
  },
  {
    id: '44',
    title: 'Khadi Gramodyog Vikas Yojana',
    description: 'Comprehensive scheme for development of khadi and village industries including production, marketing, and skill development.',
    eligibility: 'Khadi institutions, artisans, village industry units',
    benefits: ['Interest subsidy on loans', 'Market development assistance', 'Infrastructure support', 'Skill training'],
    industry: 'Khadi & Village Industries',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Traditional Industries',
    ministry: 'Ministry of MSME (KVIC)',
    applicationSteps: [
      'Apply through KVIC or KVIB',
      'Submit proposal',
      'Evaluation and approval',
      'Implementation',
      'Claim benefits'
    ],
    externalLink: 'https://www.kvic.gov.in'
  },
  {
    id: '45',
    title: 'Coir Udyami Yojana (CUY)',
    description: 'Credit-linked subsidy scheme for setting up coir units with modern machinery for defibering, processing, and value addition.',
    eligibility: 'Individuals above 18 years from coir producing regions',
    benefits: ['40% subsidy (50% for women/SC/ST)', 'Maximum project cost Rs. 10 Lakhs', 'Machinery and working capital support'],
    industry: 'Coir',
    location: 'Coir Producing States',
    fundingType: 'Subsidy',
    category: 'Traditional Industries',
    ministry: 'Ministry of MSME (Coir Board)',
    applicationSteps: [
      'Apply to Coir Board',
      'Submit project proposal',
      'Bank sanctions loan',
      'Unit setup',
      'Subsidy release after inspection'
    ],
    externalLink: 'https://coirboard.gov.in'
  },
  {
    id: '46',
    title: 'National Handicraft Development Programme',
    description: 'Comprehensive development of handicrafts sector including artisan welfare, design development, marketing, and infrastructure.',
    eligibility: 'Handicraft artisans with Pehchan card',
    benefits: ['Design and technical upgradation', 'Marketing support', 'Baba Saheb Ambedkar Hastshilp Vikas Yojana', 'Direct benefit transfer'],
    industry: 'Handicrafts',
    location: 'Pan India',
    fundingType: 'Multiple',
    category: 'Traditional Industries',
    ministry: 'Ministry of Textiles',
    applicationSteps: [
      'Register for Pehchan Card',
      'Apply for relevant component',
      'Verification and approval',
      'Avail benefits',
      'Compliance and reporting'
    ],
    externalLink: 'https://handicrafts.nic.in'
  },
  {
    id: '47',
    title: 'PowerTex India Scheme',
    description: 'Comprehensive scheme for development of powerloom sector including modern technology, product diversification, and market access.',
    eligibility: 'Powerloom units and weavers',
    benefits: ['Technology upgradation subsidy', 'Yarn bank assistance', 'Common facility centres', 'Solar energy support'],
    industry: 'Powerloom Textiles',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Sector Specific',
    ministry: 'Ministry of Textiles',
    applicationSteps: [
      'Apply through State textile department',
      'Submit project proposal',
      'Technical evaluation',
      'Approval and implementation',
      'Subsidy disbursement'
    ],
    externalLink: 'https://texmin.nic.in'
  },
  {
    id: '48',
    title: 'Scheme for Integrated Textile Parks (SITP)',
    description: 'Provides world-class infrastructure for setting up textile units with plug-and-play facilities.',
    eligibility: 'SPVs setting up textile parks, textile MSMEs',
    benefits: ['Government grant up to Rs. 40 Crore per park', 'Common infrastructure facilities', 'Technology support'],
    industry: 'Textiles',
    location: 'Pan India',
    fundingType: 'Grant',
    category: 'Sector Specific',
    ministry: 'Ministry of Textiles',
    applicationSteps: [
      'Form SPV with participating units',
      'Submit DPR to Ministry',
      'Evaluation and approval',
      'Park development',
      'Grant release in phases'
    ],
    externalLink: 'https://texmin.nic.in'
  },
  {
    id: '49',
    title: 'Solar Charkha Mission',
    description: 'Promotes use of solar energy in khadi spinning and weaving with focus on employment generation in rural areas.',
    eligibility: 'Khadi institutions, spinners, weavers',
    benefits: ['Solar charkha clusters', 'Employment for 50 spinners per cluster', 'Green and sustainable production'],
    industry: 'Khadi',
    location: 'Pan India',
    fundingType: 'Grant',
    category: 'Traditional Industries',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Apply through implementing agency',
      'Form cluster with artisans',
      'Setup approval',
      'Equipment installation',
      'Training and production'
    ],
    externalLink: 'https://solarcharkha.kvic.gov.in'
  },
  {
    id: '50',
    title: 'Digital MSME Scheme',
    description: 'Promotes adoption of ICT and cloud computing among MSMEs to improve competitiveness and market access.',
    eligibility: 'All MSMEs willing to adopt digital technologies',
    benefits: ['Subsidized cloud services', 'ERP solutions', 'Digital marketing support', 'E-commerce enablement'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Digital Transformation',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Register on Digital MSME portal',
      'Select required digital service',
      'Apply for subsidy',
      'Implementation',
      'Claim benefits'
    ],
    externalLink: 'https://digitalmsme.gov.in'
  },
  {
    id: '51',
    title: 'MSME Sustainable (ZED) Certification',
    description: 'Zero Defect Zero Effect certification scheme promoting manufacturing excellence with environmental sustainability.',
    eligibility: 'All manufacturing MSMEs with Udyam registration',
    benefits: ['Up to 80% certification cost subsidy', 'Access to handholding support', 'Priority in government procurement', 'Branding benefits'],
    industry: 'Manufacturing',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Quality & Sustainability',
    ministry: 'Ministry of MSME',
    applicationSteps: [
      'Register on ZED portal',
      'Complete self-assessment',
      'Apply for certification',
      'Third-party audit',
      'Certification and benefits'
    ],
    externalLink: 'https://zed.msme.gov.in'
  },
  {
    id: '52',
    title: 'SAMARTH - Scheme for Capacity Building in Textile Sector',
    description: 'Skill development scheme specifically for textile sector covering entire value chain from fiber to retail.',
    eligibility: 'Unemployed youth seeking jobs in textile sector',
    benefits: ['Free skill training', 'Industry-relevant curriculum', 'Placement assistance', 'Certification'],
    industry: 'Textiles',
    location: 'Pan India',
    fundingType: 'Training',
    category: 'Skill Development',
    ministry: 'Ministry of Textiles',
    applicationSteps: [
      'Apply through authorized training partner',
      'Complete enrollment',
      'Attend training',
      'Assessment and certification',
      'Placement support'
    ],
    externalLink: 'https://samarth-textiles.gov.in'
  },
  {
    id: '53',
    title: 'North East Industrial Development Scheme (NEIDS)',
    description: 'Promotes industrialization in North Eastern region including Sikkim through various incentives for MSMEs.',
    eligibility: 'MSMEs setting up units in NE states including Sikkim',
    benefits: ['Capital investment incentive up to Rs. 5 Crore', 'Interest subvention of 3%', 'GST reimbursement', 'Transport subsidy'],
    industry: 'Manufacturing, Services',
    location: 'North East India & Sikkim',
    fundingType: 'Incentive',
    category: 'Regional Development',
    ministry: 'Ministry of Commerce (DPIIT)',
    applicationSteps: [
      'Register unit in NE region',
      'Apply through DPIIT portal',
      'Submit required documents',
      'Verification by state/central agencies',
      'Incentive disbursement'
    ],
    externalLink: 'https://dpiit.gov.in'
  },
  {
    id: '54',
    title: 'Industrial Development Scheme for Himachal Pradesh & Uttarakhand',
    description: 'Provides incentives for industrial development in hilly states including capital subsidy and transport assistance.',
    eligibility: 'MSMEs in Himachal Pradesh and Uttarakhand',
    benefits: ['Capital subsidy', 'Interest subvention', 'Transport subsidy for raw materials and finished goods'],
    industry: 'Manufacturing',
    location: 'Himachal Pradesh, Uttarakhand',
    fundingType: 'Subsidy',
    category: 'Regional Development',
    ministry: 'Ministry of Commerce',
    applicationSteps: [
      'Setup unit in eligible area',
      'Apply for incentives',
      'Document submission',
      'Verification',
      'Incentive release'
    ],
    externalLink: 'https://dpiit.gov.in'
  },
  {
    id: '55',
    title: 'India BPO Promotion Scheme (IBPS)',
    description: 'Promotes IT/ITeS industry in smaller cities by providing viability gap funding for BPO/ITES operations.',
    eligibility: 'IT/ITES companies setting up BPO operations in tier-2/3 cities',
    benefits: ['Viability gap funding up to Rs. 1 Lakh per seat', 'Support for up to 48,300 seats across India', 'Training support'],
    industry: 'IT/ITES',
    location: 'Tier 2 & 3 Cities',
    fundingType: 'Subsidy',
    category: 'Regional Development',
    ministry: 'Ministry of Electronics and IT',
    applicationSteps: [
      'Apply during open tender',
      'Submit bid with city and seat details',
      'Evaluation and selection',
      'Agreement and setup',
      'Claim incentives on milestones'
    ],
    externalLink: 'https://meity.gov.in'
  },
  {
    id: '56',
    title: 'Modified Special Incentive Package Scheme (M-SIPS)',
    description: 'Incentivizes investments in electronics manufacturing with capital subsidy for semiconductor and electronics units.',
    eligibility: 'Electronics manufacturing companies meeting minimum investment criteria',
    benefits: ['Capital subsidy of 20-25%', 'Reimbursement of CVD/excise for capital equipment', 'Support for R&D'],
    industry: 'Electronics Manufacturing',
    location: 'Pan India',
    fundingType: 'Subsidy',
    category: 'Electronics',
    ministry: 'Ministry of Electronics and IT',
    applicationSteps: [
      'Apply through MeitY portal',
      'Submit investment proposal',
      'Evaluation by appraisal committee',
      'Approval and agreement',
      'Incentive disbursement on milestones'
    ],
    externalLink: 'https://meity.gov.in'
  },
  {
    id: '57',
    title: 'Production Linked Incentive for Large Scale Electronics Manufacturing',
    description: 'Incentivizes domestic manufacturing and attract large investments in mobile phone and electronic components manufacturing.',
    eligibility: 'Companies meeting minimum investment and production criteria in electronics',
    benefits: ['Incentive of 4-6% on incremental sales', 'Valid for 5 years', 'Applicable for mobile phones and components'],
    industry: 'Electronics',
    location: 'Pan India',
    fundingType: 'Incentive',
    category: 'Electronics',
    ministry: 'Ministry of Electronics and IT',
    applicationSteps: [
      'Apply during open window',
      'Submit investment and production plan',
      'Evaluation and approval',
      'Agreement signing',
      'Claim incentives based on sales'
    ],
    externalLink: 'https://pli-scheme.in'
  },
  {
    id: '58',
    title: 'EMC 2.0 - Electronics Manufacturing Clusters',
    description: 'Establishes electronics manufacturing clusters with common facility centers and plug-and-play infrastructure.',
    eligibility: 'State governments, SPVs for cluster development',
    benefits: ['Grant of 50% of project cost', 'Maximum Rs. 70 Crore for Greenfield EMC', 'Rs. 50 Crore for CFC'],
    industry: 'Electronics',
    location: 'Pan India',
    fundingType: 'Grant',
    category: 'Electronics',
    ministry: 'Ministry of Electronics and IT',
    applicationSteps: [
      'State/SPV submits proposal',
      'DPR evaluation',
      'In-principle approval',
      'Infrastructure development',
      'Grant release in phases'
    ],
    externalLink: 'https://meity.gov.in'
  },
  {
    id: '59',
    title: 'Support for International Patent Protection in E&IT (SIP-EIT)',
    description: 'Provides financial support to MSMEs and startups for international patent filing in electronics and IT sector.',
    eligibility: 'Startups and MSMEs in electronics and IT sector',
    benefits: ['Reimbursement up to Rs. 15 Lakhs for international patent', 'Rs. 5 Lakhs for domestic patent', 'Support for PCT applications'],
    industry: 'Electronics, IT',
    location: 'Pan India',
    fundingType: 'Reimbursement',
    category: 'Innovation & IP',
    ministry: 'Ministry of Electronics and IT',
    applicationSteps: [
      'File patent application',
      'Apply for reimbursement',
      'Submit documents and receipts',
      'Evaluation and approval',
      'Reimbursement credit'
    ],
    externalLink: 'https://meity.gov.in'
  },
  {
    id: '60',
    title: 'Multiplier Grants Scheme (MGS)',
    description: 'Encourages collaborative R&D between industry and academic/research institutions with government matching contribution.',
    eligibility: 'Industry-academia collaborative R&D projects in electronics/IT',
    benefits: ['Government contribution of up to 2x industry contribution', 'Maximum Rs. 2 Crore per project', 'Support for product development'],
    industry: 'Electronics, IT',
    location: 'Pan India',
    fundingType: 'Grant',
    category: 'R&D',
    ministry: 'Ministry of Electronics and IT',
    applicationSteps: [
      'Form industry-academia consortium',
      'Submit joint proposal',
      'Technical evaluation',
      'Approval and agreement',
      'Project execution and fund release'
    ],
    externalLink: 'https://meity.gov.in'
  },
  {
    id: '61',
    title: 'Software Technology Parks of India (STPI)',
    description: 'Provides infrastructure and statutory services for IT/ITES exporters including incubation support for startups.',
    eligibility: 'IT/ITES export units',
    benefits: ['Single window clearance', 'Incubation space for startups', 'Data communication facilities', 'Export certification'],
    industry: 'IT/ITES',
    location: 'Pan India',
    fundingType: 'Infrastructure',
    category: 'IT/ITES',
    ministry: 'Ministry of Electronics and IT',
    applicationSteps: [
      'Apply for STPI registration',
      'Submit export plan',
      'Registration approval',
      'Avail infrastructure services',
      'Export and compliance'
    ],
    externalLink: 'https://www.stpi.in'
  },
  {
    id: '62',
    title: 'Scheme for Legal Metrology',
    description: 'Ensures standardization of weights and measures for fair trade practices with support for MSMEs in compliance.',
    eligibility: 'MSMEs using weights and measures in trade',
    benefits: ['Certification support', 'Training on compliance', 'Grievance redressal'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Support Services',
    category: 'Compliance',
    ministry: 'Ministry of Consumer Affairs',
    applicationSteps: [
      'Apply for verification of weights/measures',
      'Inspection by legal metrology officer',
      'Certification issuance',
      'Periodic re-verification'
    ],
    externalLink: 'https://consumeraffairs.nic.in'
  },
  {
    id: '63',
    title: 'BIS Certification Scheme for MSMEs',
    description: 'Provides concessional fee structure for MSMEs obtaining BIS certification for their products.',
    eligibility: 'MSMEs seeking BIS certification',
    benefits: ['50% concession in BIS fees', 'Simplified procedures', 'Technical guidance'],
    industry: 'Manufacturing',
    location: 'Pan India',
    fundingType: 'Concession',
    category: 'Quality Certification',
    ministry: 'Ministry of Consumer Affairs (BIS)',
    applicationSteps: [
      'Apply for BIS license with Udyam registration',
      'Factory inspection',
      'Testing and compliance',
      'License issuance at concessional fee'
    ],
    externalLink: 'https://www.bis.gov.in'
  },
  {
    id: '64',
    title: 'NABL Accreditation Scheme',
    description: 'Provides accreditation to testing and calibration laboratories with support for MSME testing facilities.',
    eligibility: 'Testing laboratories including those of MSMEs',
    benefits: ['International recognition', 'Quality assurance', 'Market access'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Accreditation',
    category: 'Quality Certification',
    ministry: 'Department of Science and Technology',
    applicationSteps: [
      'Apply for NABL accreditation',
      'Document submission',
      'Assessment visit',
      'Compliance and accreditation',
      'Surveillance audits'
    ],
    externalLink: 'https://nabl-india.org'
  },
  {
    id: '65',
    title: 'Export Credit Guarantee Corporation (ECGC) Cover',
    description: 'Provides credit risk insurance and related services to exporters including MSMEs to protect against export payment risks.',
    eligibility: 'Exporting MSMEs',
    benefits: ['Export credit insurance', 'Buyer credit rating', 'Post-shipment credit guarantee', 'Overseas investment insurance'],
    industry: 'All Export Industries',
    location: 'Pan India',
    fundingType: 'Insurance',
    category: 'Export Promotion',
    ministry: 'Ministry of Commerce',
    applicationSteps: [
      'Apply for ECGC policy',
      'Submit buyer and shipment details',
      'Premium payment',
      'Policy issuance',
      'Claim settlement if buyer defaults'
    ],
    externalLink: 'https://www.ecgc.in'
  },
  {
    id: '66',
    title: 'Interest Equalization Scheme on Pre and Post Shipment Rupee Export Credit',
    description: 'Provides interest equalization of 3% to identified export sectors and 5% to MSME exporters.',
    eligibility: 'MSME manufacturers and merchant exporters in identified sectors',
    benefits: ['3% interest equalization for identified sectors', '5% for MSME manufacturers', 'Applicable on pre and post shipment credit'],
    industry: 'Export Sectors',
    location: 'Pan India',
    fundingType: 'Interest Subsidy',
    category: 'Export Promotion',
    ministry: 'Ministry of Commerce',
    applicationSteps: [
      'Avail export credit from bank',
      'Bank applies interest equalization',
      'Automatic benefit on eligible credit',
      'Bank claims from RBI'
    ],
    externalLink: 'https://dgft.gov.in'
  },
  {
    id: '67',
    title: 'Remission of Duties and Taxes on Exported Products (RoDTEP)',
    description: 'Provides refund of embedded taxes and duties on exported products not refunded through other mechanisms.',
    eligibility: 'All exporters including MSMEs',
    benefits: ['Refund of embedded taxes', 'Duty credit scrips', 'Improved export competitiveness'],
    industry: 'All Export Industries',
    location: 'Pan India',
    fundingType: 'Duty Refund',
    category: 'Export Promotion',
    ministry: 'Ministry of Commerce',
    applicationSteps: [
      'Export goods under shipping bill',
      'File RODTEP claim online',
      'Verification by customs',
      'Duty credit scrips issued',
      'Use for duty payment or transfer'
    ],
    externalLink: 'https://www.icegate.gov.in'
  },
  {
    id: '68',
    title: 'Export Promotion Capital Goods (EPCG) Scheme',
    description: 'Allows import of capital goods at zero duty for export production with export obligation.',
    eligibility: 'Exporters including manufacturer exporters and merchant exporters',
    benefits: ['Zero duty on capital goods import', 'Export obligation over 6 years', 'Covers new and second-hand machinery'],
    industry: 'All Export Industries',
    location: 'Pan India',
    fundingType: 'Duty Exemption',
    category: 'Export Promotion',
    ministry: 'Ministry of Commerce (DGFT)',
    applicationSteps: [
      'Apply for EPCG license',
      'Submit export plan',
      'License issuance',
      'Import capital goods',
      'Fulfill export obligation'
    ],
    externalLink: 'https://dgft.gov.in'
  },
  {
    id: '69',
    title: 'Advance Authorization Scheme',
    description: 'Allows duty-free import of inputs for export production including for MSMEs with annual requirement based advance authorization.',
    eligibility: 'Exporters with export plan',
    benefits: ['Duty-free import of inputs', 'Annual requirement based authorization for MSMEs', 'Covers all inputs for export production'],
    industry: 'Manufacturing for Export',
    location: 'Pan India',
    fundingType: 'Duty Exemption',
    category: 'Export Promotion',
    ministry: 'Ministry of Commerce (DGFT)',
    applicationSteps: [
      'Apply for advance authorization',
      'Submit input-output norms',
      'Authorization issuance',
      'Duty-free import',
      'Export obligation fulfillment'
    ],
    externalLink: 'https://dgft.gov.in'
  },
  {
    id: '70',
    title: 'Niryat Bandhu Scheme',
    description: 'Provides handholding support to first generation entrepreneurs to make them export-ready and connect with global markets.',
    eligibility: 'First-time exporters, especially MSMEs',
    benefits: ['Free training on export procedures', 'Documentation guidance', 'Market information', 'Mentorship support'],
    industry: 'All Export Industries',
    location: 'Pan India',
    fundingType: 'Training',
    category: 'Export Promotion',
    ministry: 'Ministry of Commerce (DGFT)',
    applicationSteps: [
      'Register for Niryat Bandhu program',
      'Attend training sessions',
      'Get export documentation guidance',
      'Mentorship and handholding',
      'Start exporting'
    ],
    externalLink: 'https://dgft.gov.in'
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

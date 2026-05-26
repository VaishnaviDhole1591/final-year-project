export const schemes = [
  // === CREDIT & FINANCE SCHEMES ===
  {
    id: '1',
    title: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    description: 'Collateral-free loans up to Rs. 20 Lakhs for non-corporate, non-farm micro and small enterprises through banks, RRBs, NBFCs, and MFIs.',
    eligibility: 'Non-corporate, non-farm micro enterprises; Citizens aged 18-65 years',
    benefits: ['Shishu: Up to Rs. 50,000', 'Kishor: Rs. 50,001 to Rs. 5 Lakhs', 'Tarun: Rs. 5 Lakhs to Rs. 10 Lakhs', 'Tarun Plus: Rs. 10 Lakhs to Rs. 20 Lakhs', '2% interest subvention on Shishu loans for prompt payers'],
    industry: 'Manufacturing, Trading, Services',
    location: 'Pan India',
    fundingType: 'Loan',
    applicationSteps: [
      'Visit udyamimitra.in or nearest Bank/RRB/NBFC/MFI',
      'Fill MUDRA loan application form',
      'Submit KYC documents (Aadhaar, PAN)',
      'Submit business plan and projections',
      'Bank verification and approval',
      'Receive MUDRA Card for working capital'
    ],
    externalLink: 'https://www.mudra.org.in'
  },
  {
    id: '2',
    title: 'Credit Guarantee Scheme (CGTMSE)',
    description: 'Government-backed credit guarantee enabling collateral-free loans up to Rs. 10 Crore for Micro and Small Enterprises through Member Lending Institutions.',
    eligibility: 'Udyam registered Micro & Small Enterprises in Manufacturing, Service, or Trading sectors',
    benefits: ['Collateral-free loans up to Rs. 10 Crore', 'Guarantee coverage 75-90% based on category', 'Additional 5% coverage for ZED certified MSMEs', 'Coverage for fund-based and non-fund based facilities'],
    industry: 'Manufacturing, Services, Trading',
    location: 'Pan India',
    fundingType: 'Guarantee',
    applicationSteps: [
      'Ensure Udyam Registration is complete',
      'Approach any Member Lending Institution (Bank/NBFC)',
      'Submit loan application with business documents',
      'Bank evaluates and sanctions loan',
      'CGTMSE provides guarantee coverage',
      'Loan disbursement without collateral'
    ],
    externalLink: 'https://www.cgtmse.in'
  },
  {
    id: '3',
    title: 'Stand-Up India Scheme',
    description: 'Facilitates bank loans between Rs. 10 Lakh and Rs. 1 Crore for SC/ST and Women entrepreneurs setting up greenfield manufacturing or service enterprises.',
    eligibility: 'SC/ST and Women entrepreneurs (18+ years); First-time entrepreneurs setting up greenfield enterprise',
    benefits: ['Composite loans from Rs. 10 Lakh to Rs. 1 Crore', 'Includes term loan and working capital', 'CGTMSE guarantee coverage available', 'One loan per bank branch for each category'],
    industry: 'Manufacturing, Services, Trading',
    location: 'Pan India',
    fundingType: 'Loan',
    applicationSteps: [
      'Visit Stand-Up India portal (standupmitra.in)',
      'Register and create profile',
      'Submit online application',
      'Connect with nearest bank branch',
      'Document verification and processing',
      'Loan sanction and disbursement'
    ],
    externalLink: 'https://www.standupmitra.in'
  },
  {
    id: '4',
    title: 'Self Reliant India (SRI) Fund',
    description: 'Rs. 50,000 Crore Fund of Funds providing equity and quasi-equity funding to viable MSMEs with growth potential through SIDBI and empanelled PE/VC funds.',
    eligibility: 'MSMEs with growth potential and viability; Requires sound business model and scalability',
    benefits: ['Access to equity/quasi-equity funding', 'Growth capital without debt burden', 'Rs. 10,000 Crore from Government + Rs. 40,000 Crore from PE/VC', 'Additional Rs. 1,000 Crore in BE 2026-27 for micro enterprise risk capital'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Equity',
    applicationSteps: [
      'Prepare detailed business plan and financials',
      'Approach SIDBI or empanelled fund managers',
      'Submit application with required documents',
      'Due diligence by fund managers',
      'Investment committee approval',
      'Equity investment disbursement'
    ],
    externalLink: 'https://sidbi.in'
  },
  {
    id: '5',
    title: 'MSME Micro Credit Card Scheme',
    description: 'Revolving credit facility of Rs. 5 Lakh for Udyam-registered micro enterprises for day-to-day business expenses.',
    eligibility: 'Micro enterprises registered on Udyam portal',
    benefits: ['Rs. 5 Lakh revolving credit limit', 'Quick access to working capital', 'Simplified documentation', 'Target: 10 Lakh cards in first year'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Credit',
    applicationSteps: [
      'Complete Udyam Registration',
      'Approach empanelled bank through Udyam portal',
      'Submit KYC and business documents',
      'Credit assessment by bank',
      'Micro Credit Card issuance'
    ],
    externalLink: 'https://udyamregistration.gov.in'
  },

  // === CAPITAL SUBSIDY SCHEMES ===
  {
    id: '6',
    title: 'PM Employment Generation Programme (PMEGP)',
    description: 'Credit-linked capital subsidy scheme providing margin money subsidy up to 35% for setting up new micro enterprises in manufacturing and service sectors.',
    eligibility: 'Individuals 18+ years; Class VIII pass for projects above Rs. 10 Lakh (Mfg) or Rs. 5 Lakh (Service); Not availed govt subsidy earlier',
    benefits: ['Up to 35% subsidy for Special Category in rural areas', 'Up to 25% subsidy for General Category in rural areas', 'Max project: Rs. 50 Lakh (Mfg) / Rs. 20 Lakh (Service)', 'Only 5-10% own contribution required'],
    industry: 'Manufacturing, Services',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Visit KVIC portal (kviconline.gov.in/pmegpeportal)',
      'Register and fill online application',
      'Prepare Detailed Project Report (DPR)',
      'Submit to KVIC/KVIB/DIC for scrutiny',
      'Bank sanction and margin money release',
      'Start enterprise and claim subsidy'
    ],
    externalLink: 'https://kviconline.gov.in/pmegpeportal'
  },
  {
    id: '7',
    title: 'PMEGP - 2nd Loan for Upgradation',
    description: 'Capital subsidy for expansion and modernization of existing PMEGP/REGP/MUDRA units with 15-20% subsidy on project cost.',
    eligibility: 'Existing PMEGP/REGP/MUDRA units; First loan fully repaid; Profit-making for last 3 years',
    benefits: ['15% subsidy (20% for NER/Hills)', 'Max project: Rs. 1 Crore (Mfg) / Rs. 25 Lakh (Service)', 'Max subsidy: Rs. 15-20 Lakh', 'Supports business expansion and modernization'],
    industry: 'Manufacturing, Services',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Ensure first loan is fully repaid',
      'Prepare upgraded project report',
      'Apply through KVIC portal',
      'Submit profit records for last 3 years',
      'Bank appraisal and sanction',
      'Subsidy disbursement on project completion'
    ],
    externalLink: 'https://kviconline.gov.in/pmegpeportal'
  },
  {
    id: '8',
    title: 'Credit Linked Capital Subsidy Scheme (CLCSS)',
    description: '15% upfront capital subsidy on institutional credit up to Rs. 1 Crore for technology upgradation in 51 specified sub-sectors.',
    eligibility: 'Micro and Small Enterprises in 51 specified sub-sectors; For purchase of modern plant & machinery',
    benefits: ['15% capital subsidy on bank loan', 'Maximum subsidy: Rs. 15 Lakh', 'Covers 51 sub-sectors', 'Additional benefits for SC/ST, Women entrepreneurs'],
    industry: 'Manufacturing (51 sub-sectors)',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Identify technology upgradation needs',
      'Apply through Primary Lending Institution (PLI)',
      'Submit quotations for machinery/equipment',
      'PLI forwards to Nodal Agency',
      'DC-MSME approval and subsidy release',
      'Subsidy credited to loan account'
    ],
    externalLink: 'https://clcss.dcmsme.gov.in'
  },

  // === ARTISAN & TRADITIONAL INDUSTRIES ===
  {
    id: '9',
    title: 'PM Vishwakarma Yojana',
    description: 'Comprehensive support for artisans in 18 traditional trades including skill training, toolkit grant of Rs. 15,000, and collateral-free credit up to Rs. 3 Lakh at 5% interest.',
    eligibility: 'Artisans aged 18+ in 18 traditional trades; No govt credit scheme loan in last 5 years; One member per family',
    benefits: ['Toolkit grant: Rs. 15,000', 'Credit: Rs. 1 Lakh (1st) + Rs. 2 Lakh (2nd) at 5% interest', 'Training stipend: Rs. 500/day', 'Digital incentive: Rs. 1 per transaction (max 100/month)', 'PM Vishwakarma ID Card'],
    industry: 'Traditional Trades (18 categories)',
    location: 'Pan India',
    fundingType: 'Grant + Loan',
    applicationSteps: [
      'Visit pmvishwakarma.gov.in or CSC centre',
      'Register with Aadhaar and trade proof',
      'Complete biometric verification',
      'Attend basic skill training (5-7 days)',
      'Receive toolkit e-voucher',
      'Apply for credit tranche after training'
    ],
    externalLink: 'https://pmvishwakarma.gov.in'
  },
  {
    id: '10',
    title: 'SFURTI - Scheme for Traditional Industries',
    description: 'Cluster-based support for artisans in handicraft, textile, bamboo, khadi, coir, and other traditional industries with grants up to Rs. 5 Crore.',
    eligibility: 'Artisan clusters in Handicraft, Textile, Bamboo, Khadi, Coir, Honey, Agro-Processing',
    benefits: ['Up to Rs. 2.5 Crore for clusters up to 500 artisans', 'Up to Rs. 5 Crore for clusters above 500 artisans', 'Soft intervention up to Rs. 25 Lakh', '90% GoI funding (95% for NER/J&K/Hills)'],
    industry: 'Traditional Industries',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Form artisan cluster with Nodal Agency',
      'Prepare Detailed Project Report',
      'Submit application on sfurti.msme.gov.in',
      'Appraisal by Screening Committee',
      'Approval and fund release in phases',
      'Implementation and monitoring'
    ],
    externalLink: 'https://sfurti.msme.gov.in'
  },

  // === CLUSTER & INFRASTRUCTURE DEVELOPMENT ===
  {
    id: '11',
    title: 'MSE Cluster Development Programme (MSE-CDP)',
    description: 'Support for Common Facility Centres and infrastructure development in MSE clusters with GoI assistance up to 80% of project cost.',
    eligibility: 'MSE clusters forming Special Purpose Vehicle (SPV); Minimum 20 MSEs in cluster',
    benefits: ['Common Facility Centre: GoI up to 80% of max Rs. 30 Crore', 'Infrastructure Development: GoI up to 70% of max Rs. 15 Crore', 'Soft interventions for capacity building', 'Land and building support'],
    industry: 'Manufacturing, Services',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Identify cluster and form SPV',
      'Conduct diagnostic study',
      'Prepare Detailed Project Report',
      'Submit application on cluster.dcmsme.gov.in',
      'Steering Committee approval',
      'Phased fund release and implementation'
    ],
    externalLink: 'https://cluster.dcmsme.gov.in'
  },

  // === STARTUP & INNOVATION SCHEMES ===
  {
    id: '12',
    title: 'Startup India Seed Fund Scheme',
    description: 'Financial assistance to DPIIT-recognized startups for proof of concept, prototype development, product trials, market entry, and commercialization.',
    eligibility: 'DPIIT recognized startups not more than 2 years old at time of application',
    benefits: ['Up to Rs. 20 Lakhs for validation of POC/prototype', 'Up to Rs. 50 Lakhs for market entry and commercialization', 'Support through incubators', 'Mentorship and networking'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Register on Startup India portal',
      'Apply for DPIIT recognition',
      'Identify eligible incubator',
      'Submit application with required documents',
      'Pitch to incubator evaluation committee',
      'Receive funding upon approval'
    ],
    externalLink: 'https://seedfund.startupindia.gov.in'
  },
  {
    id: '13',
    title: 'Atal Innovation Mission (AIM)',
    description: 'Establishing Atal Tinkering Labs in schools and Atal Incubation Centers to promote innovation and entrepreneurship across India.',
    eligibility: 'Schools (ATL), Universities/Organizations (AIC), Research Institutions',
    benefits: ['Atal Tinkering Lab: Grant of Rs. 20 Lakhs', 'Atal Incubation Centre: Up to Rs. 10 Crore', 'Atal Community Innovation Centre', 'Mentorship and support ecosystem'],
    industry: 'Technology, Innovation',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Apply through AIM portal (aim.gov.in)',
      'Submit detailed proposal',
      'Evaluation by expert committee',
      'Selection announcement',
      'Grant disbursement in tranches',
      'Regular monitoring and mentorship'
    ],
    externalLink: 'https://aim.gov.in'
  },
  {
    id: '14',
    title: 'Technology Development Board (TDB)',
    description: 'Financial assistance for commercialization of indigenous technology and adaptation of imported technology for wider application.',
    eligibility: 'Indian companies with innovative indigenous technology; R&D institutions',
    benefits: ['Equity participation up to 50%', 'Soft loans at concessional interest rates', 'Support for technology commercialization', 'National Award for Technology Innovation'],
    industry: 'Technology',
    location: 'Pan India',
    fundingType: 'Equity/Loan',
    applicationSteps: [
      'Submit detailed proposal to TDB',
      'Technical evaluation by experts',
      'Financial appraisal',
      'Board meeting approval',
      'Agreement and fund disbursement',
      'Monitoring and milestone reviews'
    ],
    externalLink: 'https://tdb.gov.in'
  },

  // === QUALITY & CERTIFICATION ===
  {
    id: '15',
    title: 'ZED Certification Scheme',
    description: 'Zero Defect Zero Effect certification promoting quality manufacturing and environmental sustainability with subsidized certification costs.',
    eligibility: 'All MSME categories; Manufacturing and Service enterprises',
    benefits: ['Certification cost subsidy: 80% (Micro), 60% (Small), 50% (Medium)', 'Additional 5% CGTMSE guarantee cover for ZED certified', 'Quality improvement support', 'Market recognition and credibility'],
    industry: 'Manufacturing, Services',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Register on zed.org.in portal',
      'Complete self-assessment',
      'Apply for ZED certification',
      'Third-party assessment',
      'Certification (Bronze/Silver/Gold)',
      'Claim subsidy reimbursement'
    ],
    externalLink: 'https://zed.org.in'
  },
  {
    id: '16',
    title: 'ISO Certification Reimbursement',
    description: 'Reimbursement of expenses incurred by MSEs for acquiring ISO 9000/14001/22000/HACCP certifications.',
    eligibility: 'Micro and Small Enterprises; Must obtain ISO certification from accredited bodies',
    benefits: ['Reimbursement of certification fees', 'Covers ISO 9000, 14001, 22000, HACCP', 'Up to Rs. 75,000 reimbursement', 'Enhances market competitiveness'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Obtain ISO certification from accredited body',
      'Collect all certification receipts',
      'Apply to DC-MSME with documents',
      'Verification of certification',
      'Reimbursement processing',
      'Fund credit to bank account'
    ],
    externalLink: 'https://dcmsme.gov.in'
  },

  // === MARKET ACCESS & PROCUREMENT ===
  {
    id: '17',
    title: 'Government e-Marketplace (GeM)',
    description: 'Online procurement platform for government purchases with mandatory 25% procurement from MSEs including 4% from SC/ST and 3% from Women entrepreneurs.',
    eligibility: 'All MSMEs; Must be Udyam registered for MSME benefits',
    benefits: ['Direct access to government procurement', '25% procurement reserved for MSEs', '4% sub-reservation for SC/ST MSEs', '3% sub-reservation for Women MSEs', 'No middlemen, transparent pricing'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Market Access',
    applicationSteps: [
      'Register as seller on gem.gov.in',
      'Complete Udyam Registration',
      'Upload products/services catalogue',
      'Participate in bids and direct purchase',
      'Fulfill orders and receive payments',
      'Build seller ratings for more opportunities'
    ],
    externalLink: 'https://gem.gov.in'
  },
  {
    id: '18',
    title: 'National SC-ST Hub',
    description: 'Special support for SC/ST entrepreneurs including waiver of EMD/Security Deposit in government tenders and market linkage support.',
    eligibility: 'SC/ST owned MSEs; Must be Udyam registered',
    benefits: ['Waiver of Earnest Money Deposit (EMD)', 'Waiver of Security Deposit in Govt tenders', 'Special credit support', 'Market linkage and handholding', 'Vendor development programmes'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Support',
    applicationSteps: [
      'Complete Udyam Registration',
      'Register on scsthub.in portal',
      'Submit SC/ST certificate and documents',
      'Apply for vendor development programme',
      'Participate in buyer-seller meets',
      'Access special procurement opportunities'
    ],
    externalLink: 'https://scsthub.in'
  },
  {
    id: '19',
    title: 'International Trade Fair Participation',
    description: 'Financial support for MSMEs to participate in international trade fairs and exhibitions to promote exports.',
    eligibility: 'MSMEs with export potential; Registered exporters preferred',
    benefits: ['Airfare subsidy', 'Stall rental support', 'Freight charges assistance', 'Participation in prestigious global fairs', 'Export promotion support'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Identify relevant international trade fair',
      'Apply through MSME ministry or export promotion council',
      'Submit export credentials and documents',
      'Selection based on product relevance',
      'Receive participation support',
      'Post-event compliance reporting'
    ],
    externalLink: 'https://msme.gov.in'
  },

  // === DELAYED PAYMENT & GRIEVANCE ===
  {
    id: '20',
    title: 'MSME Samadhaan - Delayed Payment Portal',
    description: 'Online portal for MSMEs to file complaints against buyers for delayed payments under MSMED Act with enforceable council orders.',
    eligibility: 'Any MSME registered under Udyam with payment dues from buyers',
    benefits: ['Online complaint filing', 'Orders enforceable under MSMED Act Section 17', 'Compound interest at 3x RBI bank rate on delayed payments', 'Buyer must pay within 45 days or agreed period', 'Free of cost'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Support',
    applicationSteps: [
      'Register on samadhaan.msme.gov.in',
      'File online complaint with invoice details',
      'Upload supporting documents',
      'Case referred to MSEFC council',
      'Hearing and council decision',
      'Enforceable order for payment recovery'
    ],
    externalLink: 'https://samadhaan.msme.gov.in'
  },

  // === CAPACITY BUILDING & SKILL DEVELOPMENT ===
  {
    id: '21',
    title: 'RAMP - Raising & Accelerating MSME Performance',
    description: 'World Bank assisted programme to enhance MSME competitiveness through technology access, delayed payment resolution, and market access initiatives.',
    eligibility: 'All MSMEs; Implemented through State Governments',
    benefits: ['Technology access support', 'Delayed payment resolution', 'Market access initiatives', 'State-level MSME support programmes', 'Capacity building and skilling'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Support',
    applicationSteps: [
      'Check State MSME department for RAMP initiatives',
      'Register for relevant programmes',
      'Participate in capacity building sessions',
      'Access technology and market support',
      'Compliance with programme requirements'
    ],
    externalLink: 'https://msme.gov.in/ramp'
  },
  {
    id: '22',
    title: 'Entrepreneurship Development Programme (EDP)',
    description: 'Skill development and entrepreneurship training programmes conducted through EDIs, Tool Rooms, and Technology Centres.',
    eligibility: 'Aspiring entrepreneurs; Existing MSMEs for skill upgradation',
    benefits: ['Entrepreneurship training', 'Technical skill development', 'Business plan preparation guidance', 'Networking opportunities', 'Certification on completion'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Support',
    applicationSteps: [
      'Identify nearest EDI/Tool Room/TC',
      'Check available programmes',
      'Apply for relevant training',
      'Complete training curriculum',
      'Receive completion certificate',
      'Access post-training support'
    ],
    externalLink: 'https://dcmsme.gov.in'
  },
  {
    id: '23',
    title: 'Incubation Support Scheme',
    description: 'Support for setting up business incubators at engineering/management institutions to nurture innovative business ideas.',
    eligibility: 'Engineering/Management colleges; Existing incubators for scale-up',
    benefits: ['Up to Rs. 1 Crore for new incubators', 'Support for infrastructure and mentorship', 'Seed fund for incubatees', 'Networking with investors'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Apply through MSME ministry',
      'Submit detailed incubator proposal',
      'Evaluation by screening committee',
      'Approval and fund release',
      'Establish incubator facilities',
      'Report on incubatee progress'
    ],
    externalLink: 'https://msme.gov.in'
  },

  // === SPECIAL CATEGORY SCHEMES ===
  {
    id: '24',
    title: 'Women Entrepreneurship Platform (WEP)',
    description: 'Dedicated platform by NITI Aayog providing mentorship, funding access, and networking for women entrepreneurs.',
    eligibility: 'Women-owned/led enterprises; Aspiring women entrepreneurs',
    benefits: ['Access to incubation facilities', 'Mentorship from successful entrepreneurs', 'Funding connections', 'Networking and community support', 'Learning resources and webinars'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Support',
    applicationSteps: [
      'Register on wep.gov.in',
      'Complete profile with business details',
      'Access mentorship programmes',
      'Apply for incubation support',
      'Network with peer entrepreneurs',
      'Participate in WEP events'
    ],
    externalLink: 'https://wep.gov.in'
  },
  {
    id: '25',
    title: 'Coir Industry Schemes',
    description: 'Comprehensive support for coir industry including modernization, skill development, and market promotion by Coir Board.',
    eligibility: 'Coir industry units; Artisans in coir sector',
    benefits: ['Coir Udyami Yojana - capital subsidy', 'Skill upgradation training', 'R&D support', 'Domestic and international market promotion', 'Quality certification support'],
    industry: 'Coir',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Register with Coir Board',
      'Identify applicable scheme',
      'Submit application with project details',
      'Inspection and verification',
      'Approval and subsidy release',
      'Compliance reporting'
    ],
    externalLink: 'https://coirboard.gov.in'
  },

  // === REGISTRATION & COMPLIANCE ===
  {
    id: '26',
    title: 'Udyam Registration',
    description: 'Free, permanent online registration for MSMEs - mandatory gateway to access all MSME schemes and benefits.',
    eligibility: 'All Micro, Small and Medium Enterprises',
    benefits: ['Free of cost - no fees', 'Permanent registration - no renewal', 'Auto-linked with GSTIN and IT returns', 'Gateway to all MSME scheme benefits', 'Unique Udyam Registration Number'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Registration',
    applicationSteps: [
      'Visit udyamregistration.gov.in',
      'Enter Aadhaar number',
      'Verify with OTP',
      'Fill enterprise details',
      'Self-declaration of investment and turnover',
      'Receive Udyam Registration Certificate'
    ],
    externalLink: 'https://udyamregistration.gov.in'
  },

  // === EXPORT PROMOTION ===
  {
    id: '27',
    title: 'Market Access Initiative (MAI)',
    description: 'Export promotion scheme providing financial assistance for export promotion activities including trade fairs, buyer-seller meets, and brand promotion.',
    eligibility: 'Export Promotion Councils; Trade Associations; Exporters',
    benefits: ['Trade fair participation support', 'Buyer-seller meet organization', 'Brand promotion abroad', 'Market studies and research', 'Export infrastructure support'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Apply through Export Promotion Council',
      'Submit activity proposal and budget',
      'Approval by MAI committee',
      'Conduct approved activities',
      'Submit utilization certificates',
      'Reimbursement processing'
    ],
    externalLink: 'https://commerce.gov.in'
  },
  {
    id: '28',
    title: 'MSME Export Promotion Scheme',
    description: 'Enhanced CGTMSE guarantee cover for term loans up to Rs. 20 Crore for MSME exporters to support export capacity building.',
    eligibility: 'MSME exporters; Udyam registered enterprises with export potential',
    benefits: ['CGTMSE guarantee up to Rs. 20 Crore', 'Term loan support for export capacity', 'Working capital for export orders', 'Reduced collateral requirements'],
    industry: 'All Industries',
    location: 'Pan India',
    fundingType: 'Guarantee',
    applicationSteps: [
      'Ensure Udyam Registration',
      'Approach MLI with export business plan',
      'Submit export order documents',
      'Bank evaluation and sanction',
      'Enhanced CGTMSE coverage',
      'Loan disbursement for export activities'
    ],
    externalLink: 'https://cgtmse.in'
  },

  // === SECTOR SPECIFIC ===
  {
    id: '29',
    title: 'Focus Product Scheme - Footwear & Leather',
    description: 'Cluster development and employment creation support for footwear and leather sector MSMEs.',
    eligibility: 'MSMEs in footwear and leather sector',
    benefits: ['Cluster infrastructure support', 'Common facility centres', 'Skill development', 'Technology upgradation', 'Market promotion'],
    industry: 'Footwear, Leather',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Form cluster with other leather/footwear MSMEs',
      'Prepare detailed project proposal',
      'Apply through designated agency',
      'Evaluation and approval',
      'Implementation support',
      'Monitoring and compliance'
    ],
    externalLink: 'https://msme.gov.in'
  },
  {
    id: '30',
    title: 'Toy Manufacturing Cluster Scheme',
    description: 'Support for toy manufacturing clusters with focus on quality improvement, design development, and Make in India promotion.',
    eligibility: 'MSMEs in toy manufacturing sector',
    benefits: ['Cluster development support', 'Design and testing facilities', 'Quality certification assistance', 'Market promotion support', 'Technology upgradation'],
    industry: 'Toy Manufacturing',
    location: 'Pan India',
    fundingType: 'Grant',
    applicationSteps: [
      'Form cluster with toy manufacturing MSMEs',
      'Submit cluster proposal',
      'Evaluation by steering committee',
      'Approval and implementation',
      'Access common facilities',
      'Participate in market promotion'
    ],
    externalLink: 'https://msme.gov.in'
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

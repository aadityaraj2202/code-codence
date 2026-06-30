export interface ServiceComponent {
  id: string;
  title: string;
  summary: string;
  description: string;
  useCases: { title: string; description: string }[];
  benefits: string[];
  features: string[];
  cta: {
    text: string;
    link: string;
  };
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  components: ServiceComponent[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'academic-student',
    title: 'Academic & Student',
    description: 'Comprehensive support for students and academic institutions to excel in learning and development',
    icon: '🎓',
    components: [
      {
        id: 'project-support',
        title: 'Project Support & Development',
        summary: 'End-to-end assistance for academic projects, from ideation to deployment with expert guidance',
        description: 'Our Project Support & Development service provides students with comprehensive assistance throughout their academic journey. We help transform ideas into working solutions, offering mentorship, technical guidance, and hands-on support for capstone projects, theses, and coursework assignments.',
        useCases: [
          {
            title: 'Comprehensive Project Support for Students and Professionals',
            description: 'At Code Cosmos, we understand that whether you\'re a student working on academic projects or a professional looking to enhance your learning in Data, BCA, MCA, B.E or in any related field, our expert team is here to guide you through every step. From initial concept development to final project documentation and presentation. Our goal is to help you not only complete your project successfully but also learn in your process.'
          },
          {
            title: 'Academic Projects for Various Courses',
            description: 'We provide tailored project support for students across multiple disciplines such as Data, BCA, MCA, B.E or any area. Our services include topic selection, research guidance, code debugging, and fine-project delivery. No matter your course or specialization, we have experts ready to help. Let\'s make your academic journey smoother and more successful.'
          },
          {
            title: 'Minor and Major Projects with Complete Documentation',
            description: 'Whether you\'re working on a minor project for a semester or a major final-year project, we provide end-to-end support. We assist you in preparing standard project reports and professional PowerPoint presentations to ensure you clearly your vision and research. From literature surveys to coding, testing, and final format, and polish reports to meet academic standards, giving you confidence in submission.'
          },
          {
            title: 'AI, Machine Learning & Data Science Projects',
            description: 'Dive into the future with cutting-edge projects in AI, Machine Learning, and Data Science. Our experts help you implement real-world applications like predictive models, NLP solutions, deep learning experiments, computer vision projects, neural networks, or natural language processing. We guide you on build impactful projects that stand out in your portfolio.'
          },
          {
            title: 'Programming Projects in Java, Python, C, C++, and Web Development',
            description: 'From foundational languages to modern frameworks, we support projects using popular programming languages like Java, Python, C, C++, as well as Web Development frameworks (React, Angular, Node.js, Django, Flask). Whether you need help with algorithm implementation, software development lifecycle, or deployment across platforms, we ensure your project education.'
          },
          {
            title: 'Internship Projects with Certification',
            description: 'Make your internship experience count! We support you in completing real internship projects that add value to your resume and learning journey. Along with project completion, we assist in documentation, presentations, and provide project completion certification to enhance your professional profile.'
          }
        ],
        benefits: [
          'One-on-one mentorship from industry experts',
          'Learn industry best practices and coding standards',
          'Build portfolio-worthy projects',
          'Gain practical experience with modern technologies',
          'Timely delivery and quality assurance'
        ],
        features: [
          'Project planning and requirement analysis',
          'Architecture and system design guidance',
          'Code reviews and optimization',
          'Testing and debugging support',
          'Documentation and presentation help',
          'Deployment and hosting assistance'
        ],
        cta: {
          text: 'Get Project Support',
          link: '/contact'
        }
      },
      {
        id: 'student-centric-design',
        title: 'Student-Centric Design',
        summary: 'Custom learning solutions designed specifically for student needs and learning styles',
        description: 'We create personalized learning experiences that adapt to individual student needs, learning paces, and career goals. Our student-centric approach ensures that every learner receives the attention and resources they need to succeed.',
        useCases: [
          {
            title: 'Resume & CV Designing',
            description: 'Make Your First Impression Count! We create stunning, professional, and ATS-friendly resumes tailored to your career goals and academic background. Freshers & Experienced formats | IT, Design, Business, & Creative industry templates | Editable versions (PDF, Word, Canva formats) | Keyword-optimized for HR screening | Resume audit and improvement sessions. Special Add-on: LinkedIn bio + resume alignment support.'
          },
          {
            title: 'PPT Presentations',
            description: 'Deliver Ideas with Impact. Whether it\'s a seminar, final-year project, viva, or hackathon — a well-designed PPT makes all the difference. Academic + Technical Slide Designs | Custom themes, icons, and infographics | Animated transitions & visual storytelling | Data charts, project timelines, graphs | Editable + PDF versions delivered. Use Case: Ideal for college submissions, job interviews, and startup pitch decks.'
          },
          {
            title: 'Portfolio Website Development',
            description: 'Showcase Your Work Like a Pro. We build clean, mobile-friendly personal portfolio websites perfect for students, designers, developers, and freelancers. Sections: About Me, Projects, Skills, Resume, Contact | GitHub, Behance, LinkedIn, Blog integration | Domain + hosting setup assistance | SEO-optimized pages | Google Form contact integration. Bonus: You get full access + guidance to update your site on your own.'
          },
          {
            title: 'Poster & Report Cover Designing',
            description: 'Bring Professionalism to Your Projects. Your project deserves a great first look. We design custom covers and posters for academic, creative, and event-based needs. Project & Report Cover Pages | Event Posters (College Fest, Workshop, Seminar) | Certificate and Appreciation Designs | WhatsApp/Instagram format (beautifully branded, ready to print). Flexible Formats: Canva / Photoshop / Printable PDFs.'
          }
        ],
        benefits: [
          'Personalized attention and feedback',
          'Flexible learning pace',
          'Industry-relevant curriculum',
          'Continuous progress tracking',
          'Career-focused skill development'
        ],
        features: [
          'Initial skill assessment and goal setting',
          'Customized course recommendations',
          'Regular progress reviews',
          'Adaptive difficulty levels',
          'Peer collaboration opportunities',
          '24/7 access to learning resources'
        ],
        cta: {
          text: 'Start Your Journey',
          link: '/contact'
        }
      },
      {
        id: 'skill-career-support',
        title: 'Skill & Career Support',
        summary: 'Bridge the gap between academia and industry with career guidance and skill development',
        description: 'Our Skill & Career Support service helps students transition from academic learning to professional careers. We provide technical skill development, interview preparation, resume building, and job placement assistance.',
        useCases: [
          {
            title: 'Career Mentoring & Skill Roadmaps',
            description: 'Confused about what to do after college? We help you map your career with personalized guidance: One-on-one career discussions | Skill gap analysis & improvement plans | Personalized learning roadmap (Data Science, Web Dev, UI/UX, etc.) | Industry preparation strategies | Job role clarity (profile like: Analyst, Developer, Designer, etc.) | Who is this for? Students in 2nd, 3rd, final year, or freshers seeking job readiness.'
          },
          {
            title: 'AI Tools For Learning, Resume, And Automation',
            description: 'Be Future-Ready with Smart Tech. We train and guide students to use AI tools that boost productivity, learning, and execution: AI for Notes & Summarization | AI-based Resume Builders | Automation Tools (Zapier, Notion AI, Canva Magic, ChatGPT prompts) | AI for coding, design, and interview preparation | Tools for time management & smart job search. Unlock more, with less effort.'
          },
          {
            title: 'Portfolio Building Guidance',
            description: 'Let Your Work Speak for You. We guide you on what to add, how to write, and how to design your portfolio to grab attention: Choosing best projects for display | Content structure for case studies | UI/UX suggestions for better readability | Tools for hosting (GitHub Pages, Behance, Google Sites, Notion) | Reviews & feedback on portfolio drafts. Perfect for developers, designers, analysts, content creators & students.'
          },
          {
            title: 'LinkedIn Personal Branding Support',
            description: 'Build Your Digital Resume - Strategically. From a plain profile to a powerful professional brand, we help you: Optimize Profile Headline, Summary & Experience | Skills & Keyword Optimization | Banner & Profile Photo Recommendations | Posting strategy to build engagement | Connecting with recruiters the smart way. Your LinkedIn profile = Your Job magnet. We make it work for you.'
          }
        ],
        benefits: [
          'Industry-recognized certifications',
          'Job placement assistance',
          'Interview success rates of 85%+',
          'Access to hiring partner network',
          'Lifetime career support'
        ],
        features: [
          'Technical skill assessments',
          'Industry-specific training programs',
          'Mock interview sessions',
          'Resume and LinkedIn optimization',
          'Portfolio website creation',
          'Job referral program',
          'Salary negotiation guidance'
        ],
        cta: {
          text: 'Explore Career Paths',
          link: '/contact'
        }
      }
    ]
  },
  {
    id: 'corporate-startup',
    title: 'Corporate & Startup',
    description: 'Professional services for businesses looking to innovate, train teams, and scale operations',
    icon: '💼',
    components: [
      {
        id: 'business-consulting',
        title: 'Business Consulting',
        summary: 'Strategic technology consulting to drive digital transformation and business growth',
        description: 'Our Business Consulting service helps organizations leverage technology to solve business challenges, improve efficiency, and drive growth. We provide strategic guidance on digital transformation, technology stack selection, and process optimization.',
        useCases: [
          {
            title: 'WhatsApp & Website Chatbots',
            description: 'Automate customer interactions with smart, 24/7 chat support for lead generation, query handling & appointment booking.'
          },
          {
            title: 'AI Tools for HR, CRM, & Marketing',
            description: 'From resume shortlisting to customer profiling and campaign targeting—experience automation like never before.'
          },
          {
            title: 'Predictive Analytics & Business Intelligence',
            description: 'Harness your data to make smarter decisions. Get dashboards, forecasts, trends & business insights powered by AI.'
          },
          {
            title: 'Custom AI-Powered Solutions',
            description: 'We build personalized tools: Recommendation Engines, Image/Text Processing Models, NLP Chat Interfaces, AI Reporting Tools.'
          },
          {
            title: 'How It Works - Step 1: Schedule a Consultation',
            description: 'Understand your business process and pain points'
          },
          {
            title: 'How It Works - Step 2: Define Your AI Roadmap',
            description: 'Pick the right model – chatbot, recommendation, prediction, etc.'
          },
          {
            title: 'How It Works - Step 3: Development & Integration',
            description: 'We build and test the AI system with your existing tools'
          },
          {
            title: 'How It Works - Step 4: Deploy, Monitor & Optimize',
            description: 'We ensure it performs & scales as your business grows'
          }
        ],
        benefits: [
          'Save Time with Process Automation',
          'Reduce Operational Costs',
          'Get Insights from Your Data',
          'Deliver 24/7 Customer Experience',
          'Stand Out from the Competition'
        ],
        features: [
          'E-Commerce & Retail',
          'Healthcare',
          'EdTech & Education',
          'Real Estate',
          'Finance & Insurance',
          'Logistics'
        ],
        cta: {
          text: 'Schedule Consultation',
          link: '/contact'
        }
      },
      {
        id: 'team-training',
        title: 'Team Training',
        summary: 'Comprehensive corporate training programs to upskill your development teams',
        description: 'Empower your teams with cutting-edge technical skills through our customized training programs. We offer both on-site and remote training on latest technologies, frameworks, and development practices.',
        useCases: [
          {
            title: 'Technology Onboarding',
            description: 'Quickly train teams on new frameworks and tools adopted by your organization'
          },
          {
            title: 'Skill Gap Analysis',
            description: 'Identify and address technical skill gaps within your development team'
          },
          {
            title: 'Best Practices Workshop',
            description: 'Hands-on workshops on coding standards, testing, and DevOps practices'
          }
        ],
        benefits: [
          'Reduced hiring costs',
          'Improved code quality',
          'Better team collaboration',
          'Faster project delivery',
          'Higher employee retention'
        ],
        features: [
          'Customized curriculum design',
          'Hands-on practical sessions',
          'Real-world project assignments',
          'Progress tracking and assessments',
          'Post-training support',
          'Certification programs'
        ],
        cta: {
          text: 'Request Training Program',
          link: '/contact'
        }
      },
      {
        id: 'web-development',
        title: 'Web Development',
        summary: 'End-to-end technology solutions including websites, e-commerce, and custom applications',
        description: 'From responsive websites to complex enterprise applications, we build scalable, secure, and high-performance solutions tailored to your business needs.',
        useCases: [
          {
            title: 'Business Websites (SEO + Mobile Friendly)',
            description: 'Create responsive websites that look great on all devices and rank high on search engines to attract organic traffic.'
          },
          {
            title: 'E-Commerce Websites (With Cart + Payment Gateway)',
            description: 'Launch your online store with secure payment integrations, easy navigation, and a smooth checkout experience.'
          },
          {
            title: 'Custom Web Applications (CRM, ERP, Inventory)',
            description: 'Tailored solutions to automate your business operations and improve efficiency—from customer management to inventory control.'
          },
          {
            title: 'Landing Pages For Ads & Promotions',
            description: 'Design high-converting landing pages optimized for campaigns, product launches, and events.'
          },
          {
            title: 'How It Works - Step 1: Initial Consultation',
            description: 'We analyze your business needs and website goals.'
          },
          {
            title: 'How It Works - Step 2: Design & Development Plan',
            description: 'Wireframes, UX/UI design, and tech stack selection tailored to your audience.'
          },
          {
            title: 'How It Works - Step 3: Build & Test',
            description: 'Development with regular updates and thorough testing for usability and performance.'
          },
          {
            title: 'How It Works - Step 4: Launch & Monitor',
            description: 'Website goes live with ongoing monitoring to ensure speed, security, and SEO health.'
          }
        ],
        benefits: [
          'Establish a Professional Online Presence',
          'Increase Sales with E-commerce Solutions',
          'Enhance Customer Experience',
          'Improve Operational Efficiency with Custom Apps',
          'Boost Marketing ROI with Targeted Landing Pages'
        ],
        features: [
          'Retail & E-Commerce',
          'Education & Coaching',
          'Healthcare',
          'Real Estate',
          'Corporate & Small Businesses',
          'Startups & Entrepreneurs'

        ],
        cta: {
          text: 'Start Your Project',
          link: '/contact'
        }
      },
      {
        id: 'graphic-design-branding',
        title: 'Graphic Design & Branding',
        summary: 'Crafting visual identities that tell your brand\'s story',
        description: 'From logos to complete brand guidelines, we create cohesive and compelling visual identities that resonate with your audience and set you apart from the competition.',
        useCases: [
          {
            title: 'Logo Design + Brand Kit',
            description: 'Create a unique and memorable logo along with a complete brand kit — colors, fonts, and guidelines to maintain brand consistency.'
          },
          {
            title: 'Social Media Creatives (Monthly Packages)',
            description: 'Eye-catching posts, banners, stories, and ads crafted to boost engagement across all platforms like Instagram, Facebook, LinkedIn, and Twitter.'
          },
          {
            title: 'Flyers, Brochures, Business Cards',
            description: 'Print-ready marketing materials designed to create a lasting impression at events, meetings, and promotions.'
          },
          {
            title: 'Packaging & Label Design',
            description: 'Attractive and compliant packaging designs that enhance product appeal and brand identity.'
          },
          {
            title: 'Digital Invitations (Launches / Events)',
            description: 'Custom-made digital invites to make your business launches, webinars, and events stand out in style.'
          },
          {
            title: 'How It Works - Step 1: Consultation & Brief',
            description: 'Understand your brand’s vision, target audience, and design preferences.'
          },
          {
            title: 'How It Works - Step 2: Concept Creation',
            description: 'Our designers craft multiple initial concepts for your review.'
          },
          {
            title: 'How It Works - Step 3: Revisions & Finalization',
            description: 'Incorporate feedback and refine the designs until perfect.'
          },
          {
            title: 'How It Works - Step 4: Delivery & Support',
            description: 'Receive high-quality files in all formats along with brand guidelines.'
          }
        ],
        benefits: [
          'Strengthen Brand Identity & Recognition',
          'Increase Engagement & Reach on Social Media',
          'Professional & Consistent Marketing Materials',
          'Stand Out in a Competitive Market',
          'Build Trust & Credibility with Customers'
        ],
        features: [
          'Startups & Entrepreneurs',
          'Retail & E-commerce',
          'Education & Coaching',
          'Events & Conferences',
          'Corporate & Professional Services',
          'FMCG & Product Businesses'
        ],
        cta: {
          text: 'Get Your Design',
          link: '/contact'
        }
      },
      {
        id: 'integrated-add-on',
        title: 'Add-On Services & Business Process Automation',
        summary: 'Boost your business efficiency with expert add-on services and automation consulting.',
        description: 'From seamless website & social media management to smart business process automation, we help you save time, reduce costs, and scale smarter.',
        useCases: [
          {
            title: 'Website + Social Media + Graphic Handling',
            description: 'Comprehensive management of your digital presence — keeping your website updated, social channels active, and visuals consistent without you lifting a finger.'
          },
          {
            title: 'Monthly Support (Design + Technical)',
            description: 'Reliable monthly packages including website maintenance, design updates, technical support, and performance monitoring to keep your business running smoothly.'
          },
          {
            title: 'Business Process Automation - Workflow Analysis',
            description: 'We study your current processes to identify bottlenecks and inefficiencies.'
          },
          {
            title: 'Business Process Automation - Strategy Development',
            description: 'Tailored automation roadmaps to digitize repetitive tasks, improve accuracy, and speed up operations.'
          },
          {
            title: 'Business Process Automation - Integration & Implementation',
            description: 'Connect your existing tools (CRM, ERP, inventory, HR systems) with automation solutions for seamless workflows.'
          },
          {
            title: 'Business Process Automation - Training & Support',
            description: 'Empower your team with training sessions and ongoing support to maximize automation benefits.'
          }
        ],
        benefits: [
          'Streamline Operations & Save Time',
          'Reduce Human Error & Improve Accuracy',
          'Enhance Employee Productivity',
          'Cut Operational Costs',
          'Improve Customer Satisfaction',
          'Enable Scalable Growth'
        ],
        features: [
          'Retail & E-Commerce',
          'Manufacturing & Logistics',
          'Healthcare & Pharma',
          'Education & Coaching',
          'Financial Services',
          'Startups & SMEs'
        ],
        cta: {
          text: 'Get Your Quote',
          link: '/contact'
        }
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing services to amplify your online presence and drive growth',
    icon: '📱',
    components: [
      {
        id: 'performance-platform-marketing',
        title: 'Performance & Platform Marketing',
        summary: 'Maximize your digital reach and ROI with Code Codence\'s performance-driven marketing solutions.',
        description: 'From search engine visibility to paid ads and cross-platform presence, we help your brand attract, convert, and grow consistently.',
        useCases: [
          {
            title: 'Search Engine Optimization (SEO)',
            description: 'Rank higher on Google with proven SEO strategies: Keyword Research & Targeting, On-Page Optimization, Technical SEO Audits, Local SEO for Location-Based Reach, and Monthly Progress Reports.'
          },
          {
            title: 'Google Ads (Search, Display, Video)',
            description: 'Drive leads instantly with Google Ads: Search Ads (relevant keywords), Display Ads (visual ads), YouTube Video Ads (video campaigns), Landing Page Optimization, and Conversion Tracking & Reporting.'
          },
          {
            title: 'Social Media Marketing',
            description: 'Build your brand and grow your audience across platforms: Instagram, Facebook & LinkedIn Campaigns, Organic & Paid Strategies, Post Creation & Scheduling, Reels & Boosted Promotions, and Engagement Growth.'
          },
          {
            title: 'Our Approach to Digital Marketing - Step 1: Understand Business Goals',
            description: 'Define clear objectives: leads, traffic, branding, or engagement.'
          },
          {
            title: 'Our Approach to Digital Marketing - Step 2: Platform & Audience Strategy',
            description: 'Choose the right channels and target demographics.'
          },
          {
            title: 'Our Approach to Digital Marketing - Step 3: Campaign Design & Launch',
            description: 'Create engaging content and run optimized campaigns.'
          },
          {
            title: 'Our Approach to Digital Marketing - Step 4: Measure, Analyze & Optimize',
            description: 'Use data to improve performance weekly/monthly.'
          }
        ],
        benefits: [
          'Direct Impact on Sales & Revenue',
          'Data-Backed Decision Making',
          'Scalable Growth Models',
          'Platform-Specific Expertise',
          'Advanced Tracking & Attribution'
        ],
        features: [
          'E-Commerce & Retail',
          'Clinics & Healthcare Professionals',
          'EdTech & Online Educators',
          'Real Estate & Builders',
          'Coaching Institutes',
          'B2B & Professional Services'
        ],
        cta: {
          text: 'Book Free Audit',
          link: '/contact'
        }
      },
      {
        id: 'strategic-content-automation',
        title: 'Strategic Content & Automation Services',
        summary: 'Maximize your content\'s reach and impact with Code Codence\'s strategic content and automation services.',
        description: 'We blend human creativity with cutting-edge AI and automation to scale your brand narrative and streamline your marketing workflows.',
        useCases: [
          {
            title: 'Content Marketing',
            description: 'Position your brand as a thought leader through valuable content: Blog Writing & Publishing, Website Copywriting, Social Media Captions & Hashtags, Brand Tone & Messaging Strategy, and SEO-Optimized Content.'
          },
          {
            title: 'Email Marketing & Automation',
            description: 'Convert subscribers into loyal customers with strategic emails: Email Campaign Planning, Lead Nurturing Workflows, Newsletter Setup & Management, Drip Campaigns, and List Segmentation & A/B Testing.'
          },
          {
            title: 'YouTube Channel Strategy',
            description: 'Build an audience and grow visibility through video: Channel Branding & Setup, Video Content Planning, SEO-Friendly Titles & Tags, Posting Schedules & Thumbnails, and Analytics & Growth Tactics.'
          },
          {
            title: 'How It Works - Step 1: Analyze Content Needs',
            description: 'Identify content gaps and opportunities based on your target audience and goals.'
          },
          {
            title: 'How It Works - Step 2: Develop Strategy & Workflows',
            description: 'Create a strategic content roadmap and set up automation workflows for efficiency.'
          },
          {
            title: 'How It Works - Step 3: Content Creation & Tool Integration',
            description: 'Produce creative content and sync it with your chosen automation tools.'
          },
          {
            title: 'How It Works - Step 4: Execute, Monitor & Iterate',
            description: 'Launch campaigns, monitor performance data, and refine the strategy for better ROI.'
          }
        ],
        benefits: [
          'Unbeatable Efficiency with AI',
          'Consistent Cross-Platform Voice',
          'Scalable Content Output',
          'Reduced Manual Workload',
          'Personalized Customer Journeys'
        ],
        features: [
          'Startups & Emerging Brands',
          'E-learning & Course Creators',
          'E-commerce & Retail',
          'Real Estate & Builders',
          'Healthcare & Wellness',
          'B2B SaaS Companies'
        ],
        cta: {
          text: 'Scale Your Content',
          link: '/contact'
        }
      }
    ]
  }
];

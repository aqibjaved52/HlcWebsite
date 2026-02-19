import {
  BoltIcon,
  GlobeIcon,
  SmartphoneIcon,
  GamepadIcon,
  TrendingUpIcon,
  BriefcaseIcon,
  PuzzleIcon,
  LayersIcon,
  EyeOpenIcon,
  TargetIcon,
  HeadsetIcon,
  RocketIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  YoutubeIcon,
} from './icons';

// ─── Animation ───

export const EASE = [0.22, 1, 0.36, 1];

export const PARTICLE_COUNT = 20;

// ─── Navigation ───

export const NAV_LINKS = Object.freeze([
  { id: 'home', label: 'Home', path: '/' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
  { id: 'pricing', label: 'Pricing', path: '/pricing' },
  { id: 'blogs', label: 'Blogs', path: '/blogs' },
]);

// ─── Hero Section ───

export const HERO = Object.freeze({
  badge: 'Welcome to HLC Solutions',
  titleLine1: 'Driving Growth,',
  titleLine2: 'Delivering',
  titleHighlight: 'Innovation',
  subtitle:
    'We are experts in ERP, web development, mobile apps, game development, digital marketing, and business solutions — committed to your digital transformation and success.',
  primaryCta: 'Get Started',
  secondaryCta: 'Explore Services',
  trustText: '50+ happy clients trust us worldwide',
});

// ─── Stats ───

export const STATS = Object.freeze([
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 6, suffix: '+', label: 'Years Experience' },
  { value: 24, suffix: '/7', label: 'Support Available' },
]);

// ─── How We Help (Process Steps) ───

export const HOW_WE_HELP = Object.freeze({
  title: 'How HLC Helps you to Grow',
  desc: 'Our team works closely with you to understand your unique business needs and craft customized strategies that deliver measurable results.',
  steps: [
    {
      number: '01.',
      title: 'Define Your Goals and Audience',
      desc: 'Start by clearly defining your objectives for both your website and digital marketing efforts.',
    },
    {
      number: '02.',
      title: 'Design a User-Centric Website',
      desc: 'Focus on user experience (UX) design: Create a website that is intuitive, easy to navigate.',
    },
    {
      number: '03.',
      title: 'Implement Digital Marketing Strategy',
      desc: 'Engage with your audience on social media and leverage data-driven marketing channels.',
    },
    {
      number: '04.',
      title: 'Track, Analyze, and Iterate',
      desc: 'Set up analytics tools to track the performance of your website and marketing campaigns.',
    },
  ],
});

// ─── Why Choose Us ───

export const WHY_CHOOSE_US = Object.freeze({
  tag: 'Why Choose Us',
  title: 'Why HLC for Your Business',
  desc: 'We combine technical excellence with strategic thinking to deliver solutions that truly move the needle for your business. Here\'s what sets us apart.',
  reasons: [
    {
      icon: PuzzleIcon,
      title: 'Tailored Solutions, Not Templates',
      desc: 'Every business is unique. We build custom strategies and software from the ground up — no cookie-cutter approaches, no recycled code.',
    },
    {
      icon: LayersIcon,
      title: 'End-to-End Expertise',
      desc: 'From ERP systems to mobile apps, web platforms to digital marketing — our team handles everything under one roof so you get a unified, seamless experience.',
    },
    {
      icon: EyeOpenIcon,
      title: 'Transparent Communication',
      desc: 'You\'ll never be left in the dark. We keep you informed at every stage with clear timelines, regular updates, and honest feedback.',
    },
    {
      icon: TargetIcon,
      title: 'Results That Speak',
      desc: '150+ projects delivered, 50+ happy clients, and years of experience turning ideas into measurable business outcomes.',
    },
    {
      icon: HeadsetIcon,
      title: 'Dedicated Support',
      desc: 'Our relationship doesn\'t end at launch. We provide 24/7 post-launch support, maintenance, and continuous improvement to keep you ahead.',
    },
    {
      icon: RocketIcon,
      title: 'Cost-Effective & Scalable',
      desc: 'Get enterprise-grade quality without the enterprise price tag. Our solutions are built to scale as your business grows.',
    },
  ],
});

// ─── Security Section ───

export const SECURITY = Object.freeze({
  title: 'Detect any malware, hacks, and blocklist status',
  desc: 'With HLC Solution, you can rest assured that your digital presence is fortified against cyber threats, allowing you to focus on what you do best – growing your business.',
  features: [
    {
      title: 'Malware Scanner',
      desc: 'Protecting Your Website from Digital Intruders',
    },
    {
      title: 'Blocklist Status',
      desc: 'Stay Off the Radar with Our Blocklist Monitoring',
    },
    {
      title: 'SEO Spam Scanner',
      desc: 'Ensure Your Website\'s Integrity with Our SEO Spam Detection.',
    },
  ],
});

// ─── Services ───

export const SERVICES = Object.freeze([
  {
    icon: GlobeIcon,
    title: 'Website Development',
    desc: 'HLC Solutions delivers custom web development services, creating visually appealing, user-friendly, and responsive websites tailored to your business needs.',
  },
  {
    icon: BoltIcon,
    title: 'ERP Development',
    desc: 'HLC Solutions provides expert Odoo ERP development services, delivering customized, integrated, and scalable solutions to streamline operations, improve efficiency, and drive business growth.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Digital Marketing & SEO',
    desc: 'HLC Solutions provides result-oriented digital marketing services, using data-driven strategies to enhance online visibility, generate quality leads, and maximize business growth.',
  },
  {
    icon: SmartphoneIcon,
    title: 'Mobile App Development',
    desc: 'HLC Solutions delivers professional mobile app development services, creating secure, user-friendly, and high-performance applications designed to enhance engagement and business growth.',
  },
]);

// ─── Portfolio ───

export const GRADIENTS = Object.freeze({
  purple: 'linear-gradient(135deg, #3b0764, #7c3aed)',
  cyan: 'linear-gradient(135deg, #0c4a6e, #06b6d4)',
  emerald: 'linear-gradient(135deg, #064e3b, #10b981)',
  orange: 'linear-gradient(135deg, #7c2d12, #f97316)',
  indigo: 'linear-gradient(135deg, #1e1b4b, #6366f1)',
  fuchsia: 'linear-gradient(135deg, #4a044e, #d946ef)',
  deepPurple: 'linear-gradient(135deg, #1a0a3c, #7c3aed)',
  sky: 'linear-gradient(135deg, #0c4a6e, #0ea5e9)',
});

export const PORTFOLIO = Object.freeze([
  { title: 'Enterprise Dashboard', category: 'ERP', gradient: GRADIENTS.purple },
  { title: 'E-Commerce Platform', category: 'Web', gradient: GRADIENTS.cyan },
  { title: 'FinTech Mobile App', category: 'Mobile', gradient: GRADIENTS.emerald },
  { title: 'RPG Adventure Game', category: 'Gaming', gradient: GRADIENTS.orange },
  { title: 'Marketing Analytics', category: 'Marketing', gradient: GRADIENTS.indigo },
  { title: 'CRM System', category: 'Business', gradient: GRADIENTS.fuchsia },
]);

// ─── Pricing ───

export const PRICING = Object.freeze([
  {
    name: "HLC's Free Services",
    subtitle: '',
    price: '$0',
    period: 'with no time limit',
    supportNote: '',
    features: [
      'Business Consultation',
      'Schedule Free Meeting for Business Plans',
      'Talk with Professionals',
      'Get Free Landing Page for Your Business',
    ],
    popular: false,
    btnText: 'Get Started',
  },
  {
    name: 'Ecommerce Services',
    subtitle: 'Starting From',
    price: '$100',
    period: '/ website',
    supportNote: 'Annual support for $12.99 monthly',
    features: [
      'Complete E-commerce Store',
      'Payment Integrations',
      'SEO Optimized Content',
      'Responsive Design',
    ],
    popular: true,
    btnText: 'Get Started',
  },
  {
    name: 'ERP Solutions',
    subtitle: 'Save 60%',
    price: '$250',
    period: '/ system',
    supportNote: 'Annual support for up to 10 person',
    features: [
      'Customized Odoo Modules',
      'Finance and Accounting',
      'Purchase and Sales',
      'Point of Sales',
      'HRM/LMS and HMS',
    ],
    popular: false,
    btnText: 'Get Started',
  },
]);

// ─── Blogs ───

export const BLOGS = Object.freeze([
  {
    title: 'The Future of ERP Systems in 2026',
    category: 'Technology',
    date: 'Feb 15, 2026',
    excerpt: 'Explore how AI and cloud computing are reshaping enterprise resource planning for modern businesses.',
    gradient: GRADIENTS.deepPurple,
  },
  {
    title: 'Top Web Development Trends',
    category: 'Development',
    date: 'Feb 10, 2026',
    excerpt: 'From server components to edge computing, discover the technologies defining the next generation of web.',
    gradient: GRADIENTS.sky,
  },
  {
    title: 'Mobile App Strategies for Growth',
    category: 'Mobile',
    date: 'Feb 05, 2026',
    excerpt: 'Learn proven strategies to increase user retention and drive revenue through your mobile applications.',
    gradient: GRADIENTS.emerald,
  },
]);

// ─── Social Links ───

export const SOCIAL_LINKS = Object.freeze([
  { icon: TwitterIcon, label: 'Twitter', href: '#!' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#!' },
  { icon: FacebookIcon, label: 'Facebook', href: '#!' },
  { icon: YoutubeIcon, label: 'YouTube', href: '#!' },
]);

// ─── Contact Info ───

export const CONTACT_INFO = Object.freeze({
  email: 'info@hlcsol.com',
  phone: '+92 310 4248889',
  address: '3rd Floor, Plaza 42 Eucalyptus Road, SectorA Commercial, DHA Phase II, Islamabad.',
});

// ─── Contact Form ───

export const CONTACT_FORM = Object.freeze({
  title: 'Ready to bring your',
  titleHighlight: 'idea to life?',
  desc: 'Get in touch with us to discuss how we can transform your concept into a success story.',
  fields: {
    name: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    message: 'Your Message',
  },
  terms: 'I accept the Terms of Use and Privacy Policy.',
  submit: 'Submit',
});

// ─── CTA Section ───

export const CTA = Object.freeze({
  title: 'Ready to Transform Your Business?',
  desc: "Let's build something extraordinary together. Get in touch with our team to start your digital journey today.",
  primaryCta: 'Start a Project',
  secondaryCta: 'Schedule a Call',
});

// ─── Footer ───

export const FOOTER = Object.freeze({
  about:
    'Driving digital transformation through innovative software solutions. Your trusted technology partner for growth and success.',
  copyright: '© 2026 HLC Solutions. All rights reserved.',
});

// ─── Section Headers ───

export const SECTION_HEADERS = Object.freeze({
  services: {
    tag: 'What We Do',
    title: 'Our',
    highlight: 'Services',
    desc: 'Our team works closely with you to understand your unique business needs and craft customized strategies that deliver measurable results.',
  },
  portfolio: {
    tag: 'Our Work',
    title: 'Featured',
    highlight: 'Portfolio',
    desc: 'A showcase of our recent projects that drive results and exceed expectations.',
  },
  pricing: {
    tag: 'Plans',
    title: 'Transparent',
    highlight: 'Pricing',
    desc: 'Choose the plan that fits your needs. Every plan includes our commitment to quality.',
  },
  blogs: {
    tag: 'Insights',
    title: 'Latest',
    highlight: 'Blogs',
    desc: 'Stay updated with the latest trends, insights, and news from our team.',
  },
});

// ─── Page Meta ───

export const PAGE_TITLE = 'HLC Solutions – Driving Growth, Delivering Innovation';

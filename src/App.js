import { useEffect, useState } from "react";

export default function AIPortfolio() {
  // Himanshu Kumar's AI Engineer Portfolio - Apple-inspired design with real content
  // Following Apple's principles: minimalism, product focus, clear hierarchy, smooth motion
  // Enhanced with AI-themed dynamic effects and animations

  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enableDark = saved ? saved === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', enableDark);
    setIsDark(enableDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const skills = [
    "Large Language Models (LLM)", "Multi-agent Systems", "Docker", "Python", "SQL",
    "PyTorch", "TensorFlow", "LangChain", "OpenAI", "Pandas", "NumPy", "Scikit-learn",
    "RAG Systems", "PEFT", "FAISS", "Sentence Transformers", "PowerBI", "Microsoft Excel"
  ];

  const projects = [
    {
      title: "Vulnerability to Viability (V2V) Information System",
      blurb: "Developed a comprehensive fisheries information system using LLM fine-tuning and custom RAG architecture.",
      meta: "Fine-tuned llama-2-7b on 500+ fisheries surveys, implemented custom RAG with FAISS indexing",
      link: "#",
      highlight: "Research"
    },
    {
      title: "Loan Default Prediction System",
      blurb: "Built predictive model for loan defaulters with advanced feature engineering and SMOTE balancing.",
      meta: "Random Forest, SMOTE, 65k+ records, F1-score: 0.81",
      link: "#",
      highlight: "ML"
    },
    {
      title: "Customer Churn Analysis",
      blurb: "Analyzed price sensitivity and churn factors for SMEs with improved retention strategies.",
      meta: "Random Forest, EDA, 15% accuracy improvement, 92% churn prediction",
      link: "#",
      highlight: "Analytics"
    },
  ];

  return (
    <div className="min-h-[100svh] antialiased font-sans bg-white text-apple-gray-900 dark:bg-apple-gray-900 dark:text-white overflow-x-hidden">
      {/* AI Particle Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-apple-gray-900 dark:via-apple-gray-800 dark:to-apple-gray-900" />
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Apple-style navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 dark:bg-apple-gray-900/70 dark:border-apple-gray-800">
        <Nav sections={sections} isDark={isDark} onToggleTheme={toggleTheme} />
      </header>

      <main className="relative">
        {/* Hero Section - AI-themed with dynamic effects */}
        <section className="pt-20 pb-24 px-6 max-w-6xl mx-auto text-center relative">
          {/* Floating AI Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-float" />
            <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-2xl animate-float-delayed" />
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                Himanshu Kumar
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl text-apple-gray-600 dark:text-apple-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto animate-slide-up">
              <span className="inline-block animate-bounce-subtle">AI</span> Engineer & Data Scientist
            </p>
            <p className="text-lg text-apple-gray-500 dark:text-apple-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up">
              M.Sc. Economics with AI specialization from IIT Kharagpur. 
              Building AI agents and LLM solutions for real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#projects" 
                className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/30 btn-apple transform hover:scale-105 hover:shadow-2xl"
              >
                <span className="mr-2">View Projects</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#skills" 
                className="inline-flex items-center justify-center border border-apple-gray-300 text-apple-gray-700 dark:text-white dark:border-apple-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-apple-gray-50 dark:hover:bg-apple-gray-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-apple-gray-500/30 btn-apple hover:scale-105"
              >
                See Skills
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-apple-blue uppercase tracking-widest mb-3 animate-fade-in">About</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-apple-gray-900 dark:text-white mb-6 animate-fade-in-delayed">Who I Am</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed mb-6 animate-fade-in-delayed-2">
              Hello, I'm Himanshu Kumar, a graduate of IIT Kharagpur with an M.Sc. (5Y) in Economics 
              with Micro Specialization in Artificial Intelligence and Applications.
            </p>
            <p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed animate-fade-in-delayed-3">
              I am passionate about Data Science, Analytics, and AI/ML. Eager to apply academic knowledge 
              and project experience to solve real-world problems with innovative AI solutions.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-apple-blue uppercase tracking-widest mb-3">Skills</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-apple-gray-900 dark:text-white mb-6">Core Competencies</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={skill} 
                className="group bg-apple-gray-50 dark:bg-apple-gray-800 rounded-2xl p-6 text-center hover:bg-apple-gray-100 dark:hover:bg-apple-gray-700 transition-all duration-300 hover:shadow-apple card-apple transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-apple-gray-900 dark:text-white font-medium group-hover:text-apple-blue transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-apple-blue uppercase tracking-widest mb-3">Projects</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-apple-gray-900 dark:text-white mb-6">Featured Work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-apple-blue uppercase tracking-widest mb-3">Experience</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-apple-gray-900 dark:text-white mb-6">Professional Journey</h2>
          </div>
          <Timeline />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-apple-blue uppercase tracking-widest mb-3">Contact</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-apple-gray-900 dark:text-white mb-6">Let's Connect</h2>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-apple-blue/30 btn-apple transform hover:scale-105"
                href="mailto:himanshu.kumar0012@gmail.com"
              >
                Email Me
              </a>
              <a
                className="inline-flex items-center justify-center border border-apple-gray-300 text-apple-gray-700 dark:text-white dark:border-apple-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-apple-gray-50 dark:hover:bg-apple-gray-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-apple-gray-500/30 btn-apple hover:scale-105"
                href="/resume.pdf"
                download
              >
                Download Resume
              </a>
            </div>
            <div className="mt-8 space-y-2">
              <p className="text-apple-gray-600 dark:text-apple-gray-300">
                <strong>LinkedIn:</strong> 
                <a href="https://www.linkedin.com/in/himanshu-k-377095102" target="_blank" rel="noopener noreferrer" className="text-apple-blue hover:underline ml-2">
                  himanshu-k-377095102
                </a>
              </p>
              <p className="text-apple-gray-600 dark:text-apple-gray-300">
                <strong>Location:</strong> Bengaluru, Karnataka, India
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 text-center border-t border-apple-gray-200 dark:border-apple-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-apple-gray-500 dark:text-apple-gray-400">© {new Date().getFullYear()} Himanshu Kumar. Built with care and no nonsense.</p>
        </div>
      </footer>
    </div>
  );
}

function Nav({ sections, isDark, onToggleTheme }) {
  return (
    <nav className="max-w-6xl mx-auto flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse" />
        <span className="text-xl font-semibold text-apple-gray-900 dark:text-white">Himanshu Kumar</span>
      </div>
      <ul className="hidden md:flex items-center gap-8">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              className="text-apple-gray-600 dark:text-apple-gray-300 hover:text-apple-gray-900 dark:hover:text-white transition-colors duration-200 font-medium relative group"
              href={`#${section.id}`}
            >
              {section.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleTheme}
          aria-label="Toggle dark mode"
          className="inline-flex items-center justify-center rounded-full border border-apple-gray-300 dark:border-apple-gray-700 px-3 py-2 text-sm text-apple-gray-700 dark:text-white hover:bg-apple-gray-50 dark:hover:bg-apple-gray-800 transition-all duration-300 hover:scale-105"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-apple-blue/30 btn-apple transform hover:scale-105"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

function ProjectCard({ title, blurb, meta, link, highlight, index }) {
  return (
    <div className="group animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="bg-white dark:bg-apple-gray-800 rounded-3xl p-8 border border-apple-gray-200 dark:border-apple-gray-700 hover:shadow-apple-large transition-all duration-500 hover:-translate-y-2 card-apple relative overflow-hidden">
        {/* AI Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {highlight && (
          <span className="inline-block bg-gradient-to-r from-apple-blue to-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            {highlight}
          </span>
        )}
        <h3 className="text-2xl font-bold text-apple-gray-900 dark:text-white mb-4 group-hover:text-apple-blue transition-colors">
          {title}
        </h3>
        <p className="text-apple-gray-600 dark:text-apple-gray-300 text-lg leading-relaxed mb-4">
          {blurb}
        </p>
        <p className="text-apple-gray-500 dark:text-apple-gray-400 text-sm mb-6">
          {meta}
        </p>
        <div className="inline-flex items-center gap-2 text-apple-blue font-medium group-hover:gap-3 transition-all duration-300">
          <span>Learn More</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const items = [
    {
      time: "June 2025 - Present",
      role: "AI Engineer",
      org: "OnFinance AI",
      location: "Bengaluru, Karnataka, India",
      points: [
        "Building AI Agents for revolutionizing compliance for BFSI sector",
        "Developing innovative AI solutions for financial compliance automation",
      ],
    },
    {
      time: "May 2025 - June 2025",
      role: "LLM Trainer",
      org: "Outlier",
      location: "Remote",
      points: [
        "Assessed outputs from multiple LLMs in both STEM and non-STEM fields",
        "Reviewed code execution of AI systems and optimized prompts using advanced techniques",
      ],
    },
    {
      time: "October 2024 - December 2024",
      role: "LLM Trainer",
      org: "Soul AI",
      location: "Remote",
      points: [
        "Assessed outputs from multiple LLMs in both STEM and non-STEM fields",
        "Reviewed code execution of AI systems, evaluating tool calls and API integrations",
        "Designed and optimized prompts using zero-shot, few-shot, and chain-of-thought techniques",
      ],
    },
    {
      time: "May 2024 - July 2024",
      role: "AI Intern",
      org: "Schneider Electric",
      location: "Bengaluru, Karnataka, India",
      points: [
        "Developing a knowledge bot to support SAP ABAP developers",
        "Exploring GenAI solutions for knowledge management, testing, and coding",
        "Researching open-source LLMs for SAP ABAP code generation",
      ],
    },
    {
      time: "September 2023 - December 2023",
      role: "AI Research Intern",
      org: "IIT Kharagpur",
      location: "Kharagpur, West Bengal, India",
      points: [
        "Developed V2V Information System with data from 35+ countries",
        "Fine-tuned llama-2-7b on 500+ fisheries surveys using PEFT",
        "Implemented custom RAG system using Sentence Transformers and FAISS",
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {items.map((item, i) => (
        <div key={i} className="bg-white dark:bg-apple-gray-800 rounded-3xl p-8 border border-apple-gray-200 dark:border-apple-gray-700 hover:shadow-apple-hover transition-all duration-300 card-apple transform hover:scale-[1.02] hover:-translate-y-1" style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-apple-gray-900 dark:text-white mb-2 group-hover:text-apple-blue transition-colors">
                {item.role} · {item.org}
              </h3>
              <p className="text-apple-blue font-medium mb-1">{item.time}</p>
              <p className="text-apple-gray-500 dark:text-apple-gray-400 text-sm">{item.location}</p>
            </div>
            <ul className="flex-1 space-y-3">
              {item.points.map((point, j) => (
                <li key={j} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-apple-blue to-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                  <span className="text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

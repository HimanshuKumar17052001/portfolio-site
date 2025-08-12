import { useEffect, useState } from "react";

export default function AIPortfolio() {
  // Himanshu Kumar's AI Engineer Portfolio - Apple-inspired design with real content
  // Following Apple's principles: minimalism, product focus, clear hierarchy, smooth motion

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
    <div className="min-h-[100svh] antialiased font-sans bg-white text-apple-gray-900 dark:bg-apple-gray-900 dark:text-white">
      {/* Apple-style navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 dark:bg-apple-gray-900/70 dark:border-apple-gray-800">
        <Nav sections={sections} isDark={isDark} onToggleTheme={toggleTheme} />
      </header>

      <main className="relative">
        {/* Hero Section - Apple-style large typography and spacing */}
        <section className="pt-20 pb-24 px-6 max-w-6xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-apple-gray-900 dark:text-white mb-6 animate-fade-up">
              Himanshu Kumar
            </h1>
            <p className="text-2xl sm:text-3xl text-apple-gray-600 dark:text-apple-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto animate-slide-up">
              AI Engineer & Data Scientist
            </p>
            <p className="text-lg text-apple-gray-500 dark:text-apple-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up">
              M.Sc. Economics with AI specialization from IIT Kharagpur. 
              Building AI agents and LLM solutions for real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center bg-apple-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-apple-blue/30 btn-apple"
              >
                View Projects
              </a>
              <a 
                href="#skills" 
                className="inline-flex items-center justify-center border border-apple-gray-300 text-apple-gray-700 dark:text-white dark:border-apple-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-apple-gray-50 dark:hover:bg-apple-gray-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-apple-gray-500/30 btn-apple"
              >
                See Skills
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-apple-blue uppercase tracking-widest mb-3">About</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-apple-gray-900 dark:text-white mb-6">Who I Am</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed mb-6">
              Hello, I'm Himanshu Kumar, a graduate of IIT Kharagpur with an M.Sc. (5Y) in Economics 
              with Micro Specialization in Artificial Intelligence and Applications.
            </p>
            <p className="text-lg text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed">
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
            {skills.map((skill) => (
              <div key={skill} className="bg-apple-gray-50 dark:bg-apple-gray-800 rounded-2xl p-6 text-center hover:bg-apple-gray-100 dark:hover:bg-apple-gray-700 transition-all duration-300 hover:shadow-apple card-apple">
                <span className="text-apple-gray-900 dark:text-white font-medium">{skill}</span>
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
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
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
                className="inline-flex items-center justify-center bg-apple-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-apple-blue/30 btn-apple"
                href="mailto:himanshu.kumar0012@gmail.com"
              >
                Email Me
              </a>
              <a
                className="inline-flex items-center justify-center border border-apple-gray-300 text-apple-gray-700 dark:text-white dark:border-apple-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:bg-apple-gray-50 dark:hover:bg-apple-gray-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-apple-gray-500/30 btn-apple"
                href="/resume.pdf"
                download
              >
                Download Resume
              </a>
            </div>
            <div className="mt-8 space-y-2">
              <p className="text-apple-gray-600">
                <strong>LinkedIn:</strong> 
                <a href="https://www.linkedin.com/in/himanshu-k-377095102" target="_blank" rel="noopener noreferrer" className="text-apple-blue hover:underline ml-2">
                  himanshu-k-377095102
                </a>
              </p>
              <p className="text-apple-gray-600">
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
        <div className="w-8 h-8 rounded-full bg-apple-blue" />
        <span className="text-xl font-semibold text-apple-gray-900 dark:text-white">Himanshu Kumar</span>
      </div>
      <ul className="hidden md:flex items-center gap-8">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              className="text-apple-gray-600 dark:text-apple-gray-300 hover:text-apple-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
              href={`#${section.id}`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleTheme}
          aria-label="Toggle dark mode"
          className="inline-flex items-center justify-center rounded-full border border-apple-gray-300 dark:border-apple-gray-700 px-3 py-2 text-sm text-apple-gray-700 dark:text-white hover:bg-apple-gray-50 dark:hover:bg-apple-gray-800 transition"
        >
          {isDark ? 'Light' : 'Dark'} mode
        </button>
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-apple-blue text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-apple-blue/30 btn-apple"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

function ProjectCard({ title, blurb, meta, link, highlight }) {
  return (
    <div className="group animate-scale-in">
      <div className="bg-white dark:bg-apple-gray-800 rounded-3xl p-8 border border-apple-gray-200 dark:border-apple-gray-700 hover:shadow-apple-large transition-all duration-500 hover:-translate-y-2 card-apple">
        {highlight && (
          <span className="inline-block bg-apple-blue/10 text-apple-blue text-xs font-medium px-3 py-1 rounded-full mb-4">
            {highlight}
          </span>
        )}
        <h3 className="text-2xl font-bold text-apple-gray-900 dark:text-white mb-4">{title}</h3>
        <p className="text-apple-gray-600 dark:text-apple-gray-300 text-lg leading-relaxed mb-4">{blurb}</p>
        <p className="text-apple-gray-500 dark:text-apple-gray-400 text-sm mb-6">{meta}</p>
        <div className="inline-flex items-center gap-2 text-apple-blue font-medium group-hover:gap-3 transition-all duration-300">
          <span>Learn More</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
        <div key={i} className="bg-white dark:bg-apple-gray-800 rounded-3xl p-8 border border-apple-gray-200 dark:border-apple-gray-700 hover:shadow-apple-hover transition-all duration-300 card-apple">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-apple-gray-900 dark:text-white mb-2">{item.role} · {item.org}</h3>
              <p className="text-apple-blue font-medium mb-1">{item.time}</p>
              <p className="text-apple-gray-500 dark:text-apple-gray-400 text-sm">{item.location}</p>
            </div>
            <ul className="flex-1 space-y-3">
              {item.points.map((point, j) => (
                <li key={j} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-apple-blue rounded-full mt-2 flex-shrink-0" />
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

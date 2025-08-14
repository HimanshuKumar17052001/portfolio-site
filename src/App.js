import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";

export default function AIPortfolio() {
  // Himanshu Kumar's AI Engineer Portfolio - Apple-inspired design with real content
  // Enhanced with AI-themed dynamic effects, 3D transforms, and advanced animations
  // Following Apple's principles: minimalism, product focus, clear hierarchy, smooth motion

  const [isDark, setIsDark] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fullName = "Himanshu Kumar";
  
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enableDark = saved ? saved === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', enableDark);
    setIsDark(enableDark);

    // Typewriter effect
    if (isTyping && currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(fullName.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else if (currentIndex === fullName.length) {
      setIsTyping(false);
    }
  }, [isTyping, currentIndex, fullName]);

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
    <div ref={containerRef} className="min-h-[100svh] antialiased font-sans bg-white text-apple-gray-900 dark:bg-apple-gray-900 dark:text-white overflow-x-hidden">
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
        {/* Hero Section - AI-themed with 3D effects and typewriter */}
        <motion.section 
          className="pt-20 pb-24 px-6 max-w-6xl mx-auto text-center relative"
          style={{ y, opacity }}
        >
          {/* Floating AI Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-2xl"
              animate={{ y: [10, -15, 10] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.h1 
              className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                {typewriterText}
                {isTyping && <span className="animate-pulse">|</span>}
              </span>
            </motion.h1>
            <motion.p 
              className="text-2xl sm:text-3xl text-apple-gray-600 dark:text-apple-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              <motion.span 
                className="inline-block"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                AI
              </motion.span> Engineer & Data Scientist
            </motion.p>
            <motion.p 
              className="text-lg text-apple-gray-500 dark:text-apple-gray-300 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            >
              M.Sc. Economics with AI specialization from IIT Kharagpur. 
              Building AI agents and LLM solutions for real-world problems.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            >
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
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.p 
              className="text-sm font-medium text-apple-blue uppercase tracking-widest mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About
            </motion.p>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-apple-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Who I Am
            </motion.h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <motion.p 
              className="text-xl text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hello, I'm Himanshu Kumar, a graduate of IIT Kharagpur with an M.Sc. (5Y) in Economics 
              with Micro Specialization in Artificial Intelligence and Applications.
            </motion.p>
            <motion.p 
              className="text-lg text-apple-gray-600 dark:text-apple-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I am passionate about Data Science, Analytics, and AI/ML. Eager to apply academic knowledge 
              and project experience to solve real-world problems with innovative AI solutions.
            </motion.p>
          </div>
        </motion.section>

        {/* Skills Section with Interactive Neural Network */}
        <motion.section 
          id="skills" 
          className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.p 
              className="text-sm font-medium text-apple-blue uppercase tracking-widest mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Skills
            </motion.p>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-apple-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Core Competencies
            </motion.h2>
          </div>
          
          {/* Interactive Neural Network Visualization */}
          <div className="mb-12">
            <NeuralNetwork skills={skills} />
          </div>
          
          {/* Traditional Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill} 
                className="group bg-apple-gray-50 dark:bg-apple-gray-800 rounded-2xl p-6 text-center hover:bg-apple-gray-100 dark:hover:bg-apple-gray-700 transition-all duration-300 hover:shadow-apple card-apple transform hover:scale-105 hover:-translate-y-2"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <span className="text-apple-gray-900 dark:text-white font-medium group-hover:text-apple-blue transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section with 3D Cards */}
        <motion.section 
          id="projects" 
          className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.p 
              className="text-sm font-medium text-apple-blue uppercase tracking-widest mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Projects
            </motion.p>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-apple-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Featured Work
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard3D key={project.title} {...project} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience" 
          className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.p 
              className="text-sm font-medium text-apple-blue uppercase tracking-widest mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Experience
            </motion.p>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-apple-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional Journey
            </motion.h2>
          </div>
          <Timeline3D />
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.p 
              className="text-sm font-medium text-apple-blue uppercase tracking-widest mb-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Contact
            </motion.p>
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-apple-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's Connect
            </motion.h2>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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
            </motion.div>
            <motion.div 
              className="mt-8 space-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-apple-gray-600 dark:text-apple-gray-300">
                <strong>LinkedIn:</strong> 
                <a href="https://www.linkedin.com/in/himanshu-k-377095102" target="_blank" rel="noopener noreferrer" className="text-apple-blue hover:underline ml-2">
                  himanshu-k-377095102
                </a>
              </p>
              <p className="text-apple-gray-600 dark:text-apple-gray-300">
                <strong>Location:</strong> Bengaluru, Karnataka, India
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="py-16 px-6 text-center border-t border-apple-gray-200 dark:border-apple-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-apple-gray-500 dark:text-apple-gray-400">© {new Date().getFullYear()} Himanshu Kumar. Built with care and no nonsense.</p>
        </div>
      </footer>
    </div>
  );
}

// Neural Network Visualization Component
function NeuralNetwork({ skills }) {
  const layers = [
    skills.slice(0, 6),    // Input layer
    skills.slice(6, 12),   // Hidden layer 1
    skills.slice(12, 18),  // Hidden layer 2
    skills.slice(18)       // Output layer
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto h-64 mb-12">
      {/* Neural Network Connections */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        {layers.map((layer, layerIndex) => {
          if (layerIndex === layers.length - 1) return null;
          const nextLayer = layers[layerIndex + 1];
          return layer.map((_, nodeIndex) => 
            nextLayer.map((_, nextNodeIndex) => (
              <line
                key={`${layerIndex}-${nodeIndex}-${nextNodeIndex}`}
                x1={`${(layerIndex * 25) + 12.5}%`}
                y1={`${(nodeIndex * 100 / (layer.length - 1)) + 12.5}%`}
                x2={`${((layerIndex + 1) * 25) + 12.5}%`}
                y2={`${(nextNodeIndex * 100 / (nextLayer.length - 1)) + 12.5}%`}
                stroke="url(#gradient)"
                strokeWidth="1"
                opacity="0.3"
                className="animate-pulse"
              />
            ))
          );
        })}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Neural Network Nodes */}
      {layers.map((layer, layerIndex) => (
        <div key={layerIndex} className="absolute top-0 h-full" style={{ left: `${layerIndex * 25}%`, width: '25%' }}>
          {layer.map((skill, nodeIndex) => (
            <motion.div
              key={skill}
              className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white dark:border-apple-gray-800 shadow-lg"
              style={{ 
                top: `${(nodeIndex * 100 / (layer.length - 1))}%`,
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (layerIndex * 0.2) + (nodeIndex * 0.1) }}
              whileHover={{ scale: 1.5, zIndex: 10 }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-apple-gray-800 px-2 py-1 rounded text-xs text-apple-gray-900 dark:text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {skill}
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

// 3D Project Card Component
function ProjectCard3D({ title, blurb, meta, link, highlight, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className="group perspective-1000"
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ 
        rotateY: 5,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Face */}
        <div className="absolute inset-0 bg-white dark:bg-apple-gray-800 rounded-3xl p-8 border border-apple-gray-200 dark:border-apple-gray-700 hover:shadow-apple-large transition-all duration-500 hover:-translate-y-2 card-apple backface-hidden">
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
            <span>Click to flip</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-apple-gray-700 dark:to-apple-gray-800 rounded-3xl p-8 border border-apple-gray-200 dark:border-apple-gray-700 rotate-y-180 backface-hidden">
          <div className="text-center h-full flex flex-col justify-center">
            <h4 className="text-xl font-bold text-apple-gray-900 dark:text-white mb-4">Project Details</h4>
            <p className="text-apple-gray-600 dark:text-apple-gray-300 mb-6">
              Click again to see the front
            </p>
            <div className="space-y-2">
              <div className="w-full bg-apple-gray-200 dark:bg-apple-gray-600 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full animate-pulse" style={{ width: '85%' }}></div>
              </div>
              <p className="text-sm text-apple-gray-500 dark:text-apple-gray-400">Completion: 85%</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 3D Timeline Component
function Timeline3D() {
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
        <motion.div 
          key={i} 
          className="bg-white dark:bg-apple-gray-800 rounded-3xl p-8 border border-apple-gray-200 dark:border-apple-gray-700 hover:shadow-apple-hover transition-all duration-300 card-apple"
          initial={{ opacity: 0, x: -50, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          whileHover={{ 
            scale: 1.02, 
            y: -8,
            rotateY: 5,
            transition: { duration: 0.3 }
          }}
        >
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
        </motion.div>
      ))}
    </div>
  );
}

function Nav({ sections, isDark, onToggleTheme }) {
  return (
    <nav className="max-w-6xl mx-auto flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <motion.div 
          className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
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
        <motion.button
          onClick={onToggleTheme}
          aria-label="Toggle dark mode"
          className="inline-flex items-center justify-center rounded-full border border-apple-gray-300 dark:border-apple-gray-700 px-3 py-2 text-sm text-apple-gray-700 dark:text-white hover:bg-apple-gray-50 dark:hover:bg-apple-gray-800 transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDark ? '☀️' : '🌙'}
        </motion.button>
        <motion.a
          href="#contact"
          className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-apple-blue/30 btn-apple transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </motion.a>
      </div>
    </nav>
  );
}

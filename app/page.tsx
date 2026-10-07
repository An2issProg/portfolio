"use client";

import { useState } from "react";

// Project images data
const yallacleanImages = [
  "/files/yallaclean/Capture d'écran 2025-07-15 à 02.27.57.png",
  "/files/yallaclean/Screenshot 2025-07-15 at 04-13-00 Create Next App.png",
  "/files/yallaclean/Yalla.png",
  "/files/yallaclean/admin-clients.png",
  "/files/yallaclean/admin-workers.png",
  "/files/yallaclean/ajout client.png",
  "/files/yallaclean/ajout travailleur.png",
  "/files/yallaclean/carte.png",
  "/files/yallaclean/dashboard travailleur.png",
  "/files/yallaclean/edit product.png",
  "/files/yallaclean/inscrire.png",
  "/files/yallaclean/interface ajout reservation.png",
  "/files/yallaclean/landing.png",
  "/files/yallaclean/login.png",
  "/files/yallaclean/mes reservation client.png",
  "/files/yallaclean/mes reservation.png",
  "/files/yallaclean/page - Copie.png",
  "/files/yallaclean/page ajout service.png",
  "/files/yallaclean/page client (2).png",
  "/files/yallaclean/page client produit.png",
  "/files/yallaclean/page client.png",
  "/files/yallaclean/page dashboard.png",
  "/files/yallaclean/page ouvrir journee.png",
  "/files/yallaclean/page passer commande.png",
  "/files/yallaclean/page products.png",
  "/files/yallaclean/page reservation.png",
  "/files/yallaclean/page service.png",
  "/files/yallaclean/page travailleur.png",
  "/files/yallaclean/page.png",
  "/files/yallaclean/signup.png",
  "/files/yallaclean/totoale.png",
  "/files/yallaclean/worker-dashboard.png",
];

const carstodoImages = [
  "/files/carstodo/APP fluuter CARSTODO/car.png",
  "/files/carstodo/APP fluuter CARSTODO/dash chauf.png",
  "/files/carstodo/APP fluuter CARSTODO/dashb.png",
  "/files/carstodo/APP fluuter CARSTODO/entretien.png",
  "/files/carstodo/APP fluuter CARSTODO/flutt home.png",
  "/files/carstodo/APP fluuter CARSTODO/fluttter app.png",
  "/files/carstodo/APP fluuter CARSTODO/home.png",
  "/files/carstodo/APP fluuter CARSTODO/lcoations.png",
  "/files/carstodo/APP fluuter CARSTODO/login flut.png",
  "/files/carstodo/APP fluuter CARSTODO/login.png",
  "/files/carstodo/APP fluuter CARSTODO/message.png",
  "/files/carstodo/APP fluuter CARSTODO/register.png",
  "/files/carstodo/APP fluuter CARSTODO/rental flut.png",
  "/files/carstodo/APP fluuter CARSTODO/transferts.png",
  "/files/carstodo/APP fluuter CARSTODO/user.png",
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  const skills = [
    // Frontend
    { name: "Tailwind CSS", emoji: "🎨", level: 95, category: "Frontend" },
    { name: "Bootstrap", emoji: "🅱️", level: 90, category: "Frontend" },
    { name: "Sass/SCSS", emoji: "💎", level: 85, category: "Frontend" },
    { name: "React.js", emoji: "⚛️", level: 92, category: "Frontend" },
    { name: "Next.js", emoji: "▲", level: 90, category: "Frontend" },
    { name: "Angular", emoji: "🅰️", level: 88, category: "Frontend" },
    { name: "Docker", emoji: "🐳", level: 75, category: "Frontend" },
    { name: "Git", emoji: "🎯", level: 85, category: "Frontend" },
    // Backend
    { name: "PHP", emoji: "🐘", level: 88, category: "Backend" },
    { name: "Laravel", emoji: "🔴", level: 90, category: "Backend" },
    { name: "Node.js", emoji: "💚", level: 85, category: "Backend" },
    { name: "Express.js", emoji: "⚡", level: 82, category: "Backend" },
    { name: "API REST", emoji: "🔄", level: 92, category: "Backend" },
    { name: "CRUD", emoji: "📝", level: 95, category: "Backend" },
    { name: "Authentication", emoji: "🔐", level: 80, category: "Backend" },
    { name: "Authorization", emoji: "👑", level: 78, category: "Backend" },
    { name: "JWT", emoji: "🎫", level: 85, category: "Backend" },
    // Base de données
    { name: "MySQL", emoji: "🐬", level: 90, category: "Base de données" },
    { name: "PostgreSQL", emoji: "🐘", level: 85, category: "Base de données" },
    { name: "SQL", emoji: "🗃️", level: 92, category: "Base de données" },
    { name: "MongoDB", emoji: "🍃", level: 80, category: "Base de données" },
    { name: "Création de tables", emoji: "📊", level: 88, category: "Base de données" },
    { name: "Relations SQL", emoji: "🔗", level: 85, category: "Base de données" },
    { name: "Primary/Foreign Key", emoji: "🔑", level: 87, category: "Base de données" },
    { name: "Migrations", emoji: "🚀", level: 83, category: "Base de données" },
    // Sécurité
    { name: "HTTPS / SSL", emoji: "🔒", level: 88, category: "Sécurité" },
    { name: "Hashage mots de passe", emoji: "🔐", level: 85, category: "Sécurité" },
    { name: "Authentication", emoji: "🛡️", level: 82, category: "Sécurité" },
    { name: "Authorization", emoji: "👑", level: 80, category: "Sécurité" },
    { name: "CORS", emoji: "🌐", level: 85, category: "Sécurité" },
    { name: "JWT", emoji: "🎫", level: 87, category: "Sécurité" },
    // Outils professionnels
    { name: "VS Code", emoji: "💻", level: 95, category: "Outils professionnels" },
    { name: "GitHub", emoji: "🐙", level: 90, category: "Outils professionnels" },
    { name: "GitLab", emoji: "🦊", level: 85, category: "Outils professionnels" },
    { name: "Figma", emoji: "🎨", level: 80, category: "Outils professionnels" },
    { name: "Postman", emoji: "📬", level: 88, category: "Outils professionnels" },
    { name: "MySQL Workbench", emoji: "🐬", level: 85, category: "Outils professionnels" },
    { name: "phpMyAdmin", emoji: "🗄️", level: 82, category: "Outils professionnels" },
  ];

  const filteredSkills = skills.filter(skill => skill.category === selectedCategory);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showCarstodoModal, setShowCarstodoModal] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IS</span>
              </div>
              <div>
                <div className="font-semibold text-lg">ANIS BEN TALEB</div>
                <div className="text-xs text-zinc-400">FULL STACK - Developer</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-zinc-300 hover:text-purple-400 transition-colors">À Propos</a>
              <a href="#skills" className="text-zinc-300 hover:text-purple-400 transition-colors">Compétences</a>
              <a href="#experience" className="text-zinc-300 hover:text-purple-400 transition-colors">Expérience</a>
              <a href="#projects" className="text-zinc-300 hover:text-purple-400 transition-colors">Projets</a>
              <a href="#contact" className="text-zinc-300 hover:text-purple-400 transition-colors">Contact</a>
            </nav>

            {/* Contact Button */}
            <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-purple-500 to-green-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Me contacter
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            {/* Availability Badge */}
            <div className="flex justify-center lg:justify-start mb-4">
              <div className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-full text-sm text-zinc-300 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Disponible pour missions freelance/CDI
              </div>
            </div>
            <div className="relative">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-purple-500 to-green-500 p-1">
                <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
                  <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-zinc-900 rounded-2xl p-4 text-center border border-zinc-800">
                <div className="text-2xl font-bold text-purple-400">3+</div>
                <div className="text-sm text-zinc-400">Projets</div>
              </div>
              <div className="bg-zinc-900 rounded-2xl p-4 text-center border border-zinc-800">
                <div className="text-2xl font-bold text-green-400">38+</div>
                <div className="text-sm text-zinc-400">Technologies</div>
              </div>
              <div className="bg-zinc-900 rounded-2xl p-4 text-center border border-zinc-800">
                <div className="text-2xl font-bold text-purple-400">2+</div>
                <div className="text-sm text-zinc-400">Expériences</div>
              </div>
              <div className="bg-zinc-900 rounded-2xl p-4 text-center border border-zinc-800">
                <div className="text-2xl font-bold text-green-400">7+</div>
                <div className="text-sm text-zinc-400">Outils</div>
              </div>
            </div>
          </div>

          {/* Who am I Section */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            {/* Name with Gradient */}
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                ANIS BEN TALEB
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400"></div>
            </div>

            {/* Subtitle */}
            <h2 className="text-xl lg:text-2xl text-zinc-400 mb-6">
              Ingénieur Full Stack Junior
            </h2>

            {/* Description */}
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              Je suis diplômé d'un BTS 'Technicien Supérieur' en Développement sur Internet et je suis développeur web junior. Je possède des compétences en JavaScript, Next.js, Angular, Spring boot, PHP, Laravel et MySQL, ainsi qu'en intégration d'API. J'ai également acquis une expérience professionnelle chez Teknoisland dans le développement et la maintenance de solutions web.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <a href="#projects" className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg border-2 border-purple-600 hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Voir mes projets
              </a>
              <a href="/cv.pdf" download className="px-8 py-3 bg-zinc-800 text-white font-semibold rounded-lg border-2 border-zinc-700 hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Télécharger CV
              </a>
              <a href="#contact" className="px-8 py-3 bg-zinc-800 text-white font-semibold rounded-lg border-2 border-blue-500 hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Technique Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Stack Technique</h2>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Rechercher une compétence..."
            className="w-full max-w-md px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {["Frontend", "Backend", "Base de données", "Sécurité", "Outils professionnels"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-purple-500 text-white hover:bg-purple-600"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-purple-500/50 transition-colors"
            >
              <div className="text-3xl mb-3">{skill.emoji}</div>
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${index % 2 === 0 ? 'bg-purple-500' : 'bg-green-500'}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parcours Professionnel Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Parcours Professionnel</h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-green-500"></div>

          {/* Experience 1 */}
          <div className="relative mb-12 lg:mb-16">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2 lg:text-right lg:pr-12">
                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 ml-8 lg:ml-0">
                  <h3 className="text-xl font-bold text-purple-400 mb-2"> Développer des APIs REST. </h3>
                  <p className="text-zinc-400 mb-2">ThinkTrend ' DAR CHABEN EL FEHRI'</p>
                  <p className="text-sm text-zinc-500 mb-4">2024 - Présent</p>
                  <p className="text-zinc-300 mb-4">
                    Concevoir et développer des applications web modernes, responsives et performantes.
                  </p>
                  <ul className="text-sm text-zinc-400 space-y-2">
                    <li>• Architecture et développement de solutions Power Platform</li>
                    <li>• Intégration REST APIs sécurisées</li>
                    <li>• Formation et accompagnement des équipes</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4 justify-end">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Flutter </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Laravel</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">JavaScript</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-12"></div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2 lg:pr-12"></div>
              <div className="lg:w-1/2 lg:pl-12">
                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 ml-8 lg:ml-0">
                  <h3 className="text-xl font-bold text-green-400 mb-2">Développeur Full Stack</h3>
                  <p className="text-zinc-400 mb-2">Teknoisland . Agency ' Hammamet' </p>
                  <p className="text-sm text-zinc-500 mb-4">2025 - 2026 </p>
                  <p className="text-zinc-300 mb-4">
                    Développement d'applications web modernes avec Angular et Node.js.
                  </p>
                  <ul className="text-sm text-zinc-400 space-y-2">
                    <li>• Création d'interfaces utilisateur responsives</li>
                    <li>• Développement d'API RESTful</li>
                    <li>• Développer des pages avec HTML, CSS, JavaScript.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Angular</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Node.js</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Projets</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card: Yalla Clean */}
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-purple-500/50 transition-colors">
            <div className="mb-4">
              <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-green-500/20 rounded-xl flex items-center justify-center mb-4 overflow-hidden cursor-pointer" onClick={() => setShowImageModal(true)}>
                <img src="/yallaclean.png" alt="Yalla Clean" className="w-full h-full object-contain p-4" />
              </div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Yalla Clean</h3>
              <p className="text-zinc-300 mb-4">MERN application for cleaning services with complete management</p>
            </div>

            {/* Features */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-zinc-400 mb-2">Features</h4>
              <ul className="text-sm text-zinc-300 space-y-1">
                <li>• 20+ products</li>
                <li>• Shopping cart & orders</li>
                <li>• Admin dashboard</li>
                <li>• Jury validated project</li>
              </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">NextJs</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">MongoDB</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Node.js</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">JWT</span>
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">Google Maps</span>
                             <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">prisma</span>
            </div>

            {/* GitHub Button */}
            <div className="mt-4">
              <a href="https://github.com/An2issProg/pffend" target="_blank" rel="noopener noreferrer" className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Project Card: Carstodo */}
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-green-500/50 transition-colors">
            <div className="mb-4">
              <div className="w-full h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 overflow-hidden cursor-pointer" onClick={() => setShowCarstodoModal(true)}>
                <img src="/carstodo.png" alt="Carstodo" className="w-full h-full object-contain p-4" />
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Carstodo</h3>
              <p className="text-zinc-300 mb-4"> Application Web | Car rental & transfer app | iOS Flutter </p>
            </div>

            {/* Features */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-zinc-400 mb-2">Features</h4>
              <ul className="text-sm text-zinc-300 space-y-1">
                <li>• Real-time updates</li>
                <li>• Team collaboration | Friend system</li>
                <li>• Drag & drop interface</li>
                <li>• Flutter Feature Implémentation</li>
              </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Next.js</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">TypeScript</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">MySQL </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Laravel</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">Prisma</span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">Google Maps</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Flutter iOS</span>
            </div>

            {/* GitHub Button */}
            <div className="mt-4">
              <a href="https://github.com/An2issProg/CAAARS" target="_blank" rel="noopener noreferrer" className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Project Card: Neapolis Transfers */}
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-blue-500/50 transition-colors">
            <div className="mb-4">
              <a href="https://www.neapolistransfers.com/" target="_blank" rel="noopener noreferrer" className="block">
                <div className="w-full h-48 bg-white rounded-xl flex items-center justify-center mb-4 overflow-hidden cursor-pointer relative group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20">
                  <img src="/neapolis.png" alt="Neapolis Transfers" className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Neapolis Transfers</h3>
              <p className="text-zinc-300 mb-4">Car rental & transfer service with booking management</p>
            </div>

            {/* Features */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-zinc-400 mb-2">Features</h4>
              <ul className="text-sm text-zinc-300 space-y-1">
             <li>• Real-time updates</li>
                <li>• Team collaboration | Friend system</li>
                <li>• Drag & drop interface</li>
                <li>• Full Rest Api & Innovative Architecture</li>
                  <li>• Real-time updates</li>
                <li>• Secured | Hyberged </li>
                
              </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">NextJs</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">REST API</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">PostgeSQL</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">Axios</span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs">Google Maps</span> 
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs"> Real-time updates</span>
            </div>

            {/* GitHub Button */}
            <div className="mt-4">
              <a href="https://github.com/An2issProg/apolis-transfers" target="_blank" rel="noopener noreferrer" className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Nom</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-green-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* Contact Direct */}
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-xl font-semibold mb-6">Contact direct</h3>
              <div className="space-y-4">
                <a href="tel:+33123456789" className="flex items-center gap-4 p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors">
                  <span className="text-2xl">📱</span>
                  <div>
                    <div className="text-sm text-zinc-400">Téléphone</div>
                    <div className="font-medium">+216 22 785 918 </div>
                  </div>
                </a>
                <a href="mailto:contact@example.com" className="flex items-center gap-4 p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors">
                  <span className="text-2xl">📧</span>
                  <div>
                    <div className="text-sm text-zinc-400">Email</div>
                    <div className="font-medium">eniss.officiel10@gmail.com</div>
                  </div>
                </a>
                <a href="https://github.com/An2issProg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                  <svg className="w-8 h-8 text-zinc-100 hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div>
                    <div className="text-sm text-zinc-400">GitHub</div>
                    <div className="font-medium">View my projects</div>
                  </div>
                </a>
                <a href="https://wa.me/21622785918" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
                  <svg className="w-8 h-8 text-zinc-100 hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div>
                    <div className="text-sm text-zinc-400">WhatsApp</div>
                    <div className="font-medium">+216 22 785 918</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h3 className="text-xl font-semibold">Disponible</h3>
                  <p className="text-zinc-400">Freelance & CDI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IS</span>
                </div>
                <div>
                  <div className="font-semibold text-lg">ANIS BEN TALEB</div>
                  <div className="text-xs text-blue-200">FULL STACK - Developer</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">À Propos</a></li>
                <li><a href="#skills" className="text-blue-200 hover:text-white transition-colors">Compétences</a></li>
                <li><a href="#experience" className="text-blue-200 hover:text-white transition-colors">Expérience</a></li>
                <li><a href="#projects" className="text-blue-200 hover:text-white transition-colors">Projets</a></li>
                <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="flex gap-4">
                <a href="https://github.com/An2issProg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="mailto:eniss.officiel10@gmail.com" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a href="https://wa.me/21622785918" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm">
              © 2024 ANIS BEN TALEB. Tous droits réservés.
            </div>
            <div className="text-blue-200 text-sm mt-4 md:mt-0">
              Réalisé avec Next.js + Tailwind CSS
            </div>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setShowImageModal(false)}>
          <div className="bg-zinc-900 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Yalla Clean Screenshots</h3>
              <button onClick={() => setShowImageModal(false)} className="text-zinc-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {yallacleanImages.map((image, index) => (
                <img key={index} src={image} alt={`Yalla Clean screenshot ${index + 1}`} className="w-full rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Carstodo Image Modal */}
      {showCarstodoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setShowCarstodoModal(false)}>
          <div className="bg-zinc-900 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Carstodo Screenshots</h3>
              <button onClick={() => setShowCarstodoModal(false)} className="text-zinc-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {carstodoImages.map((image, index) => (
                <img key={index} src={image} alt={`Carstodo screenshot ${index + 1}`} className="w-full rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

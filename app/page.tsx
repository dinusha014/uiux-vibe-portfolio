import Image from "next/image";

// Profile Photo
import profileImg from "@/public/profile.png";

// UI/UX Projects
import yaleImg from "@/public/yale-art.png";
import darazImg from "@/public/daraz-ui.png";

// Flyer Images
import flyer01 from "@/public/01.jpeg";
import flyer02 from "@/public/02.jpeg";
import flyer03 from "@/public/03.jpeg";
import flyer04 from "@/public/04.jpeg";
import flyer05 from "@/public/05.jpeg";
import flyer06 from "@/public/06.jpeg";
import flyer07 from "@/public/07.jpeg";
import flyer08 from "@/public/08.jpeg";
import flyer09 from "@/public/09.jpeg";
import flyer10 from "@/public/10.jpeg";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090a0f] text-white p-6 md:p-12 font-sans overflow-x-hidden selection:bg-purple-500 selection:text-white">
      
      {/* Top Status Bar */}
      <header className="flex justify-between items-center border-b border-gray-800/80 pb-4 mb-12 max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="h-2.5 w-2.5 bg-purple-500 rounded-full animate-ping"></span>
          <span className="text-xs font-mono text-gray-300 tracking-wider">VIBE_CODING_LAB // ACTIVE</span>
        </div>
        <div className="text-xs font-mono text-gray-500">HORIZON CAMPUS, SRI LANKA</div>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-6xl mx-auto my-12">
        
        {/* Profile Card */}
        <div className="md:col-span-5 flex justify-center relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-cyan-500/20 to-transparent rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-700"></div>
          
          <div className="relative w-64 md:w-72 h-[340px] md:h-[380px] rounded-2xl border border-purple-500/30 bg-gray-900/60 backdrop-blur-xl p-2 shadow-2xl overflow-hidden group-hover:border-purple-400 transition duration-500">
            <Image
              src={profileImg}
              alt="Chamod Dinusha"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover rounded-xl filter brightness-105 transition duration-500 group-hover:scale-105"
              priority
            />
            
            <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-md border border-white/10 p-2.5 rounded-lg text-center">
              <span className="text-xs font-mono text-purple-300 block">CHAMOD DINUSHA</span>
              <span className="text-[10px] text-gray-400">UI/UX & Vibe Coding Designer</span>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="md:col-span-7">
          <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs font-mono text-purple-400 mb-4">
            ✨ AI-Assisted Design & Code Pipelines
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Designing Interfaces, <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Vibe Coding the Future.
            </span>
          </h1>
          <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed">
            Creative Aspiring Vibe Coding Designer and Web Developer leveraging modern AI tools to accelerate design-to-code workflows, build responsive UIs, and craft engaging digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition shadow-lg shadow-purple-500/25">
              View UI/UX Projects
            </a>
            <a href="#graphics" className="border border-purple-500/40 hover:border-purple-400 px-5 py-2.5 rounded-lg font-medium text-sm text-purple-300 transition">
              Canva & AI Flyers
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-6xl mx-auto my-20">
        <h2 className="text-sm font-mono text-purple-400 tracking-wider mb-6">// TECHNICAL_SKILLSET</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: "AI & Vibe Coding", tools: "AI-Assisted Web Dev, Prompt Engineering, Modern AI Workflows" },
            { title: "UI/UX & Visual Design", tools: "Figma, Canva, Wireframing, Layout & Typography, Responsive Design" },
            { title: "Web Development", tools: "HTML5, CSS3, JavaScript, Basic React, Interface Implementation" },
            { title: "Productivity & Collaboration", tools: "Digital Asset Management, Slack, Zoom, Google Workspace" }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/40 border border-gray-800/80 p-5 rounded-xl hover:border-purple-500/40 transition">
              <h3 className="text-xs font-mono text-purple-300 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 font-medium">{item.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured UI/UX Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto my-20">
        <h2 className="text-sm font-mono text-purple-400 tracking-wider mb-6">// FEATURED_UIUX_PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Project 1: Yale School of Art UI Redesign */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/40 transition flex flex-col justify-between group">
            <div>
              <div className="relative w-full h-56 overflow-hidden bg-gray-950">
                <Image
                  src={yaleImg}
                  alt="Yale School of Art Website Design"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">Campus UI/UX Project</span>
                <h3 className="text-lg font-bold mt-3 mb-2 text-white">Yale School of Art Website Redesign</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Redesigned the educational platform interface focusing on modern typography, hero layouts, responsive grid structures, and interactive navigation elements.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <a
                href="https://www.figma.com/design/hAvKckrJrOpsYFByHwCsgE/Yale-school-of-art---website?node-id=0-1&p=f&t=9jPgHBqPfMG1CAZx-0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                [ Open in Figma ↗ ]
              </a>
            </div>
          </div>

          {/* Project 2: Daraz E-Commerce Service Redesign */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/40 transition flex flex-col justify-between group">
            <div>
              <div className="relative w-full h-56 overflow-hidden bg-gray-950">
                <Image
                  src={darazImg}
                  alt="Daraz E-Commerce Service UI Redesign"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">E-Commerce UI Design</span>
                <h3 className="text-lg font-bold mt-3 mb-2 text-white">Daraz E-Commerce Promotional UI Concept</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Crafted an engaging e-commerce interface featuring high-converting hero promotional banners, category navigation, and modern trending product cards.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <a
                href="https://www.figma.com/design/hFyQTRxX7r1ZnYOBiXrmbU/Daraz---Service?node-id=0-1&p=f&t=p8wQmTkTpI1OUxUJ-0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                [ Open in Figma ↗ ]
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* AI & Canva Graphic Design Showcase Gallery */}
      <section id="graphics" className="max-w-6xl mx-auto my-20">
        <div className="flex justify-between items-end mb-6 border-b border-gray-800/80 pb-4">
          <div>
            <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded">AI & Canva Workflows</span>
            <h2 className="text-2xl font-bold mt-2 text-white">// DIGITAL_CONTENT_&_EVENT_FLYERS</h2>
          </div>
          <span className="text-xs font-mono text-gray-500 hidden sm:block">Campus Media & Promotional Kits</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { img: flyer01, title: "Call for Applications Poster", category: "CSSL GenZ Chapter" },
            { img: flyer02, title: "Merchandise Apparel Flyer", category: "Faculty of IT Merchandise" },
            { img: flyer03, title: "Happy Pongal Harvest Wish", category: "Cultural Event Branding" },
            { img: flyer04, title: "Movie Night Campus Poster", category: "Promotional Entertainment" },
            { img: flyer05, title: "Noodles Dansala Event", category: "Campus Event Media" },
            { img: flyer06, title: "Faculty T-Shirt Order Flyer", category: "Promotional Apparel" },
            { img: flyer07, title: "Career Readiness Session", category: "Campus to Career Branding" },
            { img: flyer08, title: "Resonance IT 2026 Showcase", category: "AI Artwork & Tech Media" },
            { img: flyer09, title: "Mind Maze Champions Poster", category: "Society Celebration Media" },
            { img: flyer10, title: "Guest Speaker Announcement", category: "Campus Career Session" },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900/30 border border-gray-800/80 rounded-xl overflow-hidden hover:border-purple-500/40 transition group">
              <div className="relative w-full h-72 overflow-hidden bg-gray-950">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-4 bg-gray-900/50">
                <span className="text-[10px] font-mono text-cyan-400">{item.category}</span>
                <h3 className="text-sm font-semibold text-white mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Experience Section */}
      <section className="max-w-6xl mx-auto my-20">
        <h2 className="text-sm font-mono text-purple-400 tracking-wider mb-6">// EXPERIENCE_&_LEADERSHIP</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
            <span className="text-xs font-mono text-gray-500">2024 - PRESENT</span>
            <h3 className="text-base font-bold text-white mt-1">UI/UX Design & Digital Content Creator</h3>
            <p className="text-xs text-purple-400 font-mono mb-3">Freelance / Personal Projects</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Combine UI/UX design principles and modern digital tools to deliver high-quality web graphics, templates, and layouts while experimenting with AI tools to speed up asset creation and iterative design workflows.
            </p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl">
            <span className="text-xs font-mono text-gray-500">HORIZON CAMPUS (2023 - PRESENT)</span>
            <h3 className="text-base font-bold text-white mt-1">Editor & Campus Leadership Roles</h3>
            <p className="text-xs text-purple-400 font-mono mb-3">B.Sc. (Hons) in Information Technology</p>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Editor - HITS, Horizon Campus (2024-Present)</li>
              <li>• Editor - English Literary Circle, Horizon Campus</li>
              <li>• Active Member - Community of Cyber Security (C2SH), Horizon Campus</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto my-20 text-center border-t border-gray-800/80 pt-12">
        <h2 className="text-2xl font-bold mb-2">Let's Connect & Create</h2>
        <p className="text-gray-400 text-sm mb-6">Open for UI/UX Design, Vibe Coding, and Web Development opportunities.</p>
        <div className="flex justify-center gap-4">
          <a href="mailto:chamoddinusha176@gmail.com" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg font-medium text-sm transition shadow-lg shadow-purple-500/20">
            Send Email
          </a>
          <a href="https://linkedin.com/in/chamod-dinusha" target="_blank" rel="noopener noreferrer" className="border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-lg font-medium text-sm text-gray-300 transition">
            LinkedIn Profile
          </a>
        </div>
      </section>

    </main>
  );
}
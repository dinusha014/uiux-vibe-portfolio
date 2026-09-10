import Image from "next/image";
import profileImg from "@/public/profile.png";

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
              View Design Experiments
            </a>
            <a href="#contact" className="border border-gray-700 hover:border-gray-500 px-5 py-2.5 rounded-lg font-medium text-sm text-gray-300 transition">
              Get in Touch
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

      {/* Projects / Experiments */}
      <section id="projects" className="max-w-6xl mx-auto my-20">
        <h2 className="text-sm font-mono text-purple-400 tracking-wider mb-6">// VIBE_CODING_&_UI_EXPERIMENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl hover:border-purple-500/40 transition flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">AI Layouts</span>
              <h3 className="text-lg font-bold mt-3 mb-2 text-white">AI-Assisted Web & UI Layout Experiments</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Translated visual design concepts and wireframes directly into functional HTML/CSS/JS layouts using modern AI tools and vibe coding techniques.
              </p>
            </div>
            <span className="text-xs font-mono text-purple-400">Prompt Engineering & Rapid Prototyping</span>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl hover:border-purple-500/40 transition flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">Figma & Canva</span>
              <h3 className="text-lg font-bold mt-3 mb-2 text-white">Digital Content & Brand Assets</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Designed promotional flyers, custom UI components, presentation templates, and social media brand kits adhering to visual design guidelines.
              </p>
            </div>
            <span className="text-xs font-mono text-purple-400">Visual Communication & Branding</span>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 p-6 rounded-xl hover:border-purple-500/40 transition flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded">Campus Projects</span>
              <h3 className="text-lg font-bold mt-3 mb-2 text-white">Academic UI/UX Projects</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Formulated structured resume layouts and interactive prototype concepts for campus events and digital platforms.
              </p>
            </div>
            <span className="text-xs font-mono text-purple-400">User Experience & Prototyping</span>
          </div>

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
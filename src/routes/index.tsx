import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import logo1 from "@/assets/logo1.jpg";
import logo2 from "@/assets/logo2.jpg";
import logo3 from "@/assets/logo3.jpg";
import logo4 from "@/assets/logo4.jpg";
import logo5 from "@/assets/logo5.jpg";
import logo6 from "@/assets/logo6.jpg";
import logo7 from "@/assets/logo7.jpg";
import logo8 from "@/assets/logo8.jpg";
import social1 from "@/assets/social1.jpg";
import social2 from "@/assets/social2.jpg";
import social3 from "@/assets/social3.jpg";
import social4 from "@/assets/social4.jpg";
import social5 from "@/assets/social5.jpg";
import social6 from "@/assets/social6.jpg";
import c1_1 from "@/assets/carousels/c1-1.jpg";
import c1_2 from "@/assets/carousels/c1-2.jpg";
import c1_3 from "@/assets/carousels/c1-3.jpg";
import c1_4 from "@/assets/carousels/c1-4.jpg";
import c1_5 from "@/assets/carousels/c1-5.jpg";
import c1_6 from "@/assets/carousels/c1-6.jpg";
import c1_7 from "@/assets/carousels/c1-7.jpg";
import c1_8 from "@/assets/carousels/c1-8.jpg";
import c2_1 from "@/assets/carousels/c2-1.jpg";
import c2_2 from "@/assets/carousels/c2-2.jpg";
import c2_3 from "@/assets/carousels/c2-3.jpg";
import c2_4 from "@/assets/carousels/c2-4.jpg";
import c2_5 from "@/assets/carousels/c2-5.jpg";
import c3_1 from "@/assets/carousels/c3-1.jpg";
import c3_2 from "@/assets/carousels/c3-2.jpg";
import c3_3 from "@/assets/carousels/c3-3.jpg";
import c3_4 from "@/assets/carousels/c3-4.jpg";
import c3_5 from "@/assets/carousels/c3-5.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shamshad Ali — Graphic Designer Portfolio" },
      { name: "description", content: "Pakistan-based graphic designer specializing in branding, logos, social media designs, and creative print & digital solutions." },
    ],
  }),
});

const services = [
  { icon: "🎨", title: "Logo Design", desc: "Memorable brand marks that define identity and stand out across every touchpoint." },
  { icon: "📱", title: "Social Media Design", desc: "Scroll-stopping creatives for Instagram, Facebook, LinkedIn campaigns and ads." },
  { icon: "💻", title: "Web Design", desc: "Clean, modern UI layouts that convert visitors into loyal customers." },
  { icon: "🖨️", title: "Print Media Design", desc: "Posters, brochures, flyers and packaging crafted with pixel-perfect detail." },
];

const tools = ["Illustrator", "Photoshop", "Figma", "Canva", "InDesign", "Premiere Pro"];

const experience = [
  { co: "Techexa", role: "Graphic Designer", period: "Mar 2026 – Present", type: "Onsite" },
  { co: "VisaQuick Consultancy", role: "Graphic Designer", period: "Jan 2024 – Dec 2025", type: "Onsite" },
  { co: "Lumina Technologies", role: "Graphic Designer", period: "Aug 2024 – Present", type: "Freelance" },
  { co: "14 News HD", role: "Graphic Designer", period: "Jul 2024 – Feb 2025", type: "Freelance" },
  { co: "R&A Solicitors", role: "Graphic Designer", period: "Jan 2024 – May 2024", type: "Freelance" },
  { co: "Recruitment World", role: "Graphic Designer", period: "Feb 2021 – Dec 2024", type: "Freelance" },
  { co: "Al-Ahad-IINA", role: "Graphic Designer", period: "Nov 2022 – Dec 2023", type: "Freelance" },
  { co: "AMOQA", role: "Graphic Designer", period: "Jan 2021 – Aug 2022", type: "Freelance" },
  { co: "DigitalBaba", role: "Graphic Designer", period: "Jan 2020 – Nov 2021", type: "Onsite" },
];

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
const socials = [social1, social2, social3, social4, social5, social6];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-bold tracking-tighter text-sm md:text-base opacity-90 hover:opacity-100 transition truncate max-w-[200px] md:max-w-none">
            https://www.behance.net/shamshadalimajeedi
          </a>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#experience" className="hover:text-foreground transition">Experience</a>
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#tools" className="hover:text-foreground transition">Tools</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a href="https://wa.me/923479580079" target="_blank" rel="noreferrer"
            className="bg-[oklch(0.7_0.18_150)] text-background px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition flex items-center gap-2">
            💬 WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="max-w-7xl mx-auto px-6 pt-20 pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-8">
            🇵🇰 Rawalpindi · Pakistan
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Hi, I'm <br />
            <span style={{ backgroundImage: "var(--gradient-hero)" }} className="bg-clip-text text-transparent">
              Shamshad Ali
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
            Graphic Designer crafting impactful visuals for print & digital.
          </p>
          <p className="text-base text-muted-foreground/80 mb-10 max-w-xl leading-relaxed">
            Results-driven designer specializing in branding, social media designs, and creative
            solutions that help businesses stand out and connect with their audience.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="px-6 py-3 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition shadow-[var(--shadow-glow)]"
              style={{ backgroundImage: "var(--gradient-hero)" }}>
              View My Work →
            </a>
            <a href="https://www.behance.net/shamshadalimajeedi" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg font-semibold border border-border hover:bg-secondary transition flex items-center gap-2">
              🎨 Behance Portfolio
            </a>
          </div>
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["L", "V", "T", "R"].map((c) => (
                <div key={c} className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold border-2 border-background">{c}</div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">9+ brands</span> trusted my design work
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl opacity-30 blur-3xl" style={{ backgroundImage: "var(--gradient-hero)" }} />
          <img src={portrait} alt="Shamshad Ali — Graphic Designer" className="relative rounded-3xl border border-border w-full shadow-[var(--shadow-glow)]" />
          <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-2 text-xs">⚡ Available for Projects</div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border py-4 overflow-hidden bg-card/50">
        <div className="flex gap-12 whitespace-nowrap animate-[scroll_25s_linear_infinite] text-2xl font-bold text-muted-foreground/60">
          {[..."Logo Design • Social Media • Branding • Web Design • Print Media • Visual Identity • Creative Solutions • ".repeat(3)]}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">What I Do</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-14 max-w-2xl">Design services that move brands forward.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/60 hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-card/30 border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-14">5+ years of design experience.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experience.map((e) => (
              <div key={e.co + e.period} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{e.co}</h3>
                  <span className="text-xs bg-primary/15 text-primary px-2 py-1 rounded">{e.type}</span>
                </div>
                <p className="text-sm text-muted-foreground">{e.role}</p>
                <p className="text-xs text-muted-foreground/70 mt-1">{e.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work / Logos */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">Portfolio</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-3">Logo Design</h2>
        <p className="text-muted-foreground mb-12">A selection of brand identities I've crafted.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {logos.map((l, i) => (
            <div key={i} className="aspect-square bg-card border border-border rounded-xl p-6 flex items-center justify-center hover:border-primary/60 hover:scale-105 transition">
              <img src={l} alt={`Logo design ${i + 1}`} className="max-w-full max-h-full object-contain" />
            </div>
          ))}
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mt-24 mb-3">Social Media Design</h2>
        <p className="text-muted-foreground mb-12">Campaign creatives & posters for global brands.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {socials.map((s, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-border group">
              <img src={s} alt={`Social media design ${i + 1}`} className="w-full aspect-square object-cover group-hover:scale-105 transition duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="bg-card/30 border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-primary mb-3">Toolkit</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-14">Tools that I use.</h2>
          <div className="flex flex-wrap gap-3">
            {tools.map((t) => (
              <span key={t} className="px-5 py-3 bg-card border border-border rounded-full font-semibold hover:border-primary hover:text-primary transition">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-28 text-center">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">Let's Work Together</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Have a project in mind?
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Available for freelance projects, branding work, and full-time roles.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/923479580079" target="_blank" rel="noreferrer"
            className="px-7 py-4 rounded-xl font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-90 transition"
            style={{ backgroundImage: "var(--gradient-hero)" }}>
            💬 WhatsApp +92 347 9580079
          </a>
          <a href="mailto:shamshadali878@gmail.com" className="px-7 py-4 rounded-xl font-semibold border border-border hover:bg-secondary transition">
            ✉️ Send an Email
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Shamshad Ali · Graphic Designer · Rawalpindi, Pakistan
      </footer>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

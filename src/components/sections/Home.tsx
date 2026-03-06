import RevealOnScroll from "../RevealOnScroll";

interface HomeProps {
  name: string;
  title: string;
}

const Home = ({ name, title }: HomeProps) => {
  return (
    <section id="home" className="hero section">
      <RevealOnScroll>
        <div className="layout hero-grid">
          <div>
            <p className="eyebrow">Full-Stack Engineer</p>
            <h1>{name}</h1>
            <p className="lead">{title}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn ghost" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <div className="hero-card">
            <h3>Focus Areas</h3>
            <ul>
              <li>FastAPI and Next.js architecture for scalable products</li>
              <li>Secure auth: JWT + RBAC for role-based access control</li>
              <li>AWS cloud familiarity (EC2/S3) with API integration and performance tuning</li>
              <li>AI-powered user workflows and real-time experiences</li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;


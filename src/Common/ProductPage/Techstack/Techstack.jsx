import React from "react";
import "./TechStack.scss";

const STACKS = [
  { group:"Frontend", techs:["React","Next.js","Vue 3","TypeScript","Tailwind","SASS"] },
  { group:"Backend",  techs:["Node.js","Python","Go","NestJS",".NET","FastAPI"] },
  { group:"Database", techs:["PostgreSQL","MongoDB","Redis","Elasticsearch","ClickHouse","Supabase"] },
  { group:"Cloud",    techs:["AWS","GCP","Azure","Docker","Kubernetes","Terraform"] },
  { group:"AI / ML",  techs:["OpenAI","LangChain","HuggingFace","PyTorch","Pinecone","MLflow"] },
];

const TechStack = () => (
  <section className="tech-stack">
    <div className="tech-stack__glow tech-stack__glow--l" />
    <div className="tech-stack__glow tech-stack__glow--r" />
    <div className="tech-stack__container">
      <div className="tech-stack__header">
        <div className="hero_badge"><span />TECHNOLOGY</div>
        <h2 className="heading_title" style={{color: 'white'}}>The Stack Behind <span>Every Product</span></h2>
        <p className="heading_subtitle">
          Modern, battle-tested technologies selected for performance,
          maintainability, and longevity, not trend-chasing.
        </p>
      </div>

      <div className="tech-stack__groups">
        {STACKS.map((s) => (
          <div className="tech-stack__group" key={s.group}>
            <h3 className="tech-stack__group-label">{s.group}</h3>
            <div className="tech-stack__pills">
              {s.techs.map((t) => (
                <span className="tech-stack__pill" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
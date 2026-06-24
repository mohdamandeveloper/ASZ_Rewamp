import React from 'react';
import './TechStack.scss';

const technologies = [
  'React', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'Kubernetes',
  'Terraform', 'Elasticsearch', 'GraphQL', 'TypeScript', 'Docker', 'AWS',
  'Stripe', 'Twilio', 'Sendgrid', 'OpenAI', 'LangChain', 'Pinecone',
];

export default function TechStack() {
  return (
    <section className="stack">
      <div className="stack__header">
        <span className="eyebrow">Technology</span>
        <h2 className="stack__title">
          The Stack Behind <em>Every</em> Product
        </h2>
        <p className="stack__sub">
          We pick boring, battle-tested infrastructure so you don't have to debug
          cutting-edge failures in production.
        </p>
      </div>

      <div className="stack__grid">
        {technologies.map((tech) => (
          <div key={tech} className="stack__chip">
            <span className="stack__chip-dot" />
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}

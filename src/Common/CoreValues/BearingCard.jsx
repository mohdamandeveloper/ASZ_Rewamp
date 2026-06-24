import ValueIcon from './icons.jsx'

export default function BearingCard({ bearing, onActivate, onDeactivate }) {
  return (
    <article
      className="b-card mb-4"
      style={{ '--accent': `var(--e-collaboration)` }}
      tabIndex={0}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
    >
      <div className="b-card__top">
        <div className="b-card__badge">
          <div className="b-card__badge-inner">
            <ValueIcon name={bearing.icon} />
          </div>
        </div>
      </div>

      <h3 className="b-card__title">{bearing.title}</h3>
      <p className="b-card__body">{bearing.body}</p>

      <div className="b-card__tags">
        {bearing.tags.map((t) => (
          <span className="b-tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      <div className="b-card__rule"></div>
    </article>
  )
}

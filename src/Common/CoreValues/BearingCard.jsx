import { useRef } from 'react'
import ValueIcon from './icons.jsx'

// Kept deliberately subtle — this is a text card, not a poster image,
// so the tilt (TiltedCard-style) and magnetism (MagicBento-style) amplitudes
// stay small. No particle/bubble effect is used.
const TILT_AMPLITUDE = 7 // degrees
const MAGNETISM = 0.02

export default function BearingCard({ bearing, onActivate, onDeactivate }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const el = cardRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2

    const rotateX = ((y - cy) / cy) * -TILT_AMPLITUDE
    const rotateY = ((x - cx) / cx) * TILT_AMPLITUDE
    const magnetX = (x - cx) * MAGNETISM
    const magnetY = (y - cy) * MAGNETISM

    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(${magnetX}px, ${magnetY}px)`
    el.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`)
    el.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`)
    el.style.setProperty('--glow-intensity', '1')
  }

  const handleEnter = () => {
    const el = cardRef.current
    if (el) {
      el.style.transition = 'transform 0.12s ease-out, box-shadow 0.4s ease-out, border-color 0.4s ease-out'
    }
    onActivate?.()
  }

  const handleLeave = () => {
    const el = cardRef.current
    if (el) {
      el.style.transition =
        'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease-out, border-color 0.4s ease-out'
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translate(0px, 0px)'
      el.style.setProperty('--glow-intensity', '0')
    }
    onDeactivate?.()
  }

  return (
    <article
      ref={cardRef}
      className="b-card mb-4"
      style={{ '--accent': `var(${bearing.accentVar})` }}
      tabIndex={0}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
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
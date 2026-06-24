// Small presentational component: renders the right line icon for a
// given bearing. Kept separate from data.js so the data file stays
// plain (serializable) content with no JSX in it.

export default function ValueIcon({ name }) {
  switch (name) {
    case 'innovation':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707M12 21v-1" />
          <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
        </svg>
      )
    case 'collaboration':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'excellence':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    case 'sustainability':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c4.97 0 9-3.582 9-8 0-3.976-3.582-6.91-6-9C12.667 7.333 11 11 11 11s-1.667-1-3-3C5.582 7.09 3 10.024 3 14c0 4.418 4.03 8 9 8z" />
          <path d="M12 22V12" />
        </svg>
      )
    default:
      return null
  }
}

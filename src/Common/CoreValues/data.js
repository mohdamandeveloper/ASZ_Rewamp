// Each value is framed as a compass bearing rather than an arbitrary
// 01–04 index, since there are exactly four of them and "values set
// your course" is a meaningful frame, not just decoration.

export const BEARINGS = [
  {
    code: 'N',
    deg: 0,
    accentVar: '--n-innovation',
    icon: 'innovation',
    title: 'Innovation',
    body: "We challenge conventional thinking at every turn. From AI-powered features to groundbreaking UX, we chase ideas no one else has tried — and ship them as products that lead the market.",
    tags: ['R&D first', 'Future-ready', 'Bold ideas']
  },
  {
    code: 'E',
    deg: 90,
    accentVar: '--e-collaboration',
    icon: 'collaboration',
    title: 'Collaboration',
    body: 'Great products are never built alone. We embed with your team, share knowledge in the open, and trust that the best outcomes come from diverse minds solving problems together.',
    tags: ['Transparent', 'Team-first', 'Co-create']
  },
  {
    code: 'S',
    deg: 180,
    accentVar: '--s-excellence',
    icon: 'excellence',
    title: 'Excellence',
    body: "We hold ourselves to the highest standard in everything: architecture, design, delivery, communication. Good enough is never good enough — we sweat the details so you don't have to.",
    tags: ['Zero compromise', 'High craft', 'On-time']
  },
  {
    code: 'W',
    deg: 270,
    accentVar: '--w-sustainability',
    icon: 'sustainability',
    title: 'Sustainability',
    body: "We build for the long run — in code, culture, and impact. From efficient architecture to equitable hiring, we make choices today that tomorrow's world will be glad we made.",
    tags: ['Green tech', 'Long-term', 'Responsible']
  }
]

export interface AgeGroup {
  id: string;
  ageRange: string;
  title: string;
  needs: string;
  skills: string[];
  weeklyStructure: string[];
  ctaLabel: string;
}

export const ageGroups: AgeGroup[] = [
  {
    id: 'age-5-7',
    ageRange: '5–7',
    title: 'Foundation Years',
    needs: 'Build foundational focus and working memory.',
    skills: ['Attention span', 'Pattern recognition', 'Basic sequencing', 'Visual memory'],
    weeklyStructure: [
      '2 sessions per week',
      '45 minutes per session',
      'Small group format (4-6 children)',
      'Parent progress updates monthly',
    ],
    ctaLabel: 'Book Demo for Ages 5–7',
  },
  {
    id: 'age-8-10',
    ageRange: '8–10',
    title: 'Development Years',
    needs: 'Strengthen reasoning and processing speed.',
    skills: ['Logical thinking', 'Processing speed', 'Complex patterns', 'Strategic planning'],
    weeklyStructure: [
      '2 sessions per week',
      '60 minutes per session',
      'Small group format (4-6 children)',
      'Parent progress updates monthly',
    ],
    ctaLabel: 'Book Demo for Ages 8–10',
  },
  {
    id: 'age-11-14',
    ageRange: '11–14',
    title: 'Mastery Years',
    needs: 'Boost executive function and academic fluency.',
    skills: ['Executive function', 'Abstract reasoning', 'Multi-step problem solving', 'Academic application'],
    weeklyStructure: [
      '2 sessions per week',
      '75 minutes per session',
      'Small group format (4-6 children)',
      'Parent progress updates monthly',
    ],
    ctaLabel: 'Book Demo for Ages 11–14',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const programFaqs: FaqItem[] = [
  {
    question: 'How is this different from tuition?',
    answer: "We don't teach subjects. We train the cognitive skills that make learning any subject easier—focus, memory, processing speed, and reasoning.",
  },
  {
    question: 'How long before we see results?',
    answer: 'Most parents notice improvements in attention and confidence within 4–6 weeks. Cognitive skills strengthen progressively with consistent training.',
  },
  {
    question: 'Can my child join mid-program?',
    answer: 'Yes. We assess each child individually and place them in the appropriate skill level, regardless of when they join.',
  },
  {
    question: 'What if my child misses a session?',
    answer: 'We offer make-up sessions within the same month to ensure consistent progress.',
  },
];

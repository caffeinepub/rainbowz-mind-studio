import Container from '../components/primitives/Container';
import Section from '../components/primitives/Section';
import { Heading, Subheading, BodyText } from '../components/primitives/Typography';
import CtaBlock from '../components/blocks/CtaBlock';
import FaqStrip from '../components/blocks/FaqStrip';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, Home, Target } from 'lucide-react';

const articles = [
  {
    icon: <Brain className="text-primary" size={32} />,
    title: 'Understanding Cognitive Skills',
    description: 'What are focus, memory, and processing speed—and why do they matter more than grades?',
  },
  {
    icon: <Target className="text-primary" size={32} />,
    title: 'Signs Your Child Needs Brain Training',
    description: 'Difficulty focusing, forgetting instructions, or avoiding challenges? These are skill gaps, not behavior issues.',
  },
  {
    icon: <Home className="text-primary" size={32} />,
    title: 'Supporting Learning at Home',
    description: 'Simple daily habits that reinforce cognitive development outside the studio.',
  },
  {
    icon: <BookOpen className="text-primary" size={32} />,
    title: 'Brain Training vs. Tuition',
    description: "Why teaching facts isn't enough—and how skill-building creates lasting change.",
  },
];

const learningHabits = [
  'Limit screen time to 1–2 hours per day',
  'Encourage 20–30 minutes of daily reading',
  'Practice simple memory games during meals',
  'Ask open-ended questions to build reasoning',
  'Celebrate effort and progress, not just results',
];

const faqs = [
  {
    question: 'What age should my child start brain training?',
    answer: 'Children as young as 5 can benefit from structured cognitive training. The earlier you start, the stronger the foundation.',
  },
  {
    question: 'How is this different from therapy?',
    answer: "Brain training is not therapy. It's skill-building for healthy children who want to improve focus, memory, and learning ability.",
  },
  {
    question: 'Will this help with school performance?',
    answer: 'Yes. Stronger cognitive skills lead to better attention, faster learning, and improved academic performance across all subjects.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most parents notice improvements in attention and confidence within 4–6 weeks. Long-term skill growth requires consistent training.',
  },
];

export default function ParentsGuidePage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading as="h1" className="mb-4">
              Your child's brain — explained simply.
            </Heading>
            <Subheading>
              Practical guidance for parents who want to understand and support cognitive development.
            </Subheading>
          </div>
        </Container>
      </Section>

      {/* Articles */}
      <Section variant="tinted">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Essential Reading
            </Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {article.icon}
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <BodyText>{article.description}</BodyText>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Learning Habits */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Heading as="h2" className="mb-4">
                Support Learning at Home
              </Heading>
              <Subheading>Simple daily habits that reinforce cognitive growth.</Subheading>
            </div>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {learningHabits.map((habit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-sm font-semibold text-primary">{index + 1}</span>
                      </div>
                      <BodyText className="flex-1">{habit}</BodyText>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section variant="tinted">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Heading as="h2" className="mb-4">
                Common Questions
              </Heading>
            </div>
            <FaqStrip items={faqs} />
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CtaBlock
        headline="Book a Demo to Understand Your Child's Skills"
        primaryLabel="Book Free Demo"
        primaryLink="/contact"
      />
    </>
  );
}

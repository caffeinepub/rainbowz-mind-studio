import Container from '../components/primitives/Container';
import Section from '../components/primitives/Section';
import { Heading, Subheading, BodyText } from '../components/primitives/Typography';
import FeatureGrid from '../components/blocks/FeatureGrid';
import CtaBlock from '../components/blocks/CtaBlock';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Clock, Brain, Smile } from 'lucide-react';

export default function ResultsOutcomesPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading as="h1" className="mb-4">
              Real improvements you can see.
            </Heading>
            <Subheading>
              Measurable progress in focus, memory, and cognitive performance.
            </Subheading>
          </div>
        </Container>
      </Section>

      {/* Before/After Improvements */}
      <Section variant="tinted">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Typical Improvements
            </Heading>
            <Subheading>What parents notice within 4–8 weeks.</Subheading>
          </div>
          <FeatureGrid
            features={[
              {
                icon: <Clock className="text-primary" size={32} />,
                title: 'Attention Span',
                description: 'Children maintain focus for longer periods during homework and reading.',
              },
              {
                icon: <Brain className="text-primary" size={32} />,
                title: 'Memory Recall',
                description: 'Faster recall of instructions, facts, and sequences.',
              },
              {
                icon: <TrendingUp className="text-primary" size={32} />,
                title: 'Processing Speed',
                description: 'Quicker completion of tasks with improved accuracy.',
              },
              {
                icon: <Smile className="text-primary" size={32} />,
                title: 'Confidence',
                description: 'Greater willingness to tackle new challenges independently.',
              },
            ]}
            columns={2}
          />
        </Container>
      </Section>

      {/* Case Studies */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2">Parent Stories</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>8-Year-Old, Focus Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <BodyText className="mb-4">
                  "My son couldn't sit through homework for more than 10 minutes. After 6 weeks at Rainbowz, he completes his work independently and even asks for extra reading time."
                </BodyText>
                <p className="text-sm font-medium text-foreground">— Parent, Mumbai</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11-Year-Old, Memory & Confidence</CardTitle>
              </CardHeader>
              <CardContent>
                <BodyText className="mb-4">
                  "She used to forget instructions immediately. Now she remembers multi-step tasks and feels confident tackling math problems on her own."
                </BodyText>
                <p className="text-sm font-medium text-foreground">— Parent, Bangalore</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6-Year-Old, Pattern Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <BodyText className="mb-4">
                  "The improvement in his ability to recognize patterns and sequences was visible within a month. His teacher noticed the change too."
                </BodyText>
                <p className="text-sm font-medium text-foreground">— Parent, Delhi</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13-Year-Old, Academic Application</CardTitle>
              </CardHeader>
              <CardContent>
                <BodyText className="mb-4">
                  "He's applying the reasoning skills from Rainbowz to his schoolwork. His grades improved, but more importantly, he enjoys learning now."
                </BodyText>
                <p className="text-sm font-medium text-foreground">— Parent, Pune</p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CtaBlock
        headline="Get Your Child Assessed"
        subtext="See where your child stands and how brain training can help."
        primaryLabel="Book Free Assessment"
        primaryLink="/contact"
        variant="tinted"
      />
    </>
  );
}

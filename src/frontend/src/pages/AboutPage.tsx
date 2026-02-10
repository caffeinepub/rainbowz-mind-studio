import Container from '../components/primitives/Container';
import Section from '../components/primitives/Section';
import { Heading, Subheading, BodyText } from '../components/primitives/Typography';
import FeatureGrid from '../components/blocks/FeatureGrid';
import CtaBlock from '../components/blocks/CtaBlock';
import { Award, Users, Shield, BookOpen, Brain, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading as="h1" className="mb-4">
              The science-first brain training studio.
            </Heading>
            <Subheading>
              We believe every child has the potential to learn faster—they just need the right cognitive foundation.
            </Subheading>
          </div>
        </Container>
      </Section>

      {/* Our Story */}
      <Section variant="tinted">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <Heading as="h2">Our Story</Heading>
              <BodyText>
                Rainbowz Mind Studio was founded on a simple observation: children don't struggle with subjects—they struggle with the cognitive skills needed to learn those subjects.
              </BodyText>
              <BodyText>
                We developed a structured, research-based system that trains the brain's core learning abilities: focus, working memory, processing speed, and reasoning.
              </BodyText>
              <BodyText>
                Today, we help hundreds of children aged 5–14 build the cognitive foundation they need to excel in school and beyond.
              </BodyText>
            </div>
            <div className="bg-muted/50 rounded-lg p-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Our Philosophy</h3>
              <BodyText>
                "Train the brain that learns faster."
              </BodyText>
              <BodyText>
                We don't teach facts. We train the skills that make learning facts easier, faster, and more effective.
              </BodyText>
            </div>
          </div>
        </Container>
      </Section>

      {/* Research Principles */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Research-Based Principles
            </Heading>
            <Subheading>Simple science explained simply.</Subheading>
          </div>
          <FeatureGrid
            features={[
              {
                icon: <Brain className="text-primary" size={32} />,
                title: 'Neuroplasticity',
                description: 'The brain strengthens what it practices. We design exercises that build cognitive pathways.',
              },
              {
                icon: <Target className="text-primary" size={32} />,
                title: 'Structured Progression',
                description: "Skills develop in stages. Our programs match each age group's developmental needs.",
              },
              {
                icon: <Award className="text-primary" size={32} />,
                title: 'Measurable Growth',
                description: 'We track progress through observable improvements in attention, memory, and reasoning.',
              },
            ]}
            columns={3}
          />
        </Container>
      </Section>

      {/* Safety & Standards */}
      <Section variant="tinted">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2">Safety & Standards</Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Shield className="text-primary shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Safe Environment</h3>
                <BodyText>Small group sizes (4-6 children) ensure personalized attention and safety.</BodyText>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="text-primary shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Trained Facilitators</h3>
                <BodyText>All facilitators are trained in cognitive development and child psychology.</BodyText>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BookOpen className="text-primary shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Structured Curriculum</h3>
                <BodyText>Every session follows a research-based progression designed for skill building.</BodyText>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Award className="text-primary shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Parent Communication</h3>
                <BodyText>Monthly progress updates keep parents informed of their child's development.</BodyText>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CtaBlock
        headline="Ready to see how brain training works?"
        primaryLabel="Explore Programs"
        primaryLink="/programs"
      />
    </>
  );
}

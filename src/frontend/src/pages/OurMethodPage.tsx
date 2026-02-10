import Container from '../components/primitives/Container';
import Section from '../components/primitives/Section';
import { Heading, Subheading, BodyText } from '../components/primitives/Typography';
import DiagramPanel from '../components/blocks/DiagramPanel';
import ComparisonTable from '../components/blocks/ComparisonTable';
import FeatureGrid from '../components/blocks/FeatureGrid';
import CtaBlock from '../components/blocks/CtaBlock';
import GeneratedImage from '../components/media/GeneratedImage';
import ThinlineIcon from '../components/media/ThinlineIcon';

export default function OurMethodPage() {
  return (
    <>
      {/* System Overview */}
      <Section>
        <Container>
          <DiagramPanel
            title="The Rainbowz Brain Training System"
            description="A structured approach that transforms cognitive abilities into better learning outcomes."
            imageSrc="/assets/generated/method-flow-diagram.dim_1400x400.png"
            imageAlt="Technique to Brain Skill to Better Learning flow"
          />
        </Container>
      </Section>

      {/* Brain Skills We Train */}
      <Section variant="tinted">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Four Core Brain Skills
            </Heading>
            <Subheading>The cognitive foundation for all learning.</Subheading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'focus' as const, title: 'Focus', description: 'Sustained attention and concentration' },
              { name: 'memory' as const, title: 'Working Memory', description: 'Hold and manipulate information' },
              { name: 'speed' as const, title: 'Processing Speed', description: 'Quick and accurate thinking' },
              { name: 'creativity' as const, title: 'Creativity', description: 'Flexible and innovative reasoning' },
            ].map((skill) => (
              <div key={skill.name} className="bg-background border border-border rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <ThinlineIcon name={skill.name} size={64} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Techniques */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Our Techniques
            </Heading>
            <Subheading>Structured exercises designed to build cognitive strength.</Subheading>
          </div>
          <FeatureGrid
            features={[
              {
                title: 'Pattern-Based Tasks',
                description: 'Recognize and predict sequences to strengthen logical thinking.',
              },
              {
                title: 'Memory Sequencing',
                description: 'Build working memory through progressive recall exercises.',
              },
              {
                title: 'Logic Challenges',
                description: 'Develop reasoning skills with structured problem-solving.',
              },
              {
                title: 'Visual Reasoning',
                description: 'Enhance spatial awareness and visual processing abilities.',
              },
            ]}
            columns={4}
          />
        </Container>
      </Section>

      {/* Age-Wise Development */}
      <Section variant="tinted">
        <Container>
          <DiagramPanel
            title="Age-Wise Brain Development"
            description="Each age group has unique cognitive needs. Our programs are designed to match developmental stages."
            imageSrc="/assets/generated/age-staircase.dim_1200x600.png"
            imageAlt="Age-wise development staircase showing progression from ages 5-7, 8-10, and 11-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Ages 5–7</h3>
              <BodyText>Build foundational focus and working memory.</BodyText>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Ages 8–10</h3>
              <BodyText>Strengthen reasoning and processing speed.</BodyText>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Ages 11–14</h3>
              <BodyText>Boost executive function and academic fluency.</BodyText>
            </div>
          </div>
        </Container>
      </Section>

      {/* Simple Science */}
      <Section>
        <Container>
          <DiagramPanel
            title="Why It Works: Simple Neuroscience"
            description="The brain strengthens what it practices. Repetition + challenge = skill growth."
            imageSrc="/assets/generated/science-network.dim_1200x600.png"
            imageAlt="Neural network visualization showing cognitive pathway development"
          />
          <div className="max-w-3xl mx-auto mt-8 space-y-4">
            <BodyText>
              <strong>Neuroplasticity:</strong> The brain strengthens what it practices regularly.
            </BodyText>
            <BodyText>
              <strong>Progressive Challenge:</strong> Skills grow when exercises match the right difficulty level.
            </BodyText>
            <BodyText>
              <strong>Transfer Effect:</strong> Cognitive skills trained in one context improve performance across all learning tasks.
            </BodyText>
          </div>
        </Container>
      </Section>

      {/* Comparison */}
      <Section variant="tinted">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              Traditional vs. Rainbowz
            </Heading>
            <Subheading>Understanding the difference.</Subheading>
          </div>
          <ComparisonTable
            rows={[
              {
                traditional: 'Teaches facts and formulas',
                rainbowz: 'Trains the brain that learns facts faster',
              },
              {
                traditional: 'Subject-specific knowledge',
                rainbowz: 'Universal cognitive skills',
              },
              {
                traditional: 'Memorization-focused',
                rainbowz: 'Skill-building focused',
              },
              {
                traditional: 'Reactive to academic struggles',
                rainbowz: 'Proactive cognitive development',
              },
            ]}
          />
        </Container>
      </Section>

      {/* CTA */}
      <CtaBlock
        headline="See Programs by Age"
        primaryLabel="View Programs"
        primaryLink="/programs"
      />
    </>
  );
}

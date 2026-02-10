import { Link } from '@tanstack/react-router';
import { Brain, Target, Zap, Sparkles } from 'lucide-react';
import Container from '../components/primitives/Container';
import Section from '../components/primitives/Section';
import { Heading, Subheading } from '../components/primitives/Typography';
import { Button } from '../components/primitives/Button';
import FeatureGrid from '../components/blocks/FeatureGrid';
import TestimonialStrip from '../components/blocks/TestimonialStrip';
import CtaBlock from '../components/blocks/CtaBlock';
import GeometricAccent from '../components/blocks/GeometricAccent';
import GeneratedImage from '../components/media/GeneratedImage';
import { siteCopy } from '../content/siteCopy';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden">
        <GeometricAccent />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Heading as="h1">{siteCopy.hero.headline}</Heading>
              <Subheading>{siteCopy.hero.subtext}</Subheading>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg">{siteCopy.hero.primaryCta}</Button>
                </Link>
                <Link to="/our-method">
                  <Button variant="outline" size="lg">
                    {siteCopy.hero.secondaryCta}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <GeneratedImage
                src="/assets/generated/hero-overlay.dim_1600x900.png"
                alt="Abstract cognitive training visualization"
                className="rounded-lg"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Problem Awareness */}
      <Section variant="tinted">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              {siteCopy.problems.headline}
            </Heading>
          </div>
          <FeatureGrid
            features={siteCopy.problems.cards.map((card) => ({
              title: card.title,
              description: card.description,
            }))}
            columns={3}
          />
        </Container>
      </Section>

      {/* Brain Framework */}
      <Section>
        <Container>
          <div className="text-center mb-8">
            <Heading as="h2">{siteCopy.framework.headline}</Heading>
          </div>
          <GeneratedImage
            src="/assets/generated/method-flow-diagram.dim_1400x400.png"
            alt="Technique to Brain Skill to Better Learning flow diagram"
            className="max-w-4xl mx-auto"
          />
        </Container>
      </Section>

      {/* How It Works */}
      <Section variant="tinted">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2">{siteCopy.howItWorks.headline}</Heading>
          </div>
          <FeatureGrid
            features={siteCopy.howItWorks.steps}
            columns={4}
          />
        </Container>
      </Section>

      {/* Outcomes */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2">{siteCopy.outcomes.headline}</Heading>
          </div>
          <FeatureGrid
            features={siteCopy.outcomes.items}
            columns={2}
          />
        </Container>
      </Section>

      {/* Testimonials */}
      <Section variant="tinted">
        <TestimonialStrip />
      </Section>

      {/* Final CTA */}
      <CtaBlock
        headline={siteCopy.finalCta.headline}
        primaryLabel={siteCopy.finalCta.cta}
        primaryLink="/contact"
      />
    </>
  );
}

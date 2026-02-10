import { Link } from '@tanstack/react-router';
import { Button } from '../primitives/Button';
import Container from '../primitives/Container';
import Section from '../primitives/Section';
import { Heading, Subheading } from '../primitives/Typography';

interface CtaBlockProps {
  headline: string;
  subtext?: string;
  primaryLabel: string;
  primaryLink: string;
  secondaryLabel?: string;
  secondaryLink?: string;
  variant?: 'default' | 'tinted';
}

export default function CtaBlock({
  headline,
  subtext,
  primaryLabel,
  primaryLink,
  secondaryLabel,
  secondaryLink,
  variant = 'default',
}: CtaBlockProps) {
  return (
    <Section variant={variant}>
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <Heading as="h2" className="mb-4">
            {headline}
          </Heading>
          {subtext && <Subheading className="mb-8">{subtext}</Subheading>}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={primaryLink}>
              <Button size="lg" className="w-full sm:w-auto">
                {primaryLabel}
              </Button>
            </Link>
            {secondaryLabel && secondaryLink && (
              <Link to={secondaryLink}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  {secondaryLabel}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

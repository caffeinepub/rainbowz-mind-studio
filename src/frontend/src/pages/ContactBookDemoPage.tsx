import { useSearch } from '@tanstack/react-router';
import Container from '../components/primitives/Container';
import Section from '../components/primitives/Section';
import { Heading, Subheading } from '../components/primitives/Typography';
import BookDemoForm from '../components/forms/BookDemoForm';
import AlternateContactOptions from '../components/blocks/AlternateContactOptions';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function ContactBookDemoPage() {
  const search = useSearch({ from: '/contact' });
  const preselectedAge = (search as any)?.age;

  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Heading as="h1" className="mb-4">
              Start your child's brain training journey.
            </Heading>
            <Subheading>
              Book a free demo session to see how Rainbowz works.
            </Subheading>
          </div>

          {/* Form */}
          <BookDemoForm preselectedAge={preselectedAge} />
        </Container>
      </Section>

      {/* Map Block */}
      <Section variant="tinted">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="text-primary shrink-0" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Our Locations</h3>
                    <p className="text-muted-foreground mb-4">
                      Visit us at one of our brain training studios.
                    </p>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-8 text-center">
                  <p className="text-muted-foreground">
                    [Map visualization placeholder]
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Multiple locations across major cities
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Alternate Contact */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Heading as="h3" className="mb-2">
                Prefer to talk first?
              </Heading>
              <Subheading>Reach out directly via phone or WhatsApp.</Subheading>
            </div>
            <AlternateContactOptions />
          </div>
        </Container>
      </Section>
    </>
  );
}

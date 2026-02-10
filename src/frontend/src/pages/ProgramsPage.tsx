import { useState } from 'react';
import { Link, useSearch } from '@tanstack/react-router';
import Container from '../components/primitives/Container';
import Section from '../components/primitives/Section';
import { Heading, Subheading, BodyText } from '../components/primitives/Typography';
import { Button } from '../components/primitives/Button';
import AgeGroupSelector from '../components/blocks/AgeGroupSelector';
import FaqStrip from '../components/blocks/FaqStrip';
import { ageGroups, programFaqs } from '../content/programs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProgramsPage() {
  const [activeGroupId, setActiveGroupId] = useState(ageGroups[0].id);
  const activeGroup = ageGroups.find((g) => g.id === activeGroupId) || ageGroups[0];

  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading as="h1" className="mb-4">
              Programs for Every Stage of Brain Growth
            </Heading>
            <Subheading>
              Age-appropriate cognitive training designed to match your child's developmental needs.
            </Subheading>
          </div>
        </Container>
      </Section>

      {/* Age Group Selector */}
      <Section variant="tinted">
        <Container>
          <AgeGroupSelector
            groups={ageGroups}
            activeId={activeGroupId}
            onSelect={setActiveGroupId}
            className="mb-12"
          />

          {/* Active Group Details */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Ages {activeGroup.ageRange}: {activeGroup.title}
                </CardTitle>
                <p className="text-muted-foreground">{activeGroup.needs}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Skills Trained */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Skills Trained</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {activeGroup.skills.map((skill, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weekly Structure */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Weekly Structure</h3>
                  <ul className="space-y-2">
                    {activeGroup.weeklyStructure.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link to="/contact" search={{ age: activeGroup.ageRange }}>
                    <Button size="lg" className="w-full md:w-auto">
                      {activeGroup.ctaLabel}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Heading as="h2" className="mb-4">
                Frequently Asked Questions
              </Heading>
            </div>
            <FaqStrip items={programFaqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}

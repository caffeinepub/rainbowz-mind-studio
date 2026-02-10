import Container from '../primitives/Container';
import { Heading } from '../primitives/Typography';
import { Card } from '../primitives/Card';
import { CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Within 6 weeks, my son's attention span improved dramatically. He's more confident in class now.",
    author: 'Parent of 8-year-old',
  },
  {
    quote: 'The structured approach made all the difference. My daughter actually enjoys the sessions.',
    author: 'Parent of 10-year-old',
  },
  {
    quote: 'Not tuition, not therapy—exactly what we needed. Real cognitive skill building.',
    author: 'Parent of 12-year-old',
  },
];

export default function TestimonialStrip() {
  return (
    <Container>
      <div className="text-center mb-12">
        <Heading as="h2">Trusted by hundreds of parents.</Heading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} variant="soft">
            <CardContent className="pt-6">
              <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
              <p className="text-sm font-medium text-foreground">— {testimonial.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}

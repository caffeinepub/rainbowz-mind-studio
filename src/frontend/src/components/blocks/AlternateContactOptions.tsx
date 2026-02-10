import { Phone, MessageCircle } from 'lucide-react';
import { Card } from '../primitives/Card';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AlternateContactOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card variant="soft">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Phone className="text-primary" size={24} />
            </div>
            <CardTitle>Call Us</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            Speak directly with our team
          </p>
          <p className="text-lg font-semibold text-foreground">
            +91 XXX XXX XXXX
          </p>
        </CardContent>
      </Card>

      <Card variant="soft">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MessageCircle className="text-primary" size={24} />
            </div>
            <CardTitle>WhatsApp</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            Quick responses via WhatsApp
          </p>
          <p className="text-lg font-semibold text-foreground">
            +91 XXX XXX XXXX
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '../primitives/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface BookDemoFormProps {
  preselectedAge?: string;
}

export default function BookDemoForm({ preselectedAge }: BookDemoFormProps) {
  const [formData, setFormData] = useState({
    parentName: '',
    childAge: preselectedAge || '',
    phone: '',
    preferredTime: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent name is required';
    }
    if (!formData.childAge) {
      newErrors.childAge = 'Child age is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-12 pb-12 text-center">
          <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Demo Booked Successfully!
          </h3>
          <p className="text-muted-foreground mb-6">
            Thank you, {formData.parentName}. We'll contact you shortly at {formData.phone} to confirm your demo session.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">
            Book Another Demo
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Book Your Free Demo</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="parentName">Parent Name *</Label>
            <Input
              id="parentName"
              type="text"
              value={formData.parentName}
              onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              placeholder="Enter your name"
              className={errors.parentName ? 'border-destructive' : ''}
            />
            {errors.parentName && (
              <p className="text-sm text-destructive">{errors.parentName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="childAge">Child's Age Group *</Label>
            <Select
              value={formData.childAge}
              onValueChange={(value) => setFormData({ ...formData, childAge: value })}
            >
              <SelectTrigger className={errors.childAge ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select age group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5-7">5–7 years</SelectItem>
                <SelectItem value="8-10">8–10 years</SelectItem>
                <SelectItem value="11-14">11–14 years</SelectItem>
              </SelectContent>
            </Select>
            {errors.childAge && (
              <p className="text-sm text-destructive">{errors.childAge}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="10-digit mobile number"
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredTime">Preferred Time *</Label>
            <Select
              value={formData.preferredTime}
              onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
            >
              <SelectTrigger className={errors.preferredTime ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select preferred time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
              </SelectContent>
            </Select>
            {errors.preferredTime && (
              <p className="text-sm text-destructive">{errors.preferredTime}</p>
            )}
          </div>

          <Button type="submit" size="lg" className="w-full">
            Book Free Demo
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

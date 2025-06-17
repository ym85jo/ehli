import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>문의하기</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <a
            href={`mailto:ehli@nate.com`}
            className="group bg-primary/5 hover:bg-muted rouneded-lg flex items-start gap-4 p-3"
          >
            <div className="bg-primary/20 text-primary flex shrink-0 items-center justify-center rounded-md p-1.5">
              <Mail className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Email</h3>
              <p className="text-muted-foreground text-xs">요청 사항 및 오류 제보</p>
            </div>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

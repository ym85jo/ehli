import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/jimin-dev',
  },
  {
    icon: Youtube,
    href: 'https://github.com/jimin-dev',
  },
  {
    icon: Instagram,
    href: 'https://github.com/jimin-dev',
  },
  {
    icon: Instagram,
    href: 'https://github.com/jimin-dev',
  },
];

export default function ProfileSection() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="bg-muted p-2">
              <div className="h-36 w-36 overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={144}
                  height={144}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold">yeongmin</h3>
            <p className="text-primary text-sm">Web Developer</p>
          </div>

          <div className="flex justify-center gap-2">
            {socialLinks.map((socialLink, index) => (
              <Button key={index} variant="ghost" size="icon" className="bg-primary/10" asChild>
                <a href={socialLink.href} target="_blank" rel="noopener noreferrer">
                  <socialLink.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>

          <p className="bg-primary/10 rounded p-2 text-center text-sm">그냥 저냥 끄적 끄적</p>
        </div>
      </CardContent>
    </Card>
  );
}

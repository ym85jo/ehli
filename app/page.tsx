import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">목록</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item, index) => {
              return (
                <Link href={`/blog/${index}`} key={index}>
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>Title</CardTitle>
                      <CardDescription>Description</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

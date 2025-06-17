import { PostCard } from '@/components/features/blog/PostCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import TagSection from '@/app/_components/TagSection';
import ProfileSection from '@/app/_components/ProfileSection';
import ContactSection from '@/app/_components/ContactSection';
import { Github, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const mockPosts = [
  {
    id: '1',
    title: 'Next.js 13으로 블로그 만들기',
    description: 'Next.js 13과 Notion API를 활용하여 개인 블로그를 만드는 방법을 알아봅니다.',
    coverImage: 'https://picsum.photos/800/400',
    tags: [
      { id: '1', name: 'Next.js', count: 1 },
      { id: '2', name: 'React', count: 1 },
    ],
    authors: '짐코딩',
    date: '2024-02-01',
  },
  {
    id: '2',
    title: 'TypeScript 기초 다지기',
    description: 'TypeScript의 기본 문법과 실전에서 자주 사용되는 패턴들을 살펴봅니다.',
    coverImage: 'https://picsum.photos/800/401',
    tags: [
      { id: '3', name: 'TypeScript', count: 1 },
      { id: '4', name: 'JavaScript', count: 1 },
    ],
    authors: '짐코딩',
    date: '2024-01-15',
  },
];

const mockTags = [
  { id: '1', name: '전체', count: 20 },
  { id: '2', name: 'React', count: 10 },
  { id: '3', name: 'Next.js', count: 5 },
  { id: '4', name: 'TypeScript', count: 3 },
  { id: '5', name: 'Tailwind CSS', count: 2 },
];

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

export default function Home() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-[220px_1fr_220px] gap-6">
        {/* 사이드바 */}
        <aside>
          <TagSection tags={mockTags} />
        </aside>

        {/* MAIN */}
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">최신 게시글</h2>
            <Select defaultValue="latest">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="정렬 방식 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">최신순</SelectItem>
                <SelectItem value="oldest">오래된순</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4">
            {mockPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <PostCard post={post} />
              </Link>
            ))}
          </div>
        </div>

        {/* 사이드바 */}
        <aside className="flex flex-col gap-4">
          <ProfileSection socialLinks={socialLinks} />
          <ContactSection />
        </aside>
      </div>
    </div>
  );
}

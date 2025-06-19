import TagSection from '@/app/_components/TagSection';
import ProfileSection from '@/app/_components/ProfileSection';
import ContactSection from '@/app/_components/ContactSection';
import { Github, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import { getPublishedPosts, getTags } from '@/lib/notion';
import { PostCard } from '@/components/features/blog/PostCard';
import SortSelect from '@/app/_components/client/SortSelect';

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

interface HomeProps {
  searchParams: Promise<{
    tag?: string;
    sort?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { tag, sort } = await searchParams;
  const searchedTag = tag || '전체';
  const selectedSort = sort || 'latest';

  const posts = await getPublishedPosts(searchedTag, selectedSort);

  const tags = await getTags();

  return (
    <div className="container py-8">
      <div className="grid grid-cols-[220px_1fr_220px] gap-6">
        {/* 사이드바 */}
        <aside>
          <TagSection tags={tags} selectedTag={searchedTag} />
        </aside>

        {/* MAIN */}
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">최신 게시글</h2>
            <SortSelect />
          </div>

          <div className="grid gap-4">
            {posts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.id}>
                <PostCard post={post} isFirst={index === 0} />
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

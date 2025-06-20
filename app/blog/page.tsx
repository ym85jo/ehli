import TagSection from '@/app/_components/TagSection';
import ProfileSection from '@/app/_components/ProfileSection';
import ContactSection from '@/app/_components/ContactSection';
import { getPublishedPosts, getTags } from '@/lib/notion';
import HeaderSection from '@/app/_components/HeaderSection';
import PostList from '@/components/features/blog/PostList';

interface BlogProps {
  searchParams: Promise<{
    tag?: string;
    sort?: string;
  }>;
}

export default async function Blog({ searchParams }: BlogProps) {
  const { tag, sort } = await searchParams;

  const selectedTag = tag || '전체';
  const selectedSort = sort || '최신순';

  const posts = await getPublishedPosts(selectedTag, selectedSort);
  const tags = await getTags();

  return (
    <div className="container py-8">
      <div className="grid grid-cols-[220px_1fr_220px] gap-6">
        {/* 사이드바 */}
        <aside>
          <TagSection tags={tags} selectedTag={selectedTag} />
        </aside>

        {/* MAIN */}
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <HeaderSection selectedTag={selectedTag} />

          <PostList posts={posts} />
        </div>

        {/* 사이드바 */}
        <aside className="flex flex-col gap-4">
          <ProfileSection />
          <ContactSection />
        </aside>
      </div>
    </div>
  );
}

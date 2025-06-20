import ProfileSection from '@/app/_components/ProfileSection';
import ContactSection from '@/app/_components/ContactSection';
import { getPublishedPosts, getTags } from '@/lib/notion';
import HeaderSection from './_components/HeaderSection';
import PostListSuspense from '@/components/features/blog/PostListSuspense';
import { Suspense } from 'react';
import TagSectionClient from './_components/TagSection.Client';
import TagSectionSkeleton from './_components/TagSectionSkeleton';
import PostListSkeleton from '@/components/features/blog/PostListSkeleton';

interface HomeProps {
  searchParams: Promise<{
    tag?: string;
    sort?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { tag, sort } = await searchParams;
  const selectedTag = tag || '전체';
  const selectedSort = sort || '최신순';
  const tags = getTags();
  const postsPromise = getPublishedPosts({ tag: selectedTag, sort: selectedSort });

  return (
    <div className="container py-8">
      <div className="grid grid-cols-[220px_1fr_220px] gap-6">
        {/* 사이드바 */}
        <aside>
          <Suspense fallback={<TagSectionSkeleton />}>
            <TagSectionClient tags={tags} selectedTag={selectedTag} />
          </Suspense>
        </aside>

        {/* MAIN */}
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <HeaderSection selectedTag={selectedTag} />
          <Suspense fallback={<PostListSkeleton />}>
            <PostListSuspense postsPromise={postsPromise} />
          </Suspense>
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

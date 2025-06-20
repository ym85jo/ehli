import Link from 'next/link';
import { PostCard } from './PostCard';
import { GetPublishedPostsResponse } from '@/lib/notion';
import { Button } from '@/components/ui/button';
import { use } from 'react';

interface PostListSuspenseProps {
  postsPromise: Promise<GetPublishedPostsResponse>;
}

export default function PostListSuspense({ postsPromise }: PostListSuspenseProps) {
  const { posts } = use(postsPromise);

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {posts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <PostCard post={post} isFirst={index === 0} />
          </Link>
        ))}
      </div>
      <div>
        <Button variant="outline" size="lg" className="w-full">
          More
        </Button>
      </div>
    </div>
  );
}

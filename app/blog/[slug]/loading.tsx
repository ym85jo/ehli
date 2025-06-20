export default function Loading() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-[220px_1fr_220px] gap-6">
        {/* 사이드바 */}
        <aside>
          <div className="space-y-4">
            <div className="bg-muted h-8 animate-pulse rounded" />
            <div className="bg-muted h-6 animate-pulse rounded" />
            <div className="bg-muted h-6 animate-pulse rounded" />
            <div className="bg-muted h-6 animate-pulse rounded" />
          </div>
        </aside>

        {/* MAIN - 포스트 상세 내용 */}
        <article className="space-y-8">
          {/* 포스트 헤더 */}
          <header className="space-y-4">
            <div className="bg-muted h-8 w-1/4 animate-pulse rounded" />
            <div className="bg-muted h-12 animate-pulse rounded" />
            <div className="bg-muted h-6 w-1/3 animate-pulse rounded" />
          </header>

          {/* 포스트 내용 */}
          <div className="prose prose-gray max-w-none space-y-4">
            <div className="bg-muted h-4 animate-pulse rounded" />
            <div className="bg-muted h-4 animate-pulse rounded" />
            <div className="bg-muted h-4 w-3/4 animate-pulse rounded" />
            <div className="bg-muted h-4 animate-pulse rounded" />
            <div className="bg-muted h-4 w-5/6 animate-pulse rounded" />
            <div className="bg-muted h-4 animate-pulse rounded" />
            <div className="bg-muted h-4 w-2/3 animate-pulse rounded" />
            <div className="bg-muted h-4 animate-pulse rounded" />
            <div className="bg-muted h-4 w-4/5 animate-pulse rounded" />
            <div className="bg-muted h-4 animate-pulse rounded" />
          </div>
        </article>

        {/* 사이드바 */}
        <aside className="flex flex-col gap-4">
          <div className="space-y-4">
            <div className="bg-muted mx-auto h-36 w-36 animate-pulse rounded" />
            <div className="bg-muted h-6 animate-pulse rounded" />
            <div className="bg-muted h-4 animate-pulse rounded" />
            <div className="bg-muted h-8 animate-pulse rounded" />
          </div>
          <div className="space-y-3">
            <div className="bg-muted h-6 animate-pulse rounded" />
            <div className="bg-muted h-4 animate-pulse rounded" />
            <div className="bg-muted h-4 animate-pulse rounded" />
          </div>
        </aside>
      </div>
    </div>
  );
}

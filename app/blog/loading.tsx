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

        {/* MAIN */}
        <div className="space-y-8">
          {/* 섹션 제목 */}
          <div className="bg-muted h-8 animate-pulse rounded" />

          {/* 포스트 목록 스켈레톤 */}
          <div className="grid gap-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="space-y-3">
                <div className="bg-muted h-6 animate-pulse rounded" />
                <div className="bg-muted h-4 w-3/4 animate-pulse rounded" />
                <div className="bg-muted h-4 w-1/2 animate-pulse rounded" />
              </div>
            ))}
          </div>
        </div>

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

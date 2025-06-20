import SortSelect from './client/SortSelect';

interface HeaderSectionProps {
  selectedTag: string;
}

export default function HeaderSection({ selectedTag }: HeaderSectionProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold tracking-tight">
        {selectedTag === '전체' ? '최신 게시글' : `${selectedTag} 태그 게시글`}
      </h2>
      <SortSelect />
    </div>
  );
}

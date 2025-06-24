'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function GiscusComments() {
  const { theme } = useTheme();

  return (
    <Giscus
      repo="ym85jo/notion-blog-nextjs-giscus"
      repoId="R_kgDOPA0R1w"
      category="Announcements"
      categoryId="DIC_kwDOPA0R184Cr6Sq"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      lang="ko"
      theme={theme === 'dark' ? 'dark' : 'light'}
      loading="lazy"
    />
  );
}

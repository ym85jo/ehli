'use server';

import { createPost } from '@/lib/notion';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const postSchema = z.object({
  title: z.string().min(1, { message: '제목을 입력해주세요.' }),
  tag: z.string().min(1, { message: '태그를 선택해주세요.' }),
  content: z.string().min(1, { message: '내용을 입력해주세요.' }),
});

export interface PostFormState {
  message: string;
  error?: {
    title?: string[];
    tag?: string[];
    content?: string[];
  };
  formData?: PostFormData;
  success?: boolean;
}

export interface PostFormData {
  title: string;
  tag: string;
  content: string;
}

export async function createPostAction(prevState: PostFormState, formData: FormData) {
  // const { title, tag, content } = Object.fromEntries(formData) as {
  //   title: string;
  //   tag: string;
  //   content: string;
  // };

  // console.log(title, tag, content);

  // try {
  //   await createPost({ title: String(title), tag: String(tag), content: String(content) });
  //   // 성공 시 리다이렉트 또는 성공 메시지 처리
  // } catch (error) {
  //   console.error('포스트 생성 실패:', error);
  //   throw new Error('포스트 생성에 실패했습니다.');
  // }

  const rawFormData = {
    title: formData.get('title') as string,
    tag: formData.get('tag') as string,
    content: formData.get('content') as string,
  };

  const validatedFields = postSchema.safeParse({
    title: formData.get('title'),
    tag: formData.get('tag'),
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: '유효성 검사 실패',
      formData: rawFormData,
    };
  }

  try {
    const { title, tag, content } = validatedFields.data;
    await createPost({ title, tag, content });
    revalidateTag('posts');
    return {
      message: 'SUCCESS',
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: 'ERROR',
      formData: rawFormData,
    };
  }
}

import { clsx, type ClassValue } from 'clsx';
import { ko } from 'date-fns/locale';
import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date | undefined) {
  if (!date) return '';
  return format(new Date(date), 'PPP', { locale: ko });
}

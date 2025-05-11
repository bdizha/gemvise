import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRelativeTime(isoDateString: string): string {
  const date = new Date(isoDateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = secondsInMinute * 60;
  const secondsInDay = secondsInHour * 24;

  if (diffInSeconds < secondsInMinute) {
    return `${diffInSeconds}s ago`;
  }
  if (diffInSeconds < secondsInHour) {
    return `${Math.floor(diffInSeconds / secondsInMinute)}m ago`;
  }
  if (diffInSeconds < secondsInDay) {
    return `${Math.floor(diffInSeconds / secondsInHour)}h ago`;
  }
  if (diffInSeconds < secondsInDay * 2) {
    return 'Yesterday';
  }
  if (diffInSeconds < secondsInDay * 7) {
    return `${Math.floor(diffInSeconds / secondsInDay)}d ago`;
  }
  // For older dates, return a simple date string
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

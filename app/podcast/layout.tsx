import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Podcast - Lowercase B',
  description: 'Listen to the latest episodes of the Lowercase B Podcast',
};

export default function PodcastLayout({ children }: { children: React.ReactNode }) {
  return children;
}

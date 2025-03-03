import Image from 'next/image';
import Link from 'next/link';

interface PodcastEpisodeCardProps {
  episode: {
    id: number;
    title: string;
    publishedAt: string;
    imageUrl: string;
  };
}

export function PodcastEpisodeCard({ episode }: PodcastEpisodeCardProps) {
  return (
    <article className="group flex gap-4 rounded-lg border bg-white p-4 transition-all hover:bg-gray-50 dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-gray-800/50">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <Image src={episode.imageUrl} alt={episode.title} fill className="object-cover" />
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="font-medium">
          <Link href={`/podcast/${episode.id}`} className="hover:underline">
            {episode.title}
          </Link>
        </h3>
        <time className="text-sm text-gray-600 dark:text-gray-400" dateTime={episode.publishedAt}>
          {new Date(episode.publishedAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>
      </div>
    </article>
  );
}

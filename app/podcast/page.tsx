'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PodcastEpisodeCard } from '../components/podcast/podcast-episode-card';
import { SearchEpisodes } from '../components/podcast/search-episodes';

// This would typically come from your CMS or API
const EPISODES = [
  {
    id: 1,
    title: 'The Future of Tech Entrepreneurship',
    publishedAt: '2024-03-20',
    imageUrl: '/podcastcover.png',
  },
  {
    id: 2,
    title: 'Building Sustainable Startups',
    publishedAt: '2024-03-13',
    imageUrl: '/podcastcover.png',
  },
  // Add more episodes as needed
];

export default function PodcastPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEpisodes = EPISODES.filter((episode) =>
    episode.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left Column - Podcast Info */}
          <div className="md:sticky md:top-4 md:h-fit">
            <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-2xl">
              <Image src="/podcastcover.png" alt="Lowercase B Podcast Cover" fill className="object-cover" priority />
            </div>
            <h1 className="mb-4 text-2xl font-semibold">The Lowercase B Podcast</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Conversations with Builders, Creators and Technologists. Hosted by Alex Burkardt of Lowercase B Ventures.
            </p>
          </div>

          {/* Right Column - Episodes List */}
          <div className="md:col-span-2">
            <SearchEpisodes onSearch={setSearchQuery} />
            <div className="space-y-4">
              {filteredEpisodes.map((episode) => (
                <PodcastEpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

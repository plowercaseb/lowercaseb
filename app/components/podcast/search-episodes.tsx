import { Search } from 'lucide-react';

interface SearchEpisodesProps {
  onSearch: (query: string) => void;
}

export function SearchEpisodes({ onSearch }: SearchEpisodesProps) {
  return (
    <div className="relative mb-6">
      <input
        type="search"
        placeholder="Search episodes..."
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 pl-10 text-sm outline-none focus:border-gray-400 focus:ring-0 dark:border-gray-800 dark:bg-gray-900 dark:focus:border-gray-700"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    </div>
  );
}

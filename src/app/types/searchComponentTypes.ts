
export interface SearchComponentProps {
  className?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  author: string;
  publisher: string;
  publishedDate: string;
  description: string;

}

export interface SearchComponentState {
  query: string;
  searchResults: SearchResult[];
  selectedBook?: SearchResult | null;
}
import { Book } from "../types";

export const searchBooks = async (query: string ): Promise<Book[]> => {
try {
    const apiURL = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API;
    const response = await fetch(`${apiURL}volumes?q=${query}`)
    const data = await response.json()

    
    if (data.items) {
        const books: Book[] = data.items.map((item: any) => ({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
          publisher: item.volumeInfo.publisher || 'Unknown Publisher',
          publishedDate: item.volumeInfo.publishedDate || 'Unknown Date',
          description: item.volumeInfo.description || 'No description available',
        }));
   
        return books;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      throw new Error('Error fetching books');
    }
}

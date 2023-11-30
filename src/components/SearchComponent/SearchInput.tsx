// I chose the debounce function, but I could also use lodash's library.
// I chose to add a debounce mechanism to the input change event to avoid making too many requests in a short period.
import {
  SearchInputProps,
  DebounceFunction,
} from "@/app/types/searchInputTypes";

const debounce: DebounceFunction = (func, delay) => {
  let timeoutId: NodeJS.Timeout;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  const handleChange = debounce((e) => onChange(e.target.value), 300);

  return (
    <input
      className="search_input"
      type="text"
      placeholder="Search for books"
      onChange={handleChange}
    />
  );
};

export default SearchInput;

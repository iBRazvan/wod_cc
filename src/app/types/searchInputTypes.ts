// Debounce function type

export type DebounceFunction = (func: (...args: any[]) => void, delay: number) => (...args: any[]) => void;

// Search Input component props
export interface SearchInputProps {
  onChange: (value: string) => void;
}

interface SearchPostProps {
    value: string;
    onChange: (value: string) => void;
  }
  

function SearchPost ({ value, onChange }: SearchPostProps) {
    return(
        <input
        type="text"
        placeholder="Find Post..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
/>   
    )
}
  
export default SearchPost;
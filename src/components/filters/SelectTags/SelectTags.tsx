interface Tag {
    id: number;
    name: string;
  }
  
  interface SelectTagsProps {
    tags: Tag[];
    value: number[];
    onChange: (value: number[]) => void;
  }
  
  const SelectTags = ({ tags, value, onChange }: SelectTagsProps) => {
    const toggleTag = (id: number) => {
      onChange(
        value.includes(id)
          ? value.filter((t) => t !== id)
          : [...value, id]
      );
    };
  
    return (
      <>
        {tags.map((tag) => (
          <button key={tag.id} onClick={() => toggleTag(tag.id)}>
            #{tag.name}
          </button>
        ))}
      </>
    );
  };
  
export default SelectTags;
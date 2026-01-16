import { usePosts } from "../../../context/PostsContext";

const SelectTags = () => {
  const {
    posts,
    selectedTags,
    addTag,
    removeTag,
    hasTag,
  } = usePosts();

  const tags = Array.from(
    new Map(
      posts.flatMap((post) =>
        post.tags.map((tag) => [tag.id, tag])
      )
    ).values()
  );

  const toggleTag = (id: number) => {
    hasTag(id) ? removeTag(id) : addTag(id);
  };

  return (
    <div>
      {tags.map((tag) => (
        <button
          key={tag.id}
          onClick={() => toggleTag(tag.id)}
          style={{
            fontWeight: hasTag(tag.id) ? "bold" : "normal",
          }}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default SelectTags;
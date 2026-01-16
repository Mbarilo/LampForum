import { usePosts } from "../../../context/PostsContext";

const SearchPost = () => {
  const { search, setSearch } = usePosts();

  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchPost;
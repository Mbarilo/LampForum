import { usePosts } from "../../../context/PostsContext";

const SelectMinimumLikes = () => {
  const { minLikes, setMinLikes } = usePosts();

  return (
    <input
      type="number"
      min={0}
      value={minLikes}
      onChange={(e) => setMinLikes(Number(e.target.value))}
    />
  );
};

export default SelectMinimumLikes;
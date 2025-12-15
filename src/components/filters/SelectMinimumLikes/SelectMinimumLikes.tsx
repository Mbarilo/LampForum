interface SelectMinimumLikesProps {
    value: number;
    onChange: (value: number) => void;
  }
  
  const SelectMinimumLikes = ({
    value,
    onChange,
  }: SelectMinimumLikesProps) => {
    return (
      <>
        <label>
          <input
            type="radio"
            name="likes"
            checked={value === 0}
            onChange={() => onChange(0)}
          />
          All
        </label>
  
        <label>
          <input
            type="radio"
            name="likes"
            checked={value === 10}
            onChange={() => onChange(10)}
          />
          10+
        </label>
  
        <label>
          <input
            type="radio"
            name="likes"
            checked={value === 30}
            onChange={() => onChange(30)}
          />
          30+
        </label>
      </>
    );
  };
  
export default SelectMinimumLikes;
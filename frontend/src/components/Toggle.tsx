export const Toggle = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}) => {
  return (
    <label
      // htmlFor="AcceptConditions"
      className="relative inline-block h-4 w-9 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
    >
      <input
        type="checkbox"
        // id="AcceptConditions"
        checked={checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event, event.target.checked);
        }}
        className="peer sr-only"
      />

      <span className="absolute inset-y-0 start-0 m-1 size-2 rounded-full bg-white transition-all peer-checked:start-5"></span>
    </label>
  );
};

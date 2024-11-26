interface DividerProps {
  text?: string;
}

export const Divider = ({ text }: DividerProps) => {
  return (
    <span className="flex items-center">
      <span className="h-px flex-1 bg-black"></span>
      {text && <span className="shrink-0 px-6">{text}</span>}
      <span className="h-px flex-1 bg-black"></span>
    </span>
  );
};

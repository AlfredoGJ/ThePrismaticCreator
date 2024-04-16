interface ListProps extends React.HTMLAttributes<string> {}

export default function List({ children }: ListProps) {
  return (
    <div className="bg-white p-1 rounded-md drop-shadow border border-stone-300">
      {children}
    </div>
  );
}

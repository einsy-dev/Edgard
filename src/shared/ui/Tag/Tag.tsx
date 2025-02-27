export default function Tag({ title }: { title: string }) {
  return (
    <div className="border rounded-xl px-3 py-[2px] w-fit">
      <div className="text-sm">{title}</div>
    </div>
  );
}

import { Card, data } from "@/entities/site";
import { DataI } from "@/shared/types/data";

export default function Home() {
  return (
    <main className="w-full p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data.map((el: DataI, index: number) => (
          <Card key={index} data={el} />
        ))}
      </div>
    </main>
  );
}

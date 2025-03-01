import { Card } from "@/shared/ui";
import { DataI } from "@/shared/const/data/interface";
import { data } from "@/shared/const";

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

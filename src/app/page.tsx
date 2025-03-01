import { Card } from "@/shared/ui";
import { DataI } from "@/shared/const/data/interface";
import { data } from "@/shared/const";
import os from "os";

export default function Home() {
  const newdData = data.map((el) => {
    return {
      ...el,
      link: os.hostname() + el.link
    };
  });
  return (
    <main className="w-full p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {newdData.map((el: DataI, index: number) => (
          <Card key={index} data={el} />
        ))}
      </div>
    </main>
  );
}

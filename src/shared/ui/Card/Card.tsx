import Image from "next/image";
import Link from "next/link";
import { DataI } from "@/shared/const/data/interface";

export default function Card({ data }: { data: DataI }) {
  const { img, link } = data;
  return (
    <Link href={link}>
      <div className="aspect-video ">
        <Image src={img} width={1920} height={1080} alt="" className="rounded-xl"/>
      </div>
    </Link>
  );
}

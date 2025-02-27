import Image from "next/image";
import { CardProps } from "./Card.interface";
import { Tag } from "@/shared/ui";

export default function Card({ data: { img, tags } }: CardProps) {
  return (
    <div className="aspect-video">
      <Image src={img} width={1920} height={1080} alt="" />
      <ul className="flex gap-2 mt-2">
        {tags.map((tag, index) => (
          <Tag key={index} title={tag} />
        ))}
      </ul>
    </div>
  );
}

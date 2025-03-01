import { StaticImageData } from "next/image";

interface DataI {
  img: StaticImageData;
  title: string;
  description: string;
  link: string;
}

export type { DataI };

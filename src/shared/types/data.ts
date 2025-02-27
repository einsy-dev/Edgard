import { Tags } from "./tags";

interface DataI {
  id: number;
  img: string;
  title: string;
  description: string;
  tags: Tags[];
}

export type { DataI };

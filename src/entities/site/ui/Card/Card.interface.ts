import { Tags } from "@/shared/types/tags";

interface CardProps {
  className?: string;
  data: {
    id?: number;
    img: string;
    title?: string;
    description?: string;
    tags: Tags[];
  };
}

export type { CardProps };

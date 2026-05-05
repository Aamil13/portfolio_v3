"use client"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

type GridItem = {
  id: number;
  title: string;
  description?: string;
  img?: string;
  spareImg?: string;
};

const itemClassById: Record<number, string> = {
  1: "lg:col-span-3 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
  2: "lg:col-span-2 md:col-span-3 row-span-1",
  3: "md:col-span-6 lg:col-span-5 md:row-span-2",
  4: "lg:col-span-2 md:col-span-3 md:row-span-1",
  5: "md:col-span-3 md:row-span-1",
  6: "lg:col-span-6 md:col-span-6 md:row-span-1",
};

const imgClassById: Record<number, string> = {
  1: "w-full h-full",
  5: "absolute right-0 bottom-0 md:w-96 w-60",
};

const titleClassById: Record<number, string> = {
  1: "justify-start",
  2: "justify-start",
  3: "justify-start",
  4: "justify-start",
  5: "justify-center md:justify-start lg:justify-center",
  6: "justify-center items-center md:max-w-full max-w-60 text-center",
};

const itemRenderOrder: Record<number, number> = {
  1: 1,
  2: 2,
  4: 3,
  5: 4,
  3: 5,
  6: 6,
};

const Grid = ({ gridItems }: { gridItems: GridItem[] }) => {
  const orderedItems = [...gridItems].sort(
    (a, b) => (itemRenderOrder[a.id] ?? Number.MAX_SAFE_INTEGER) - (itemRenderOrder[b.id] ?? Number.MAX_SAFE_INTEGER)
  );

  return (
    <section id="about" >
   
      <BentoGrid className="w-full py-20">
        {orderedItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={itemClassById[item.id] ?? ""}
            img={item.img}
            imgClassName={imgClassById[item.id] ?? ""}
            titleClassName={titleClassById[item.id] ?? ""}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
 
 
    </section>
  );
};

export default Grid;
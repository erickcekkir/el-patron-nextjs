import Image from "next/image";
import TagList from "@/components/tagList/TagList";
import Tag from "../tag/Tag";

export default function HaircutDetail({ haircut }) {
  return (
    <main className="detail-page">
      <h1>{haircut.name}</h1>

      <div className="detail-summary">
        <Image
          className="detail-img"
          src={haircut.image}
          alt={haircut.name}
          width={500}
          height={500}
        />
        <TagList>
          {haircut.tags.map((item, idx) => (
            <Tag key={idx} name={item} />
          ))}
        </TagList>
      </div>

      <p>{haircut.description}</p>
    </main>
  );
}

import { Tag } from "../Tag";
import { Container } from "../CardMovie/styles";
import { Rating } from "../Rating";

export function CardMovie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>

      <div className="rating">
        <Rating data={data} />
      </div>
      <p>{data.description}</p>
        <div>
        {data.tags.map((tag) => (
          <Tag
            key={String(tag.id)}
            title={tag.name}
          />
        ))}
      </div>
    </Container>
  );
}
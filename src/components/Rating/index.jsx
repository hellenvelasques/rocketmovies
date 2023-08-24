import { Container } from "../Rating/styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Rating() {
  return (
    <Container>
      <li>
        <AiFillStar />
      </li>
      <li>
        <AiFillStar />
      </li>
      <li>
        <AiFillStar />
      </li>
      <li>
        <AiFillStar />
      </li>
      <li>
        <AiFillStar />
      </li>
    </Container>
  );
}
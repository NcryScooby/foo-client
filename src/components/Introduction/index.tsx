import fastFood from "../../assets/fastfood.svg";
import { Container, Title, Description, Button } from "./style";
import arrow from "../../assets/arrow.svg";
import play from "../../assets/play.svg";
import stars from "../../assets/stars.svg";

export const Introduction = () => {
  return (
    <Container>
      <div>
        <div className="titles animeLeft">
          <Title>Fast</Title>
          <Title>Food Delivery</Title>
          <img src={arrow} alt="arrow-effect" />
        </div>
        <Description>
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium
        </Description>
        <div className="buttons">
          <Button>Order Now</Button>
          <div className="watch-video">
            <img src={play} alt="Play" />
            <p>Watch Video</p>
          </div>
        </div>
        <div className="rating">
          <img src={stars} alt="stars" />
          <p>5 star rating</p>
          <span>based on 1788 reviews</span>
        </div>
      </div>
      <div className="food-image">
        <img src={fastFood} alt="Fast Food" />
      </div>
    </Container>
  );
};

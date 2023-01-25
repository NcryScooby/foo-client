import Lottie from "lottie-react";
import food from "../../animations/food.json";

export const FoodAnimation = () => (
  <Lottie
    animationData={food}
    loop={false}
    style={{
      width: "150px",
    }}
  />
);

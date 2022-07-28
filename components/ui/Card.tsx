import { ReactElement } from "react";

const Card = (props: { children: ReactElement }) => {
  return (
    <div className=" bg-white drop-shadow-md h-96 w-1/2 mx-auto relative">
      {props.children}
    </div>
  );
};

export default Card;

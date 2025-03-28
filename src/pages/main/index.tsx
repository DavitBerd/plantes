import Bottom from "../../components/bottom";
import Middle from "../../components/middle";
import { Planet } from "../../types";

type MainProps = {
  planet: Planet;
};

const Main = ({ planet }: MainProps) => {
  return (
    <>
      <Middle {...planet} />
      <Bottom {...planet} />
    </>
  );
};

export default Main;

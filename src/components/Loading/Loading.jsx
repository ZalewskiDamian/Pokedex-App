import { Wrapper, Image } from "./Loading.styles";
import loadingImage from "../../assets/images/loading.svg";

const Loading = () => {
  return (
    <Wrapper>
      <Image src={loadingImage} alt="Loading" />
    </Wrapper>
  );
};

export default Loading;

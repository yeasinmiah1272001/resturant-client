import { FiPhoneCall } from "react-icons/fi";
import Container from "./Container";

const CallUsBanner = () => {
  return (
    <Container className="bg-black text-white flex items-center justify-center p-7 mt-6">
      <FiPhoneCall className="text-xl mr-2" />
      <span className="text-3xl">Call Us: +88 0192345678910</span>
    </Container>
  );
};

export default CallUsBanner;

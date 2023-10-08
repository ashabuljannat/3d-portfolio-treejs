import styled from "styled-components";

export const SectionDivider = styled.div`
  background: ${(props) =>
    props.color
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #57d3ee 0%, #945DD6 100%)"};
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  clip-path: polygon(0% 0%, 100% 0%, 100% 11%, 69% 11%, 50% 31%, 9% 31%, 0 15%);
`;

export const SectionPointer = styled.div`
  background: ${(props) =>
    props.color
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  height: 20px;
  width: 20px;
  clip-path: polygon(
    0% 0%,
    0% 100%,
    13% 100%,
    11% 10%,
    89% 10%,
    89% 90%,
    14% 90%,
    9% 100%,
    100% 100%,
    100% 0%
  );
  margin: 0 7px 0 5px;
`;

export const SectionText = styled.p`
  margin: 0 0 10px 15px;
  line-height: 30px;
  font-size: 20px;
  background: linear-gradient(121.57deg, #3fb6ed 18.77%, #dc3fed 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const ServiceText = styled.p`
  font-size: 16px;
  background: linear-gradient(251.57deg, #3fb6ed 18.77%, #dc3fed 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const SectionSubText = styled.p`
  font-size: 17px;
  margin: 10px 15px;
  line-height: 30px;
  background: linear-gradient(121.57deg, #ffffff 18.77%, #807a81 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const SectionTitle2 = styled.h4`
  display: flex;
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;
  align-items: center;  
  background: linear-gradient(121.57deg, #ffffff 18.77%, #807a81 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

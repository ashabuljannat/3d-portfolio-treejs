import styled from "styled-components";

export const CarouselContainer = styled.ul`
  width: 1040px;
  height: 150px;
  // background: #0f1624;
  background: linear-gradient(121.57deg, #0f1624 18.77%, #484a4e45 60.15%);
  display: flex;
  justify-content: space-around;
  margin: 15px 0 30px 30px;
  padding: 5px 10px;
`;
export const CarouselMobileScrollNode = styled.div`
  // display: flex;
  // min-width: ${({ final }) => (final ? `120%;` : `min-content`)};
`;

export const CarouselItem = styled.div`
  max-width: 190px;
  width: fil-content;
  height: 100%;
  // margin-left: 22px;
  background: #02050d;
  padding: 5px;
  align-content: start;
  border-radius: 3px;
  position: relative;
`;

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  background: linear-gradient(
    rgba(24, 153, 213, 1) 0%,
    rgba(220, 63, 237, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5px;
`;
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  width: 100%;
`;

export const CarouselItemText = styled.p`
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #d8d8d8;
`;
export const CarouselButtons = styled.div`
  width: 288px;
`;

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => (props.active === props.index ? `1` : `.33`)};
  transform: ${(props) =>
    props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;

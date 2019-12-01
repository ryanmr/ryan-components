import styled from "styled-components";
import { FadeInAnimationY } from "./keyframes";

export const BrandTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 8rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: normal;
  font-family: ${props => props.theme.brandFont};
  color: #fff;

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
  }

  @media screen and (max-width: 40rem) {
    font-size: 16vw;
  }
`;

export const AnimatedHomeTitle = styled(BrandTitle)`
  opacity: 0;
  transform: translateY(-10px);
  animation: 0.75s linear 0s 1 ${FadeInAnimationY};
  animation-fill-mode: forwards;
`;

export const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

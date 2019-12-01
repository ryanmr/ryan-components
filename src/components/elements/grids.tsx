import React from "react";
import styled from "styled-components";
import { up } from "../../helpers/media";

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${up('medium')`
    display: unset;
  `}
`;

export interface ColumnProps {
  size: number;
}

export const Column = styled.div<ColumnProps>`
  margin-left: 1rem;
  width: ${props => props.size ? props.size * 100 : 100}%;

  &:first-child {
    margin-left: 0;
  }

  ${up('medium')`
    margin-left: 0;
    width: 100%;
  `}
`;


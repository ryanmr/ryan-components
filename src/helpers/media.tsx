import styled, { css } from "styled-components";
import { theme, Theme } from "../theme";

type BreakpointOptions = keyof Theme['breakpoints'];

export function up(breakpoint: BreakpointOptions) {
  return (arg, ...args) => css`
    @media (max-width: ${props => props.theme.breakpoints[breakpoint]}) {
      ${css(arg, ...args)};   
    }
  `;
}

export function down(breakpoint: BreakpointOptions) {
  return (arg, ...args) => css`
    @media (min-width: ${props => props.theme.breakpoints[breakpoint]}) {
      ${css(arg, ...args)};   
    }
  `;
}
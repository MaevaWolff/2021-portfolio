import { css } from "styled-components";

// Layout

export const FlexCenter = css`
  align-items: center;
  justify-content: center;
`;

// Animations
export const HoverLink = css`
  position: relative;
  transition: color 0.3s cubic-bezier(0.11, 0.7, 0, 1);

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scale(0);
    transition: transform 0.3s cubic-bezier(0.11, 0.7, 0, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    &:after {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

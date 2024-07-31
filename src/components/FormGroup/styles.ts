import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  error: string | undefined;
}

export const Content: React.FC<ContentProps> = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ${({ error }: { error: string }) =>
    error &&
    css`
      input {
        border-color: red !important;
      }
    `}

  label {
    display: flex;
    flex-direction: column;

    p {
      align-self: self-start;
      font-size: 14px;
      margin-bottom: 2px;
      font-weight: 700;
      color: #444;
    }
  }

  small {
    font-size: 14px;
    color: red;
    align-self: self-start;
    margin-bottom: 2px;
  }
`;

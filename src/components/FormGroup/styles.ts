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
    margin-bottom: 8px;
  }

  small {
    margin-top: 4px;
    font-size: 14px;
    color: red;
  }
`;

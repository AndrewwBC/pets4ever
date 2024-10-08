import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  border-radius: 4px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 12px 0px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.neutral.c8};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.neutral.c4};
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    max-height: 100%;
    padding-top: 12px;
  }

  .comment {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 16px;
    color: ${({ theme }) => theme.neutral.c8};

    .image {
      img {
        height: 40px;
        width: 40px;
        display: block;
        border-radius: 9999px;
        object-fit: cover;
      }
    }
  }
`;

export const Advice = styled.div`
  color: ${({ theme }) => theme.neutral.c8};
  text-align: center;
`;

export const EachComment = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;

  .creationDate {
    margin-left: 8px;
    font-size: 12px !important;
  }
`;

export const UsernameAndOptions = styled.div`
  display: flex;
  flex-direction: column;

  .options {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    .timeSince {
      font-size: 12px;
    }
  }
`;

export const CommentContent = styled.div`
  align-self: self-start;
`;

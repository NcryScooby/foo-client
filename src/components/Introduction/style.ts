import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: calc(100vh - 6rem);
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    align-items: center;
    height: auto;
  }

  .titles {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;

    img {
      position: absolute;
      top: 0px;
      right: 20px;

      @media (max-width: 768px) {
        top: -40px;
        right: -20px;
      }
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    .watch-video {
      @media (max-width: 768px) {
        width: 100%;
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      p {
        font-weight: 600;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .rating {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    img {
      max-width: 10rem;
    }

    p {
      color: #2f2f2f;
      font-weight: 600;
    }

    span {
      color: #909090;
      font-weight: 200;
    }
  }

  .food-image {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  &:first-child {
    color: #ff7e00;
    font-weight: 800;
    font-size: 8rem;

    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }

  &:nth-child(2) {
    color: #2f2f2f;
    font-size: 4rem;
    line-height: 0.8;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #909090;
`;

export const Button = styled.button`
  background-color: #2f2f2f;
  color: #f4ece1;
  border: 0;
  border-radius: 2rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;

  &:focus,
  &:hover {
    background-color: #ff7e00;
    transition: all 0.1s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

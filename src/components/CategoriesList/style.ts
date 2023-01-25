import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 6rem);
  margin-top: 4rem;
  color: #303030;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;

    @media (max-width: 768px) {
      gap: 1rem;
    }

    li {
      text-align: center;

      p {
        margin-top: 0.5rem;
      }
    }
  }

  h1 {
    font-size: 4rem;
  }

  .icon {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: 3rem;
    }

    p {
      display: none;
    }
  }
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 8rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    align-items: center;
  }

  .items {
    background-color: #f6f3ef;
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
    width: 100%;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    .infos {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .prices-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;

        &:last-child {
          padding-right: 0.5rem;
        }
      }

      p:first-child {
        font-weight: bold;
        font-size: 1.1rem;
      }

      .description {
        font-weight: 300;
        line-height: 1rem;
        font-size: 0.9rem;
      }

      .price {
        font-weight: bold;
        font-size: 1rem;
      }
    }
  }

  img {
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .add-remove {
    display: grid;
    grid-template-columns: 10px 50px 10px;
    place-items: center;
    button {
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      border: none;
      cursor: pointer;
      background-color: #ffffff;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

      &:active {
        background-color: #313131;
        color: #ffffff;
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;

  .empty-cart {
    font-size: 2rem;
    color: #313131;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #303030;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 8rem;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: #313131;

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 4rem;

    span {
      &:first-child {
        font-weight: 300;
        font-size: 1.5rem;
      }

      &:last-child {
        font-size: 1.8rem;
        font-weight: 500;
      }
    }
  }

  h1 {
    font-size: 1.2rem;
  }

  img {
    width: 10rem;
    border-radius: 1rem;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 200px 200px 100px;
    place-items: center;
    padding: 2rem;
    border-bottom: 0.8px solid #d9d9d9;

    .remove {
      border: 0;
      background-color: transparent;
      cursor: pointer;
      font-size: 1rem;
      color: #313131;
    }

    .add-remove {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      place-items: center;
      button {
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        border: none;
        cursor: pointer;
        background-color: #d9d9d9;
      }
    }

    .description {
      font-weight: 300;
      font-size: 0.9rem;
      max-width: 25ch;
    }
  }
`;

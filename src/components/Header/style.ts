import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  ul {
    display: flex;
    gap: 3.5rem;

    @media (max-width: 768px) {
      display: none;
    }

    li {
      line-height: 1rem;
      font-weight: 400;
      font-size: 1rem;
    }
  }

  .wrapper {
    position: relative;
    .icon {
      position: absolute;
      top: 0.68rem;
      left: 1rem;
    }
    .icon-cart {
      position: absolute;
      top: 0.8rem;
      right: 2rem;
    }

    .cart {
      cursor: pointer;
    }
    span {
      position: absolute;
      top: 0.75rem;
      right: 1rem;
      color: #ffffff;
      background-color: #ec2633;
      font-size: 8px;
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 2px 23px 1px rgba(255, 51, 52, 0.72);
    }

    &::after {
      content: "";
      position: absolute;
      width: 0px;
      height: 25px;
      top: 0.5rem;
      right: 3.5rem;
      border: 0.5px solid rgba(148, 140, 140, 0.31);
    }
  }
`;

export const Logo = styled.img``;

export const SearchInput = styled.input`
  height: 2.5rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  background-color: #fff9f0;
  padding-right: 4rem;
  padding-left: 3rem;
  font-size: 0.8rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &::placeholder {
    color: #000000;
    font-weight: 400;
    line-height: 1rem;
  }

  &:focus,
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.48) 0px 3px 8px;
  }

  @media (max-width: 768px) {
    width: 12rem;
  }
`;

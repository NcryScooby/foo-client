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
  }
`;

export const Logo = styled.img``;

export const SearchInput = styled.input`
  height: 2.5rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  background-color: #f6ede3;
  padding-left: 3rem;
  font-size: 1rem;
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
    width: 8rem;
  }
`;

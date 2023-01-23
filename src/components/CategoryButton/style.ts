import styled from "styled-components";

export const ButtonStyle = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.48) 0px 3px 8px;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    // display none in children elements
  }
`;

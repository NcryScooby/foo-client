import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  padding: 2rem;
  margin-top: 4rem;
  color: #313131;
  padding-bottom: 8rem;

  .infos {
    padding: 2rem;
    position: relative;

    .effect {
      position: absolute;
      width: 40px;
      top: 120px;
      right: 80px;
      opacity: 0.8;
      transform: rotate(-45deg);
    }

    .maileffect {
      position: absolute;
      width: 40px;
      top: -20px;
      left: 20px;
      transform: rotate(45deg);
    }

    .title {
      font-size: 3rem;
      line-height: 4rem;
    }

    .description {
      margin-bottom: 2rem;
    }
  }

  label {
    font-size: 0.9rem;
    font-weight: 400;
    margin-bottom: 0.25rem;
  }

  input {
    height: 40px;
    border: 0.5px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    font-size: 0.9rem;
    font-weight: 300;
    font-family: "Poppins", sans-serif;
    outline: none;
    background-color: #f9f6f1;

    &:focus {
      border: 0.5px solid #313131;
    }
  }

  textarea {
    height: 95px;
    border: 0.5px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    font-size: 0.9rem;
    font-weight: 300;
    font-family: "Poppins", sans-serif;
    outline: none;
    resize: none;
    background-color: #f9f6f1;

    &:focus {
      border: 0.5px solid #313131;
    }
  }

  button {
    height: 40px;
    border: 0;
    border-radius: 5px;
    background-color: #313131;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #000;
    }

    &:disabled {
      background-color: #ccc;
    }
  }

  .name {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  span {
    display: flex;
    flex-direction: column;
  }
`;

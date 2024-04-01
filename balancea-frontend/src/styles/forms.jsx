import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px; // Puedes ajustar el ancho según tus necesidades
  margin: auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8em;
  text-align: left;
  width: 100%;
`;

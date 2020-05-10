import {css} from 'lit-element/lit-element.js';

export const style = css`
  input,
  button {
    padding: 10px 20px;
    border-radius: 7px;
    font-size: 16px;
    border: none;
  }
  input:focus,
  button:focus {
    outline: none;
  }
  input {
    background: rgba(0,0,0,0.1);
    flex-grow: 3;
  }
  button {
    background-color: white;
    background-color: #1f68f4;
    color: white;
    font-weight: bold;
    cursor: pointer;
    flex-grow: 1;
    margin-left: 18px;
  }
  p#taskCounter {
    margin-top: 5px;
    font-size: 12px;
    font-style: italic;
  }
  div.form-container {
    display: flex;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.isValid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.isValid ? "red" : "#ccc")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    border-color: red;
    background: #ffd7d7;
  }

  &.invalid label {
    color: red;
  }
`;
const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsEmpty(true);
    }
    setEnteredValue(event.target.value);
    setInputVal(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsEmpty(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };
  const resetFormInput = () => {
    setInputVal("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl
        isValid={
          !isEmpty
        } /*className={`form-control  ${!isEmpty ? "invalid" : ""}`}*/
      >
        <label
        /*style={{ color: !isEmpty ? "red" : "black" }}*/ // This is Inline Style Method
        //className={`form-control ${!isEmpty ? "invalid" : ""}`}// Using className dynamically
        >
          Course Goal
        </label>
        <input
          type="text"
          /* style={{ borderColor: !isEmpty ? "red" : "black" , background: "transparent"}}*/
          value={inputVal}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit" onClick={resetFormInput}>
        Add Goal
      </Button>
    </form>
  );
};
//<div className={`form-control  ${!isEmpty ? "invalid" : ""}`}></div> : This technique is we are dynamically adding CSS class using `` and $ repesents varable
export default CourseInput;

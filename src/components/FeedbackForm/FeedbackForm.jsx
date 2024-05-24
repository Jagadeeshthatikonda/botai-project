import React, { useState } from "react";
import Modal from "react-modal";
import * as Styled from "./StyledComponents"
import { ThemeContext } from "../Home/Home.jsx";
import { useContext } from "react"
import lightOff from "../../assets/lightOff.png"
import lightOn from "../../assets/lightOn.png"
import lightWhite from "../../assets/lightWhite.png"

const ProvideFeedbackModal = ({ isOpen, closeModal, submitFeedback, feedbackText }) => {
  const [feedback, setFeedback] = useState(feedbackText ? feedbackText : '');
  const theme = useContext(ThemeContext);

  const handleInputChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    submitFeedback(feedback);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Provide Feedback"
      overlayClassName="fixed  inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
      className={`rounded-[10px] w-fit h-fit rounded-tl-lg shadow-lg p-8 flex flex-col items-center ${theme ? 'bg-white' : "bg-black text-white"}`}
    >
      <Styled.ModalHeaderContainer>
        <img src={feedback ? lightOn : theme ? lightOff : lightWhite} srcSet="" style={{

          marginRight: "8px",
          width: "40px",
          height: "42px"
        }} />

        <Styled.ModalHeading isLightTheme={theme}>Provide Additional Feedback</Styled.ModalHeading>
      </Styled.ModalHeaderContainer>
      <Styled.Form onSubmit={handleSubmitFeedback}>
        <Styled.TextArea
          placeholder="Enter your feedback here..."
          value={feedback}
          onChange={handleInputChange}
          isLightTheme={theme}
          required
        />
        <Styled.SubmitButton
          type="submit"
        >
          Submit
        </Styled.SubmitButton>
      </Styled.Form>
    </Modal>
  );
};

export default ProvideFeedbackModal;

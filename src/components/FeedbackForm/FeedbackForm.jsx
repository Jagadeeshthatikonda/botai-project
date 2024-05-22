import React, { useState } from "react";
import Modal from "react-modal";
import * as Styled from "./StyledComponents"

const ProvideFeedbackModal = ({ isOpen, closeModal, submitFeedback }) => {
  const [feedback, setFeedback] = useState("");

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
      className=" rounded-[10px] w-[766px] h-[335px] bg-white rounded-tl-lg shadow-lg p-8 flex flex-col items-center"
    >
      <Styled.ModalHeaderContainer>
        <Styled.ModalHeading >Provide Additional Feedback</Styled.ModalHeading>
      </Styled.ModalHeaderContainer>
      <Styled.Form onSubmit={handleSubmitFeedback}>
        <Styled.TextArea
          placeholder="Enter your feedback here..."
          value={feedback}
          onChange={handleInputChange}
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

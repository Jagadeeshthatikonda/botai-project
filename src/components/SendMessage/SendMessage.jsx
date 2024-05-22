

import * as Styled from './StyledComponents'

const SendMessage = ({ message, setMessage, onClickAsk, onClickSave }) => {

  const renderInput = () =>
    <Styled.SendMessageInput
      type="text"
      onChange={(e) => setMessage(e.target.value)}
      value={message}
    />

  const renderAskBtn = () =>
    <Styled.ActionBtn
      onClick={onClickAsk}
    >
      Ask
    </Styled.ActionBtn>

  const renderSaveBtn = () =>
    <Styled.ActionBtn
      onClick={onClickSave}
    >
      Save
    </Styled.ActionBtn>

  return <Styled.SendMessageContainer>
    {renderInput()}
    {renderAskBtn()}
    {renderSaveBtn()}
  </Styled.SendMessageContainer>



}
export default SendMessage
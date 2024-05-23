import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

export const SendMessageContainer = styled.div`
  ${tw`flex items-center justify-start py-4 px-[14px] gap-x-6`}
`;

export const SendMessageInput = styled.input`
  ${tw`w-full pl-3 h-[41px] outline-none border border-solid border-[#00000073] rounded-[5px]`}
`;

export const ActionBtn = styled.button`
${tw`flex justify-center items-center text-sm font-normal	leading-[22px] w-[73px] h-[41px] bg-[#D7C7F4] rounded-[5px] text-[#000000] border-none outline-none`}

font-family:Ubuntu;
`


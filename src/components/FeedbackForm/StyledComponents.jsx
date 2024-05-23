import styled from "styled-components";
import tw from "twin.macro";

export const ModalHeaderContainer = styled.div`
 ${tw`flex justify-start mb-4 self-start`}
  ${props => props.isLightTheme ? tw`` : tw`text-white `}

`;

export const ModalHeading = styled.h2`
 ${tw`text-2xl text-left text-gray-700`}
`;

export const Form = styled.form`
 ${tw`w-full flex flex-col items-center`}
`;

export const TextArea = styled.textarea`
 ${tw`w-[716px] h-[187px] border rounded-tl-lg p-2 mb-2 resize-none self-end`}
  ${props => props.isLightTheme ? tw`` : tw`text-white bg-black border border-solid border-white`}

 @media (max-width: 800px) {
   ${tw`w-[300px]`}
  }
`;

export const SubmitButton = styled.button`
${tw`flex justify-center items-center text-sm font-normal	leading-[22px] w-[157px] h-[50px] bg-[#D7C7F4] rounded-[5px] text-[#000000] border-none outline-none self-end`}

font-family:Ubuntu;
`;
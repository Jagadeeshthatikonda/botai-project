


import styled from 'styled-components';
import tw from 'twin.macro';


export const StarsWrapper = styled.div`
${tw`flex flex-col `}
`;

export const StarContainer = styled.div`
${tw`flex justify-start items-center`}
`;

export const Star = styled.span`

${tw`text-lg cursor-pointer`}
  color: ${({ isFilled, isReadonly, isLightTheme }) => (isFilled ? `${isReadonly ? isLightTheme ? "black" : "white" : "orange"}` : 'gray')};
  
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${props => props.isReadonly ? "" : "orange"};
  }
`;

export const RateThisResponseText = styled.p`
  ${tw`font-normal	text-xs	leading-[21px] mt-2 text-[#000000] `}
  font-family:Open Sans
  ${props => props.isLightTheme ? tw`` : tw`text-white `}

`;
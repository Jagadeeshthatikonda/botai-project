


import styled from 'styled-components';
import tw from 'twin.macro';

export const SidebarContainer = styled.div`
${tw`w-full h-full`}
`
export const LargeSizeSidebarContainer = styled.div`
${tw`max-w-[208px] bg-white w-full h-full flex flex-col justify-start`}
`



export const SidebarMenuItem = styled.div`
${tw`w-full flex items-center h-[47px] pl-4 pr-1 py-2 cursor-pointer`}
background: linear-gradient(0deg, #D7C7F4, #D7C7F4),
linear-gradient(0deg, #D7C7F4, #D7C7F4),
linear-gradient(0deg, #D7C7F4, #D7C7F4),
linear-gradient(0deg, #D7C7F4, #D7C7F4);

`

export const ImageContainer = styled.img`

${tw`rounded-[10px]`}
box-shadow: 0px 4px 4px 0px #00000040;

`

export const MenuItemText = styled.p`

${tw`text-sm font-normal leading-[22px] ml-6 text-black self-end`}

`

export const PastConversationContainer = styled.p`

${tw`h-[39px] rounded-[10px] text-xs font-bold	leading-[18px] mx-auto w-[175px] mt-3 text-[#414146] flex items-center justify-center cursor-pointer`}

background: linear-gradient(0deg, #D7C7F4, #D7C7F4),
linear-gradient(0deg, #D7C7F4, #D7C7F4),
linear-gradient(0deg, #D7C7F4, #D7C7F4),
linear-gradient(0deg, #D7C7F4, #D7C7F4);


`

export const ChatEditLogo = styled.img`

${tw`w-6 h-6 ml-6 self-end`}
`
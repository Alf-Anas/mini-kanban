import styled from "styled-components";

const StyledTitle = styled.h1`
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    margin: 0;
`;

export default function HeaderTitle({ children }) {
    return <StyledTitle>{children}</StyledTitle>;
}

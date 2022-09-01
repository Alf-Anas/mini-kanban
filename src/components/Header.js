import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import { COLORS } from "../constants/colors";
import Button from "./Button";

const StyledHeader = styled.div`
    width: 100%;
    height: 64px;
    border-bottom: 1px solid ${COLORS.NEUTRAL._40};
`;

const StyledMenu = styled.div`
    padding: 18px 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
`;

const StyledTitle = styled.h1`
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    margin: 0;
`;

export default function Header({ children }) {
    return (
        <StyledHeader>
            <StyledMenu>
                <StyledTitle>Product Roadmap</StyledTitle>
                <Button color="primary">
                    <FaPlus size="12" /> Add New Group
                </Button>
            </StyledMenu>
        </StyledHeader>
    );
}

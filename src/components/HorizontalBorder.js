import styled from "styled-components";
import { COLORS } from "../constants/colors";

const StyledBorder = styled.div`
    border-bottom: 1px dashed ${COLORS.NEUTRAL._40};
    width: 100%;
`;

export default function HorizontalBorder() {
    return <StyledBorder />;
}

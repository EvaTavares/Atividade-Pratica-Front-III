import styled from 'styled-components';

interface ParagraphStyledProps {
    textAlign?: string;
}

const ParagraphStyled = styled.p <ParagraphStyledProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: ${(props) => (props.textAlign || "justify")};
`;

export default ParagraphStyled;
import tw, { styled, css } from 'twin.macro';

export const RadioContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    flex-wrap: wrap;

    [type='radio'] {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* IMAGE STYLES */
    [type='radio'] + h1 {
        cursor: pointer;
    }

    /* CHECKED STYLES */
    [type='radio']:checked + h1 {
        background-color: #0266d3;
        color: white;
    }
`;

export const StyledRadioButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledLabel = styled.label`
    margin-top: -0.75rem;
`;

export const StyledRadioText = styled.h1`
    color: #0266d3;
    background-color: #f6f6f6;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 1.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
`;

import React, { ReactNode, useState, Dispatch, SetStateAction } from 'react';
import tw, { css } from 'twin.macro';
import { useForm } from 'react-hook-form';
import { SelectContainer, StyledOptionText } from './style';

interface SelectValueProps {
    value: string;
    text: string;
}

interface SelectProps {
    options: Array<SelectValueProps>;
    setSelected: Dispatch<SetStateAction<string>>;
    label: string;
}

const Select: React.FC<SelectProps> = (props) => {
    const { label, options } = props;

    return (
        <SelectContainer>
            <label tw="block tracking-wide text-xs mb-2 text-sm" htmlFor="grid-state">
                {label}
            </label>
            <div tw="inline-block relative w-64">
                <select tw="block appearance-none w-full bg-white border rounded-3xl border-gray-400 border-2  hover:border-gray-500 px-4 py-2 pr-8 rounded">
                    {options.map((e, i) => {
                        return (
                            <StyledOptionText key={i} value={e.value}>
                                {e.text}
                            </StyledOptionText>
                        );
                    })}
                </select>
                <div tw="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg tw="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </SelectContainer>
    );
};

export default Select;

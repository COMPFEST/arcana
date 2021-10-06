export const argTypes = {
    disabled: {
        control: {
            type: 'boolean',
        },
    },
    iconAlignment: {
        control: 'inline-radio',
        options: ['left', 'right'],
    },
    type: {
        control: {
            type: 'inline-radio',
            options: ['button', 'submit', 'reset'],
        },
    },
    size: {
        control: {
            type: 'inline-radio',
            options: ['base', 'half', 'full'],
        },
    },
};

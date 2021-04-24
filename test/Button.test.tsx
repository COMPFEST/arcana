import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PrimaryButton } from '../stories/Button.stories';

describe('Primary Button', () => {
  it('renders without crashing', () => {
    // render the button and get the getByRole method
    const { getByRole } = render(<PrimaryButton>testing</PrimaryButton>);

    // getByRole as its name gets a selector by its role
    // in this case, it's a `button`.
    // then we make sure it's in the document
    expect(getByRole('button')).toBeInTheDocument();
  });
});

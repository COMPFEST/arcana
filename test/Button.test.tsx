import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Primary } from '../src/stories/Button/Button.stories';

describe('Primary Button', () => {
  it('renders without crashing', () => {
    // render the button and get the getByRole method
    const { getByRole } = render(<Primary>testing</Primary>);

    // getByRole as its name gets a selector by its role
    // in this case, it's a `button`.
    // then we make sure it's in the document
    expect(getByRole('button')).toBeInTheDocument();
  });
});

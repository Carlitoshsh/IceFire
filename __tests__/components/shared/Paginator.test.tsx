import { Paginator } from '@/components/shared/Paginator';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Paginator', () => {
  it('renders the current page number', () => {
    render(<Paginator update={() => {}} page={5} />);
    expect(screen.getByText('Showing page #5')).toBeInTheDocument();
  });

  it('calls update with -1 when Prev button is clicked', () => {
    const updateMock = jest.fn();
    render(<Paginator update={updateMock} page={5} />);
    fireEvent.click(screen.getByText('Prev'));
    expect(updateMock).toHaveBeenCalledWith(-1);
  });

  it('calls update with 1 when Next button is clicked', () => {
    const updateMock = jest.fn();
    render(<Paginator update={updateMock} page={5} />);
    fireEvent.click(screen.getByText('Next'));
    expect(updateMock).toHaveBeenCalledWith(1);
  });

  it('does not render the Prev button when page is 0', () => {
    render(<Paginator update={() => {}} page={0} />);
    expect(screen.queryByText('Prev')).not.toBeInTheDocument();
  });

  it('renders the Prev button when page is greater than 0', () => {
    render(<Paginator update={() => {}} page={1} />);
    expect(screen.getByText('Prev')).toBeInTheDocument();
  });
});
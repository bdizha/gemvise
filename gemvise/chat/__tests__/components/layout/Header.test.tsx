import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/layout/Header';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}));

describe('Header Component', () => {
  const mockToggleSidebar = jest.fn();

  const renderHeader = (showLogo = true) => {
    return render(
      <Header onToggleSidebar={mockToggleSidebar} showLogo={showLogo} />
    );
  };

  beforeEach(() => {
    mockToggleSidebar.mockClear();
  });

  it('renders correctly', () => {
    renderHeader();
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('toggles sidebar when button is clicked', () => {
    renderHeader();
    const toggleButton = screen.getByLabelText('Toggle sidebar');
    fireEvent.click(toggleButton);
    expect(mockToggleSidebar).toHaveBeenCalled();
  });

  it('shows/hides logo based on prop', () => {
    const { rerender } = renderHeader(true);
    const logo = screen.getByTestId('header-logo');
    expect(logo).toHaveClass('opacity-100');

    rerender(<Header onToggleSidebar={mockToggleSidebar} showLogo={false} />);
    expect(logo).toHaveClass('opacity-0');
  });
});

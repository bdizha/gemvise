import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from '@/components/layout/Sidebar';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}));

describe('Sidebar Component', () => {
  const renderSidebar = (isOpen = false) => {
    return render(
      <Sidebar isOpen={isOpen} className="w-64" />
    );
  };

  it('renders correctly', () => {
    renderSidebar();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('shows/hides logo based on isOpen prop', () => {
    const { rerender } = renderSidebar(false);
    const logo = screen.getByTestId('sidebar-logo');
    expect(logo).toHaveClass('opacity-0');

    rerender(<Sidebar isOpen={true} className="w-64" />);
    expect(logo).toHaveClass('opacity-100');
  });
});

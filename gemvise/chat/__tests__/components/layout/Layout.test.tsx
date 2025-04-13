import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/layout/Layout';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}));

describe('Layout Component', () => {
  const renderLayout = () => {
    return render(
      <ThemeProvider attribute="class">
        <Layout>
          <div data-testid="main-content">Content</div>
        </Layout>
      </ThemeProvider>
    );
  };

  it('renders all main layout sections', () => {
    renderLayout();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('main-container')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('handles sidebar toggle correctly', () => {
    renderLayout();
    const sidebar = screen.getByTestId('sidebar');
    const mainContainer = screen.getByTestId('main-container');
    const toggleButton = screen.getByLabelText('Toggle sidebar');

    // Initial state
    expect(sidebar).toHaveClass('w-0');
    expect(mainContainer).toHaveClass('ml-0');

    // Open sidebar
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('w-64');
    expect(mainContainer).toHaveClass('ml-64');

    // Close sidebar
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('w-0');
    expect(mainContainer).toHaveClass('ml-0');
  });

  it('moves logo to sidebar when opened', () => {
    renderLayout();
    const toggleButton = screen.getByLabelText('Toggle sidebar');
    const headerLogo = screen.getByTestId('header-logo');
    const sidebarLogo = screen.getByTestId('sidebar-logo');

    // Initial state
    expect(headerLogo).not.toHaveClass('opacity-0');
    expect(sidebarLogo).toHaveClass('opacity-0');

    // Open sidebar
    fireEvent.click(toggleButton);
    expect(headerLogo).toHaveClass('opacity-0');
    expect(sidebarLogo).not.toHaveClass('opacity-0');
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/layout/Header';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}));

describe('Header Component', () => {
  const mockToggleSidebar = jest.fn();

  beforeEach(() => {
    mockToggleSidebar.mockClear();
  });

  it('renders correctly', () => {
    render(
      <ThemeProvider>
        <Header 
          onToggleSidebar={mockToggleSidebar} 
          showLogo={true} 
          sidebarOpen={false}
        />
      </ThemeProvider>
    );

    expect(screen.getByRole('button', { name: /toggle sidebar/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
  });

  it('calls onToggleSidebar when sidebar button is clicked', async () => {
    render(
      <ThemeProvider>
        <Header 
          onToggleSidebar={mockToggleSidebar} 
          showLogo={false} 
          sidebarOpen={false}
        />
      </ThemeProvider>
    );

    await userEvent.click(screen.getByRole('button', { name: /toggle sidebar/i }));
    expect(mockToggleSidebar).toHaveBeenCalled();
  });

  it('toggles sidebar when button is clicked', () => {
    render(
      <ThemeProvider>
        <Header 
          onToggleSidebar={mockToggleSidebar} 
          showLogo={true} 
          sidebarOpen={false}
        />
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole('button', { name: /toggle sidebar/i });
    userEvent.click(toggleButton);
    expect(mockToggleSidebar).toHaveBeenCalled();
  });

  it('shows/hides logo based on prop', () => {
    const { rerender } = render(
      <ThemeProvider>
        <Header 
          onToggleSidebar={mockToggleSidebar} 
          showLogo={true} 
          sidebarOpen={false}
        />
      </ThemeProvider>
    );

    const logo = screen.getByTestId('header-logo');
    expect(logo).toHaveClass('opacity-100');

    rerender(
      <ThemeProvider>
        <Header 
          onToggleSidebar={mockToggleSidebar} 
          showLogo={false} 
          sidebarOpen={false}
        />
      </ThemeProvider>
    );
    expect(logo).toHaveClass('opacity-0');
  });
});

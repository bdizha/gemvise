import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/layout/Header';
import { type Gem } from '@/types/gems';
import GemCard from '@/components/gems/GemCard';

// Mock next/image since it's not available in test environment
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

const mockGem: Gem = {
  id: '1',
  name: 'Test Gem',
  description: 'A test gem',
  category: 'Test Category',
  imageUrl: '/test-image.jpg',
  gradient: 'bg-gradient-to-r from-blue-500 to-purple-500',
  expertise: ['Testing'],
  followers: 100,
  chatCount: 50
};

describe('UI Components', () => {
  describe('Header', () => {
    const mockToggleSidebar = jest.fn();

    it('renders header with logo shown', () => {
      render(
        <ThemeProvider attribute="class">
          <Header 
            onToggleSidebar={mockToggleSidebar} 
            showLogo={true} 
            sidebarOpen={false}
          />
        </ThemeProvider>
      );
      expect(screen.getByRole('button', { name: /toggle sidebar/i })).toBeInTheDocument();
    });

    it('opens and closes action modals', async () => {
      render(
        <ThemeProvider attribute="class">
          <Header 
            onToggleSidebar={mockToggleSidebar} 
            showLogo={true} 
            sidebarOpen={false}
          />
        </ThemeProvider>
      );

      // Test search modal
      expect(screen.queryByPlaceholderText('Search experts...')).not.toBeInTheDocument();
      fireEvent.click(screen.getByLabelText('Search'));
      expect(screen.getByPlaceholderText('Search experts...')).toBeInTheDocument();
      
      // Submit search form
      const form = screen.getByPlaceholderText('Search experts...').closest('form');
      fireEvent.submit(form!);
      await waitFor(() => {
        expect(screen.queryByPlaceholderText('Search experts...')).not.toBeInTheDocument();
      });

      // Test history modal
      fireEvent.click(screen.getByLabelText('History'));
      expect(screen.getByText('Settings')).toBeInTheDocument();
      
      // Close using backdrop
      fireEvent.click(screen.getByTestId('modal-backdrop'));
      await waitFor(() => {
        expect(screen.queryByText('Settings')).not.toBeInTheDocument();
      });
    });

    it('toggles theme', () => {
      render(
        <ThemeProvider attribute="class">
          <Header 
            onToggleSidebar={mockToggleSidebar} 
            showLogo={true} 
            sidebarOpen={false}
          />
        </ThemeProvider>
      );
      const themeButton = screen.getByLabelText('Toggle theme');
      
      fireEvent.click(themeButton);
      expect(document.documentElement).toHaveClass('dark');
      
      fireEvent.click(themeButton);
      expect(document.documentElement).not.toHaveClass('dark');
    });

    it('toggles sidebar', () => {
      render(
        <ThemeProvider attribute="class">
          <Header 
            onToggleSidebar={mockToggleSidebar} 
            showLogo={true} 
            sidebarOpen={false}
          />
        </ThemeProvider>
      );
      fireEvent.click(screen.getByLabelText('Toggle sidebar'));
      expect(mockToggleSidebar).toHaveBeenCalled();
    });
  });

  describe('GemCard', () => {
    const mockClick = jest.fn();

    it('renders gem card with correct content', () => {
      render(
        <GemCard 
          gem={mockGem} 
          onClick={mockClick}
        />
      );

      expect(screen.getByText(mockGem.name)).toBeInTheDocument();
      expect(screen.getByText(mockGem.description)).toBeInTheDocument();
    });

    it('handles click events', () => {
      render(
        <GemCard 
          gem={mockGem} 
          onClick={mockClick}
        />
      );

      fireEvent.click(screen.getByTestId('gem-card'));
      expect(mockClick).toHaveBeenCalled();
    });

    it('renders without white borders', () => {
      render(<GemCard gem={mockGem} />);
      const card = screen.getByTestId('discover-card');
      
      const styles = window.getComputedStyle(card);
      expect(styles.border).not.toContain('white');
      expect(card.className).not.toContain('border-border/30');
    });

    it('renders gem information correctly', () => {
      render(<GemCard gem={mockGem} />);

      expect(screen.getByText(mockGem.name)).toBeInTheDocument();
      expect(screen.getByText(mockGem.description)).toBeInTheDocument();
      expect(screen.getByText(mockGem.category)).toBeInTheDocument();
      expect(screen.getByText(`${mockGem.followers} followers`)).toBeInTheDocument();
    });

    it('ensures text is readable with gradient overlay', () => {
      render(<GemCard gem={mockGem} />);

      const title = screen.getByText(mockGem.name);
      expect(title).toHaveClass('text-white');

      const card = screen.getByTestId('discover-card');
      expect(card).toHaveStyle({
        backgroundImage: expect.stringContaining('linear-gradient')
      });
    });

    it('maintains consistent border radius', () => {
      render(<GemCard gem={mockGem} />);
      const card = screen.getByTestId('discover-card');
      
      expect(card).toHaveStyle({
        borderRadius: '28px'
      });
    });
  });
});

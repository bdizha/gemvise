import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/layout/Header';
import GemCard from '../../components/gems/GemCard';

// Mock next/image since it's not available in test environment
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe('UI Components', () => {
  describe('Header Component', () => {
    const renderHeader = () => {
      return render(
        <ThemeProvider attribute="class">
          <Header onToggleSidebar={jest.fn()} showLogo={true} />
        </ThemeProvider>
      );
    };

    it('renders correctly', () => {
      renderHeader();
      expect(screen.getByTestId('header')).toBeInTheDocument();
      expect(screen.getByTestId('header-logo')).toBeInTheDocument();
    });

    it('opens and closes action modals', async () => {
      renderHeader();

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
      renderHeader();
      const themeButton = screen.getByLabelText('Toggle theme');
      
      fireEvent.click(themeButton);
      expect(document.documentElement).toHaveClass('dark');
      
      fireEvent.click(themeButton);
      expect(document.documentElement).not.toHaveClass('dark');
    });

    it('toggles sidebar', () => {
      const onToggleSidebar = jest.fn();
      render(
        <ThemeProvider attribute="class">
          <Header onToggleSidebar={onToggleSidebar} showLogo={true} />
        </ThemeProvider>
      );
      
      fireEvent.click(screen.getByLabelText('Toggle sidebar'));
      expect(onToggleSidebar).toHaveBeenCalled();
    });
  });

  describe('GemCard Component', () => {
    const mockGem = {
      name: 'Test Gem',
      description: 'A test gem description',
      image: '/test-image.jpg',
      category: 'Test Category',
      followers: 1000,
      expertise: ['Test Skill 1', 'Test Skill 2'],
      chatCount: '100',
      energyLevel: 85
    };

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

    it('handles click events', () => {
      const handleClick = jest.fn();
      render(<GemCard gem={mockGem} onClick={handleClick} />);

      fireEvent.click(screen.getByTestId('discover-card'));
      expect(handleClick).toHaveBeenCalled();
    });
  });
});

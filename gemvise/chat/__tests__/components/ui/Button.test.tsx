import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '@components/layout/Button';

describe('Button Component', () => {
  it('renders with consistent base styling', () => {
    render(<Button>Test Button</Button>);
    
    const button = screen.getByText('Test Button');
    expect(button).toHaveClass('rounded-full');
    expect(button).toHaveClass('font-medium');
    expect(button).toHaveClass('transition-all');
  });

  it('applies gradient variant correctly', () => {
    render(<Button variant="gradient">Gradient Button</Button>);
    
    const button = screen.getByText('Gradient Button');
    expect(button).toHaveClass('bg-gradient-to-r');
    expect(button).toHaveClass('from-primary');
    expect(button).toHaveClass('to-secondary');
  });

  it('handles loading state correctly', () => {
    render(<Button isLoading>Loading Button</Button>);
    
    const button = screen.getByText('Loading Button');
    const spinner = button.querySelector('svg');
    
    expect(button).toHaveClass('opacity-50');
    expect(button).toHaveClass('cursor-not-allowed');
    expect(spinner).toBeInTheDocument();
  });

  it('handles disabled state correctly', () => {
    render(<Button disabled>Disabled Button</Button>);
    
    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('cursor-not-allowed');
    expect(button).toHaveClass('disabled:bg-primary/50');
  });

  it('supports different sizes', () => {
    const { rerender } = render(<Button size="sm">Small Button</Button>);
    expect(screen.getByText('Small Button')).toHaveClass('h-8');

    rerender(<Button size="md">Medium Button</Button>);
    expect(screen.getByText('Medium Button')).toHaveClass('h-10');

    rerender(<Button size="lg">Large Button</Button>);
    expect(screen.getByText('Large Button')).toHaveClass('h-12');
  });

  it('creates ripple effect on click', () => {
    render(<Button>Click Me</Button>);
    
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    
    const ripple = button.querySelector('.bg-white\\/20');
    expect(ripple).toBeInTheDocument();
  });

  it('prevents ripple effect when disabled', () => {
    render(<Button disabled>Disabled Button</Button>);
    
    const button = screen.getByText('Disabled Button');
    fireEvent.click(button);
    
    const ripple = button.querySelector('.bg-white\\/20');
    expect(ripple).not.toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '@/components/ui/Card';

describe('Card Component', () => {
  it('renders with consistent base styling', () => {
    render(
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Content>Content</Card.Content>
      </Card>
    );
    
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('rounded-2xl');
    expect(card).toHaveClass('bg-background');
    expect(card).toHaveClass('shadow-lg');
  });

  it('applies hover effect', () => {
    render(
      <Card interactive>
        <Card.Header>Header</Card.Header>
        <Card.Content>Content</Card.Content>
      </Card>
    );
    
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('hover:shadow-xl');
    expect(card).toHaveClass('hover:-translate-y-2');
    expect(card).toHaveClass('cursor-pointer');
  });

  it('supports gradient variant', () => {
    render(
      <Card gradient>
        <Card.Header>Header</Card.Header>
        <Card.Content>Content</Card.Content>
      </Card>
    );
    
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('bg-gradient-to-br');
    expect(card).toHaveClass('from-primary');
    expect(card).toHaveClass('to-secondary');
    expect(card).toHaveClass('text-white');
  });

  it('maintains consistent typography', () => {
    render(
      <Card>
        <Card.Header>
          <h2>Title</h2>
          <p>Subtitle</p>
        </Card.Header>
        <Card.Content>Content</Card.Content>
      </Card>
    );
    
    const card = screen.getByTestId('card');
    const header = screen.getByTestId('card-header');
    const content = screen.getByTestId('card-content');
    
    [card, header, content].forEach(element => {
      expect(element).toHaveStyle({ fontFamily: 'var(--font-primary)' });
    });
  });

  it('maintains consistent border radius across nested elements', () => {
    render(
      <Card>
        <Card.Header>
          <img src="/test.jpg" alt="test" className="rounded-t-2xl" />
        </Card.Header>
        <Card.Content>Content</Card.Content>
      </Card>
    );
    
    const card = screen.getByTestId('card');
    const img = screen.getByAltText('test');

    expect(card).toHaveClass('rounded-2xl');
    expect(img).toHaveClass('rounded-t-2xl');
  });
});

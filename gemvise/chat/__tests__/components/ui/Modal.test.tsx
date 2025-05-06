import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '@/components/ui/Modal';

const renderModal = (isOpen: boolean) => {
  const onClose = jest.fn();
  const { rerender } = render(
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>Test Modal</Modal.Header>
      <Modal.Content>Modal Content</Modal.Content>
    </Modal>
  );
  return { onClose, rerender };
};

describe('Modal Component', () => {
  it('renders with consistent styling when open', () => {
    renderModal(true);
    
    const modal = screen.getByRole('dialog');
    const backdrop = screen.getByTestId('modal-backdrop');
    
    expect(modal).toHaveClass('rounded-[4rem]');
    expect(modal).toHaveClass('bg-background/80');
    expect(modal).toHaveClass('shadow-lg');
    expect(backdrop).toHaveClass('backdrop-blur-lg');
  });

  it('animates smoothly', () => {
    const { rerender } = renderModal(false);
    
    rerender(
      <Modal isOpen={true} onClose={jest.fn()}>
        <Modal.Header>Test Modal</Modal.Header>
        <Modal.Content>Modal Content</Modal.Content>
      </Modal>
    );
    
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveStyle({
      opacity: '0',
      transform: 'translateX(-50%) translateY(-50%) scale(0.95)'
    });
  });

  it('maintains consistent spacing', () => {
    renderModal(true);
    
    const header = screen.getByText('Test Modal').closest('div');
    const content = screen.getByText('Modal Content').closest('div');
    
    expect(header).toHaveClass('p-6');
    expect(content).toHaveClass('p-6');
  });

  it('handles mobile view correctly', () => {
    render(
      <Modal isOpen={true} onClose={jest.fn()} isMobile>
        <Modal.Header>Test Modal</Modal.Header>
        <Modal.Content>Modal Content</Modal.Content>
      </Modal>
    );
    
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('w-full');
    expect(modal).toHaveClass('h-full');
    expect(modal).toHaveClass('rounded-none');
  });

  it('shows close button with consistent styling', () => {
    renderModal(true);
    const closeButton = screen.getByLabelText('Close modal');
    
    expect(closeButton).toHaveClass('rounded-full');
    expect(closeButton).toHaveClass('transition-all');
  });

  it('handles keyboard interactions', async () => {
    const { onClose } = renderModal(true);
    
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });
});

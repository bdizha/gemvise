'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/utils/utils';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isMobile?: boolean;
  className?: string;
  backdropClassName?: string;
}

interface ModalSubComponents {
  Header: typeof ModalHeader;
  Content: typeof ModalContent;
  Footer: typeof ModalFooter;
}

const Modal: React.FC<ModalProps> & ModalSubComponents = ({ 
  isOpen, 
  onClose, 
  children, 
  isMobile = false,
  className,
  backdropClassName 
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn("fixed inset-0 bg-[#000000]/40 backdrop-blur-sm z-50", backdropClassName)}
            onClick={onClose}
            data-testid="modal-backdrop"
          />
          <motion.div
            role="dialog"
            initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={cn(
              'fixed left-1/2 top-1/2 z-50 transform overflow-hidden bg-gradient-dark-light text-white shadow-xl',
              isMobile ? 'w-full h-full rounded-none' : 'max-w-lg w-full rounded-[40px]',
              className
            )}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

interface ModalHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className }) => (
  <div className={cn("flex items-center justify-between p-6 bg-gradient-dark", className)}>
    <div>{children}</div>
    <button
      type="button"
      className="p-2 rounded-full hover:bg-white/10 transition-colors"
      onClick={() => {
        const modal = document.querySelector('[role="dialog"]');
        if (modal) {
          const closeButton = modal.querySelector('[data-testid="modal-close"]');
          closeButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }
      }}
      data-testid="modal-close"
    >
      <X className="w-5 h-5 text-white" />
    </button>
  </div>
);

interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
}

const ModalContent: React.FC<ModalContentProps> = ({ children, className }) => (
  <div className={cn("p-6", className)}>{children}</div>
);

interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => (
  <div className={cn("flex items-center justify-between p-6 border-t border-white/10 bg-gradient-dark", className)}>
    {children}
  </div>
);

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;

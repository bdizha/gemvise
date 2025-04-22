'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isMobile?: boolean;
}

interface ModalSubComponents {
  Header: typeof ModalHeader;
  Content: typeof ModalContent;
  Footer: typeof ModalFooter;
}

const Modal: React.FC<ModalProps> & ModalSubComponents = ({ isOpen, onClose, children, isMobile = false }) => {
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
            className="fixed inset-0 bg-[#000000]/40 backdrop-blur-sm z-50"
            onClick={onClose}
            data-testid="modal-backdrop"
          />
          <motion.div
            role="dialog"
            initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`fixed left-1/2 top-1/2 z-50 transform overflow-hidden bg-gradient-dark-light text-white shadow-lg
              ${isMobile ? 'w-full h-full rounded-none' : 'max-w-lg w-full rounded-[40px]'}`}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ModalHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-between p-6 bg-gradient-dark">
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
    >
      <X className="w-5 h-5 text-white" />
    </button>
  </div>
);

const ModalContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-6">{children}</div>
);

const ModalFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-between p-6 border-t border-white/10 bg-gradient-dark">
    {children}
  </div>
);

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;

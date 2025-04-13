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
            className="fixed inset-0 bg-black/20 backdrop-blur-lg z-50"
            onClick={onClose}
            data-testid="modal-backdrop"
          />
          <motion.div
            role="dialog"
            initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
            transition={{ duration: 0.2 }}
            className={`fixed left-1/2 top-1/2 z-50 transform overflow-hidden bg-background/80 shadow-lg backdrop-blur-sm
              ${isMobile ? 'w-full h-full rounded-none' : 'max-w-lg w-full rounded-2xl'}`}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ModalHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
    <h2 className="text-xl font-semibold">{children}</h2>
    <button
      onClick={(e) => {
        e.stopPropagation();
        const modal = (e.target as HTMLElement).closest('[role="dialog"]');
        if (modal) {
          const closeEvent = new CustomEvent('modal-close');
          modal.dispatchEvent(closeEvent);
        }
      }}
      className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
      aria-label="Close modal"
    >
      <X className="w-5 h-5" />
    </button>
  </div>
);

const ModalContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-6">{children}</div>
);

const ModalFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-end space-x-2 p-6 border-t border-gray-200 dark:border-gray-800">
    {children}
  </div>
);

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;

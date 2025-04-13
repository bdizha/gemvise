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
            className={`fixed left-1/2 top-1/2 z-50 transform overflow-hidden bg-white dark:bg-[#232f3e] shadow-lg border border-[#d5d9d9] dark:border-[#3f4b58]
              ${isMobile ? 'w-full h-full rounded-none' : 'max-w-lg w-full rounded-lg'}`}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ModalHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-between p-4 border-b border-[#d5d9d9] dark:border-[#3f4b58]">
    <h2 className="text-lg font-semibold text-[#0f1111] dark:text-white">{children}</h2>
    <button
      onClick={(e) => {
        e.stopPropagation();
        const modal = (e.target as HTMLElement).closest('[role="dialog"]');
        if (modal) {
          const closeEvent = new CustomEvent('modal-close');
          modal.dispatchEvent(closeEvent);
        }
      }}
      className="rounded-sm p-1.5 hover:bg-[#f7fafa] dark:hover:bg-[#2f3f4f] transition-colors"
      aria-label="Close modal"
    >
      <X className="w-5 h-5 text-[#5f6b7a]" />
    </button>
  </div>
);

const ModalContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4 text-[#0f1111] dark:text-white">{children}</div>
);

const ModalFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-end space-x-3 p-4 border-t border-[#d5d9d9] dark:border-[#3f4b58] bg-[#f7fafa] dark:bg-[#2f3f4f]">
    {children}
  </div>
);

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;

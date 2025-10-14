import { FC, Suspense } from 'react';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import Loader from '@/shared/ui/deprecated/Loader';
import Modal from '@/shared/ui/redesigned/Modal';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
export default LoginModal;

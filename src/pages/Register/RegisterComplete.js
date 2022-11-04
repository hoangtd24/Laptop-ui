import { Box, Container, Divider } from '@mui/material';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from '~/components/Button/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Logo } from '~/components/icons';
import { auth } from '~/firebase';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function RegisterComplete() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reTypePassword, setReTypePassword] = useState('');

    let navigate = useNavigate();
    useEffect(() => {
        setEmail(window.localStorage.getItem('emailForSignIn'));
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await auth.signInWithEmailLink(email, window.location.href);
        if (result.user.emailVerified) {
            window.localStorage.removeItem('emailForSignIn');
            let user = auth.currentUser;
            await user.updatePassword(password);
            const idTokenResult = await user.getIdTokenResult();
            navigate('/login');
        }
    };
    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    backgroundColor: '#fff',
                    padding: '16px',
                    margin: '32px 0',
                    borderRadius: '8px',
                    boxShadow: 'rgb(0 0 0 / 30%) 0px 0.5rem 1rem 0px',
                    textAlign: 'center',
                }}
            >
                <Logo />
                <h1 className="m-3">Đăng ký tài khoản</h1>
                <form className="mt-5 d-flex flex-column" onSubmit={handleSubmit}>
                    <input
                        className="form-control p-3 fs-4"
                        placeholder="Nhập Email...."
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled
                    />
                    <input
                        className="form-control p-3 fs-4 mt-3"
                        placeholder="Nhập mật khẩu...."
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        className="form-control p-3 fs-4 mt-3"
                        placeholder="Nhập lại mật khẩu...."
                        type="password"
                        value={reTypePassword}
                        onChange={(e) => setReTypePassword(e.target.value)}
                    />
                    
                    <button type="submit" className={cx('login-btn')}>
                        ĐĂNG Ký
                    </button>
                </form>
                <Divider>Hoặc</Divider>
                <div className="d-flex mt-4 justify-content-center align-items-center">
                    <span>Bạn đã có tài khoản?</span>
                    <Button className={cx('register')} to="/login">
                        Đăng Nhập
                    </Button>
                </div>
                <ToastContainer />
            </Box>
        </Container>
    );
}

export default RegisterComplete;

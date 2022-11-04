import { Box, Container, Divider } from '@mui/material';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from '~/components/Button/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Logo } from '~/components/icons';
import { auth } from '~/firebase';

const cx = classNames.bind(styles);
function Register() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        var actionCodeSettings = {
            url: 'http://localhost:3000/register/complete',
            handleCodeInApp: true,
        };

        await auth.sendSignInLinkToEmail(email, actionCodeSettings);
        toast.success('wow easy');
        window.localStorage.setItem('emailForSignIn', email);
        setEmail('');
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

export default Register;

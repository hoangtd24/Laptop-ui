import { Box, Container, Divider } from '@mui/material';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import Button from '~/components/Button/Button';
import { Logo } from '~/components/icons';
import { login } from '~/features/user/userSlice';
import { auth } from '~/firebase';
import styles from './Login.module.scss';
import 'react-toastify/dist/ReactToastify.css';


const cx = classNames.bind(styles);
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await auth.signInWithEmailAndPassword(email, password);
            const idTokenResult = await result.user.getIdTokenResult();
            const dataUser = {
                name: email.split('@')[0],
                email,
                token: idTokenResult.token,
            };

            dispatch(
                login({
                    email,
                    token: idTokenResult.token,
                }),
            );
            localStorage.setItem('loginUser', JSON.stringify(dataUser));
            navigate('/');
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                toast.error('The password is invalid or the user does not have a password.');
            } else {
                toast.error('There is no user record corresponding to this identifier.');
            }
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
                <h1 className="mt-3">Đăng nhập tài khoản</h1>
                <form className="mt-5 d-flex flex-column" onSubmit={handleSubmit}>
                    <input
                        className="form-control p-3 fs-4"
                        placeholder="Type your Email...."
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="form-control p-3 fs-4 mt-3"
                        placeholder="Type your Password...."
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className={cx('login-btn')}>
                        ĐĂNG NHẬP
                    </button>
                </form>
                <Divider>Hoặc</Divider>
                <div className="d-flex mt-4 justify-content-center align-items-center">
                    <span>Bạn chưa có tài khoản?</span>
                    <Button className={cx('register')} to="/register">
                        Đăng kí ngay
                    </Button>
                </div>
            </Box>
            <ToastContainer />
        </Container>
    );
}

export default Login;

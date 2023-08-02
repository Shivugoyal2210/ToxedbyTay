import React from 'react';
import { MuiTelInput } from 'mui-tel-input';
import { useState } from 'react';
import { Button, TextField, useMediaQuery } from '@mui/material';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import auth from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';


const Login = () => {
  const [user, loading] = useAuthState(auth);
  const [phoneNum, setphoneNum] = useState('');
  const [otp, setotp] = useState('');
  auth.useDeviceLanguage();
  const navigate = useNavigate();

  const sendOTP = async (e) => {
    e.preventDefault();
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'signin', {
      size: 'invisible',
      callback: (response) => {
        onSignInSubmit();
      },
    });
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNum, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        window.recaptchaVerifier.clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ValidateOtp = () => {
    confirmationResult
      .confirm(otp)
      .then((result) => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const show = () => {
    console.log(user);
  };

  return (
    <div className="w-[80%] pt-[15rem]">
      <TextField
        value={phoneNum}
        onChange={(e) => setphoneNum(e.target.value)}
        className="mx-auto"
      />
      <Button id="signin" onClick={sendOTP}>
        Sign up!
      </Button>
      <div id="recaptcha-container" className="w-[5rem] border-green-800"></div>
      <TextField
        type="text"
        placeholder={'Enter your OTP'}
        onChange={(e) => {
          setotp(e.target.value);
        }}
      ></TextField>
      <Button onClick={ValidateOtp}>Verify</Button>
    </div>
  );
};

export default Login;

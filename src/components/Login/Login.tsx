import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Link,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button } from '../Button';

export interface LoginProps {
  /** Callback when login form is submitted */
  onLogin?: (email: string, password: string) => void;
  /** Callback when "Create account" is clicked */
  onCreateAccount?: () => void;
  /** Callback when "Forgot password" is clicked */
  onForgotPassword?: () => void;
  /** Show or hide the Arcos logo */
  showLogo?: boolean;
}

/**
 * Login component with email/phone and password fields
 */
export const Login: React.FC<LoginProps> = ({
  onLogin,
  onCreateAccount,
  onForgotPassword,
  showLogo = true,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin?.(email, password);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="login-container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        width: '100%',
        maxWidth: 350,
        margin: '0 auto',
      }}
    >
      {/* Logo and Form Content */}
      <Box
        className="login-content"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          width: '100%',
        }}
      >
        {/* Arcos Logo */}
        {showLogo && (
          <Box className="logo-container" sx={{ position: 'relative' }}>
            <svg
              width="195"
              height="42"
              viewBox="0 0 195 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Arcos Logo"
            >
              <g clipPath="url(#clip0_5230_29954)">
                <path
                  d="M68.4851 30.6845C71.9233 30.6845 75.0179 28.3923 75.0179 22.49V18.2493C74.1583 20.9426 71.9233 22.2035 68.9435 23.2348C66.5367 24.0372 64.13 24.7821 64.13 27.3035C64.13 29.2519 65.7918 30.6845 68.4851 30.6845ZM55.8207 27.762C55.8207 20.7134 62.7546 18.937 68.1413 18.0774C71.5222 17.5044 74.846 17.4471 74.846 14.6392C74.846 12.347 72.783 11.4301 70.2615 11.4301C67.6828 11.4301 64.8749 12.5762 64.8749 15.4414H57.2533C57.2533 10.0547 62.4681 5.35568 70.2042 5.35568C77.9404 5.35568 82.926 9.42447 82.926 18.1347V22.6046C82.926 25.4698 82.353 32.289 83.5564 35.7274H75.4763C74.9033 34.0654 74.7887 32.4038 75.0752 29.8822H74.7314C73.9864 33.2058 71.5223 36.6443 65.8491 36.6443C60.1187 36.6443 55.8207 33.0914 55.8207 27.762Z"
                  fill="#078856"
                />
                <path
                  d="M85.6317 6.2726H93.6543V13.8942C95.4307 7.64791 98.468 5.47027 102.593 5.35568V13.2637C96.1758 13.2637 93.8835 14.7536 93.8835 22.6046V35.7274H85.6317V6.2726Z"
                  fill="#078856"
                />
                <path
                  d="M102.479 20.9999C102.479 10.9144 109.929 5.35568 118.295 5.35568C125.459 5.35568 131.591 9.42447 132.221 16.2437H124.542C123.855 13.1493 121.046 11.8884 118.295 11.8884C113.597 11.8884 110.617 15.9572 110.617 21.0572C110.617 26.1574 113.597 30.1689 118.64 30.1689C121.505 30.1689 124.199 28.7934 124.714 24.8968H132.279C131.534 33.0341 125.746 36.6443 118.582 36.6443C109.701 36.6443 102.479 30.9137 102.479 20.9999Z"
                  fill="#078856"
                />
                <path
                  d="M149.285 30.1116C153.926 30.1116 156.849 26.1001 156.849 20.9999C156.849 15.9572 153.926 11.8884 149.285 11.8884C144.643 11.8884 141.72 15.9572 141.72 20.9999C141.72 26.1001 144.643 30.1116 149.285 30.1116ZM133.698 20.9999C133.698 11.0863 140.918 5.35568 149.285 5.35568C157.594 5.35568 164.815 11.0863 164.815 20.9999C164.815 30.9137 157.594 36.6443 149.285 36.6443C140.918 36.6443 133.698 30.9137 133.698 20.9999Z"
                  fill="#078856"
                />
                <path
                  d="M165.772 26.1574H173.795C173.795 29.1373 175.915 30.6272 178.666 30.6272C181.36 30.6272 182.965 29.4238 182.965 27.59C182.965 25.2977 180.901 24.6675 178.952 24.0945C177.52 23.6934 176.031 23.3494 174.655 22.8911C169.554 21.4012 166.804 18.6505 166.804 14.238C166.804 9.08052 171.331 5.35568 178.552 5.35568C185.485 5.35568 190.758 8.85133 190.758 15.556H183.079C183.079 12.4043 180.901 11.2582 178.437 11.2582C176.031 11.2582 174.483 12.4616 174.483 14.0088C174.483 15.8998 175.745 16.8167 179.125 17.7909L183.137 18.8224C188.352 20.255 191.044 22.7192 191.044 27.2463C191.044 32.5755 186.631 36.6443 178.724 36.6443C171.676 36.6443 165.772 33.3206 165.772 26.1574Z"
                  fill="#078856"
                />
                <path
                  d="M192.266 7.32795H192.578C192.664 7.32795 192.728 7.31008 192.773 7.27419C192.82 7.23846 192.842 7.18486 192.842 7.11308V6.99591C192.842 6.92445 192.82 6.87069 192.773 6.83496C192.728 6.79923 192.664 6.7812 192.578 6.7812H192.266V7.32795ZM192.266 7.7477V8.39215H191.709V6.35163H192.676C192.923 6.35163 193.108 6.41504 193.228 6.54203C193.348 6.66886 193.409 6.82675 193.409 7.01554C193.409 7.17826 193.375 7.31169 193.306 7.41583C193.238 7.51996 193.148 7.59802 193.037 7.65016L193.476 8.39215H192.871L192.53 7.7477H192.266ZM192.53 8.93888C192.804 8.93888 193.048 8.87869 193.267 8.7583C193.484 8.63791 193.66 8.4702 193.793 8.25549C193.927 8.04062 193.995 7.79341 193.995 7.51336V7.22059C193.995 6.9407 193.927 6.69333 193.793 6.47846C193.66 6.26376 193.484 6.09621 193.267 5.97566C193.048 5.85527 192.804 5.79508 192.53 5.79508C192.256 5.79508 192.008 5.85527 191.788 5.97566C191.566 6.09621 191.39 6.26376 191.26 6.47846C191.13 6.69333 191.065 6.9407 191.065 7.22059V7.51336C191.065 7.79341 191.13 8.04062 191.26 8.25549C191.39 8.4702 191.566 8.63791 191.788 8.7583C192.008 8.87869 192.256 8.93888 192.53 8.93888ZM192.53 9.37828C192.165 9.37828 191.835 9.2904 191.539 9.11465C191.242 8.93889 191.006 8.69972 190.83 8.39697C190.655 8.09439 190.566 7.75109 190.566 7.36706C190.566 6.98304 190.655 6.63957 190.83 6.33699C191.006 6.03424 191.242 5.79507 191.539 5.61931C191.835 5.44356 192.165 5.35568 192.53 5.35568C192.894 5.35568 193.224 5.44356 193.52 5.61931C193.816 5.79507 194.053 6.03424 194.228 6.33699C194.403 6.63957 194.492 6.98304 194.492 7.36706C194.492 7.75109 194.403 8.09439 194.228 8.39697C194.053 8.69972 193.816 8.93889 193.52 9.11465C193.224 9.2904 192.894 9.37828 192.53 9.37828Z"
                  fill="#078856"
                />
                <path
                  d="M28.0501 0.293999H10.9224C10.9224 0.293999 19.2534 15.2286 19.3265 15.359C24.5091 24.6398 36.5173 28.5533 40.0052 28.5533C38.5269 28.5533 31.0468 29.9255 28.5328 31.9309L33.9732 41.706H51.101L28.0501 0.295443V0.293999Z"
                  fill="#078856"
                />
                <path
                  d="M13.5394 15.4019C13.5394 18.8327 3.81891 28.5533 0.388123 28.5533C3.81891 28.5533 13.5394 38.2739 13.5394 41.7046C13.5394 38.2739 23.2599 28.5533 26.6907 28.5533C23.2599 28.5533 13.5394 18.8327 13.5394 15.4019Z"
                  fill="#078856"
                />
              </g>
              <defs>
                <clipPath id="clip0_5230_29954">
                  <rect width="194.88" height="42" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
        )}

        {/* Title and Form Fields */}
        <Box
          className="form-section"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 3,
            width: '100%',
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            className="login-title"
            sx={{
              width: '100%',
              color: 'text.primary',
              fontFamily: 'Arial, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '30px',
              fontWeight: 400,
              lineHeight: '123.5%',
            }}
          >
            Log In
          </Typography>

          {/* Form Fields */}
          <Box
            className="form-fields"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 1.5,
              width: '100%',
            }}
          >
            {/* Email/Phone Field */}
            <TextField
              id="email-phone"
              label="Email or Phone Number"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText="Example: name@email.com or (123) 456-7890"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#363636',
                },
              }}
            />

            {/* Password Field */}
            <TextField
              id="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                      sx={{ color: 'rgba(255, 255, 255, 0.56)' }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#363636',
                },
              }}
            />

            {/* Forgot Password Link */}
            <Box
              className="forgot-password-container"
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onForgotPassword?.();
                }}
                className="forgot-password-link"
                sx={{
                  color: '#92CCFF',
                  fontFamily: 'Roboto Flex, -apple-system, Roboto, Helvetica, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '150%',
                  letterSpacing: '0.15px',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Forgot your password?
              </Link>
            </Box>

            {/* Login Button */}
            <Button
              variant="primary"
              size="large"
              label="Log in"
              fullWidth
              type="submit"
              sx={{
                height: '42px',
                borderRadius: '8px',
                backgroundColor: '#9CCBFB',
                color: '#2B3846',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '26px',
                letterSpacing: '0.46px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#7AB8E8',
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Create Account Section */}
      <Box
        className="create-account-section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 2,
          width: '100%',
        }}
      >
        <Typography
          className="no-account-text"
          sx={{
            width: '100%',
            color: 'text.primary',
            fontFamily: 'Arial, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '150%',
            letterSpacing: '0.15px',
          }}
        >
          Don't have an account?
        </Typography>

        <Button
          variant="outlined"
          size="large"
          label="Create account"
          fullWidth
          onClick={onCreateAccount}
          sx={{
            height: '42px',
            borderRadius: '8px',
            border: '1px solid #9CCBFB',
            color: '#9CCBFB',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '26px',
            letterSpacing: '0.46px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'rgba(156, 203, 251, 0.08)',
              border: '1px solid #9CCBFB',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Login;

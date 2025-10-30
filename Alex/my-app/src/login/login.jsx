import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import pic from '../assets/blob.svg';
import { login } from '../auth';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // reset error before login attempt

    try {
      await login(email, password);
      alert('Logged in successfully!');
      navigate('/'); // redirect after successful login
    } catch {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className={styles.nav}>
        <Link to="/" className={styles.logo}>Mattohsh</Link>
        <ul className={styles.navlinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/maps">Maps</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login" id="sign">Log In</Link></li>
        </ul>
      </div>

      {/* Main Form Container */}
      <div className={styles.container3}>
        <div className={styles.formcontainer}>
          <div className={styles.formblob}>
            <img src={pic} className={`${styles.blobimage} ${styles.blobimage1}`} alt="blob1" />
            <img src={pic} className={`${styles.blobimage} ${styles.blobimage2}`} alt="blob2" />
            <img src={pic} className={`${styles.blobimage} ${styles.blobimage3}`} alt="blob3" />
          </div>

          <div className={styles.formheader}>
            <p>Please enter your details</p>
            <h1>Welcome Back</h1>
          </div>

          {/* Login Form */}
          <form className={styles.formbox} onSubmit={handleSubmit}>
            <div className={styles.inputgroup}>
              <input
                type="email"
                id="email"
                className={styles.inputfield}
                placeholder=""
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className={styles.floatinglabel}>Email address</label>
            </div>

            <div className={styles.inputgroup}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className={styles.inputfield}
                placeholder=""
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password" className={styles.floatinglabel}>Password</label>

              <div className={styles.eyeicon} onClick={togglePassword} style={{ cursor: 'pointer' }}>
                {showPassword ? (
                  // eye-off icon
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-eye-off">
                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                    <path d="m2 2 20 20" />
                  </svg>
                ) : (
                  // eye icon
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-eye">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696
                      10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696
                      10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className={`${styles.inputgroup} ${styles.checkboxgroup}`}>
              <div className={`${styles.formcol} ${styles.rememberme}`}>
                <input type="checkbox" id="remembermecheckbox" className={styles.checkboxfield} />
                <label htmlFor="remembermecheckbox">Remember me</label>
              </div>
              <div className={styles.formcol}>
                <a href="#" className={styles.formlink}>Forgot password</a>
              </div>
            </div>

            <button type="submit" className={styles.formbtnsubmit}>Sign In</button>

            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          </form>

          <p>Don't have an account? <Link to="/signup" className="form-link">Sign up</Link></p>
        </div>
      </div>
    </>
  );
}

export default Login;
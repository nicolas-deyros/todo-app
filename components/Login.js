import { useState } from 'react';
import styles from '@/styles/Login.module.css';
import { motion } from 'framer-motion';

export default function Login() {
	const [heading, setHeading] = useState(`Login to your Account`);
	const [register, setRegister] = useState(false);

	const registration = () => {
		setRegister(true);
		setHeading(`Create Account`);
	};

	const login = () => {
		setRegister(false);
		setHeading(`Login to your Account`);
	};

	return (
		<form className={styles.form}>
			<motion.h1
				className={styles.h1__login}
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 2, ease: 'easeInOut' }}>
				{heading}
			</motion.h1>
			{register ? <input className={styles.input} type='text' placeholder='Name' /> : null}
			<input className={styles.input} type='email' placeholder='Email' />
			<input className={styles.input} type='password' placeholder='Password' />
			<div className={styles.form__buttons}>
				<button className={styles.btn} onClick={() => login()}>
					Login
				</button>
				<button className={styles.btn} onClick={() => registration()}>
					Sign Up
				</button>
			</div>
		</form>
	);
}

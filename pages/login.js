import { useState } from 'react';
import Layout from '@/components/Layout';
import styles from '@/styles/Login.module.css';
import { motion } from 'framer-motion';

export default function AboutPage() {
	const [heading, setHeading] = useState(`Login to your Account`);
	return (
		<Layout>
			<section className={styles.login}>
				<form action='#' className={styles.form}>
					<motion.h1
						className={styles.h1__login}
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ duration: 2, ease: 'easeInOut' }}>
						{heading}
					</motion.h1>
					<span>or use your email for registration</span>
					<input className={styles.input} type='text' placeholder='Name' />
					<input className={styles.input} type='email' placeholder='Email' />
					<input className={styles.input} type='password' placeholder='Password' />
					<div className={styles.form__buttons}>
						<button className={styles.btn} onClick={() => setHeading(`Login to your Account`)}>
							Login
						</button>
						<button className={styles.btn} onClick={() => setHeading(`Create Account`)}>
							Sign Up
						</button>
					</div>
				</form>
			</section>
		</Layout>
	);
}

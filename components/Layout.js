import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import styles from '@/styles/Layout.module.css';

export default function Layout({ title, keywords, description, children }) {
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>

			<Header />
			<main className={styles.container}>{children}</main>
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: 'Todo List | Manage your daily tasks',
	description: 'Simple tool to manage your daily tasks',
	keywords: 'task, todo, task manager, todo task mananger',
};

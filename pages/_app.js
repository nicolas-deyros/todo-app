import '../styles/globals.css';
import { TaskProvider } from '@/contexts/taskContext';

function MyApp({ Component, pageProps }) {
	return (
		<TaskProvider>
			<Component {...pageProps} />
		</TaskProvider>
	);
}

export default MyApp;

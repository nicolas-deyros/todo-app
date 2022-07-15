import { useState } from 'react';
import Layout from '@/components/Layout';
import { fetcher } from '@/lib/api';
import Categories from '@/components/Categories';
import Task from '@/components/Task';
import AddTask from '@/components/AddTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/Home.module.css';

export default function HomePage({ tasks, categories }) {
	const [addtasksState, setAddTasksState] = useState(false);

	return (
		<Layout>
			{/* <section>
				<div className={styles.categories__component}>
					<h5>categories</h5>
					<div className={styles.categories__list}>
						<Categories tasks={tasks} />
					</div>
				</div>
			</section> */}
			<section>
				<h1>What's up, Username!</h1>
				<div className={styles.todo__list}>
					<h5>today's tasks</h5>
					<Task tasks={tasks} categories={categories} />
				</div>
			</section>
			<AddTask />
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/tasks?sort[0]=id%3Adesc`);
	const cat = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categories`);
	return {
		props: {
			tasks: res,
			categories: cat,
		},
	};
}

import { useState } from 'react';
import Layout from '@/components/Layout';
import { fetcher } from '@/lib/api';
import Task from '@/components/Task';
import AddTask from '@/components/AddTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '@/styles/Home.module.css';

export default function HomePage({ tasks }) {
	const [addtasksState, setAddTasksState] = useState(false);

	return (
		<Layout>
			<section>
				<h1>What's up, Username!</h1>
				<div className={styles.categories__component}>
					<h5>categories</h5>
					<div className={styles.categories__list}>
						<div className={styles.category}>
							<small className={styles.task__number}>40 tasks</small>
							<label>Business</label>
							<progress className={styles.category__business} max='100' value='70'>
								70%
							</progress>
						</div>
						<div className={styles.category}>
							<small className={styles.task__number}>18 tasks</small>
							<label>Personal</label>
							<progress className={styles.category__personal} max='100' value='50'>
								50%
							</progress>
						</div>
						<div className={styles.category}>
							<small className={styles.task__number}>40 tasks</small>
							<label>Business</label>
							<progress className={styles.category__business} max='100' value='70'>
								70%
							</progress>
						</div>
						<div className={styles.category}>
							<small className={styles.task__number}>40 tasks</small>
							<label>Business</label>
							<progress className={styles.category__business} max='100' value='70'>
								70%
							</progress>
						</div>
						<div className={styles.category}>
							<small className={styles.task__number}>18 tasks</small>
							<label>Personal</label>
							<progress className={styles.category__personal} max='100' value='50'>
								50%
							</progress>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className={styles.todo__list}>
					<h5>today's tasks</h5>
					<Task tasks={tasks} />
				</div>
			</section>
			<AddTask />
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/tasks?sort[0]=id%3Adesc`);
	return {
		props: {
			tasks: res,
		},
	};
}

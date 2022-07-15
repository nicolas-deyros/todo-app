import { useState } from 'react';
import { useTasks } from '@/contexts/taskContext';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faSquareCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';
import styles from '@/styles/Task.module.css';

const variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 2,
		},
	},
};

export default function Task({ tasks }) {
	const [status, setStatus] = useState();
	const { showModal, setShowModal } = useTasks();
	const [isCompleted, setIsCompleted] = useState(false);
	
	const [values, setValues] = useState({
		task: tasks.task,
		category: tasks.category,
		// date: '',
		status: tasks.status,
	});
	
	const router = useRouter();

	const deleteTask = async (e) => {
		if (confirm('100% Sure to delete?')) {
			try {
				const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/tasks/${e}`, {
					method: 'DELETE',
				});

				const data = await res.json();

				toast.success('Task deleted', {
					position: 'bottom-center',
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});

				router.reload();
			} catch (error) {
				toast.error(error, {
					position: 'bottom-center',
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		}
	};

	const editTask = async (e) => {
		// console.log(e);
		// e.preventDefault();

		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/tasks/${e}`, {
			// method: 'PUT',
			// 		headers: {
			// 			'Content-Type': 'application/json',
			// 		},
			// 		body: JSON.stringify({
			// 			data: {
			// 				task: values.task,
			// 				category: values.category,
			// 			},
			// 		}),
			});
			const data = await res.json();
			setShowModal(true);
			// setStatus(data.status);
			console.log(data);
		} catch (error) {
			toast.error(error, {
					position: 'bottom-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
		}
		
	};

	const statusTask = async (e) => {
		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/tasks/${e}`, {
			method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						data: {
							status: !values.status,
						},
					}),
			})
			const data = await res.json();
			toast.success('Task Completed', {
					position: 'bottom-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
		} catch (error) {
			toast.error(error, {
					position: 'bottom-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
		}
		// const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/tasks/${e}`, {
		// 	method: 'PUT',
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 			},
		// 			body: JSON.stringify({
		// 				data: {
		// 					status: !values.status,
		// 				},
		// 			}),
		// 	})
		// const data = await res.json();
	};

	return (
		<>
			{tasks &&
				tasks.data.map((task) => {
					return (
						<motion.div
							key={task.id}
							className={!isCompleted ? styles.task : styles.task__completed}
							initial='hidden'
							animate='visible'
							variants={variants}>
							<div className={styles.task__status}>
								<FontAwesomeIcon
									icon={faCircle}
									className={styles.category__business}
									title='Edit Task'
								/>
							</div>
							<div className={styles.task__description}>
								<p>
									{task.attributes.task} - <small>{task.attributes.category}</small>
								</p>
							</div>
							<div className={styles.task__edit}>
								<FontAwesomeIcon
									className={styles.edit}
									icon={faPenToSquare}
									id={task.id}
									onClick={() => editTask(task.id)}
									title='Edit Task'
								/>
								<FontAwesomeIcon
									className={styles.check}
									icon={faSquareCheck}
									id={task.id}
									onClick={() => statusTask(task.id)}
									title='Check Task'
								/>
								<FontAwesomeIcon
									className={styles.trash}
									icon={faTrashCan}
									id={task.id}
									onClick={() => deleteTask(task.id)}
									title='Delete Task'
								/>
							</div>
							<ToastContainer />
						</motion.div>
					);
				})}
		</>
	);
}

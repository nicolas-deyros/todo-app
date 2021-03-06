import { useState } from 'react';
import { useTasks } from '@/contexts/taskContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import styles from '@/styles/AddTask.module.css';
import Modal from '@/components/Modal';

export default function AddTask() {
	const { showModal, setShowModal } = useTasks();
	const { showMenu, setShowMenu } = useTasks();

	const [values, setValues] = useState({
		task: '',
		category: '',
		// date: '',
		status: false,
	});

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const hasEmptyField = Object.values(values).some((element) => element === '');

		if (hasEmptyField) {
			toast.error('Complete all the fields', {
				position: 'bottom-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			try {
				const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/tasks`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						data: {
							task: values.task,
							category: values.category,
						},
					}),
				});

				const task = await res.json();

				toast.success('Task added successfully', {
					position: 'bottom-center',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});

				router.reload();

				setShowModal(false);
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
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	return (
		<section>
			<Modal onClose={() => setShowModal(false)} show={showModal}>
				<FontAwesomeIcon
					onClick={() => setShowModal(false)}
					className={styles.form__close}
					icon={faXmark}
					title='Close'
					size='3x'
				/>
				<form className={styles.form__add_task} onSubmit={handleSubmit}>
					<h1 className={styles.form__heading}>
						<FontAwesomeIcon icon={faCirclePlus} title='Edit Task' />
						&nbsp; Add Task
					</h1>
					<input
						className={styles.input}
						type='text'
						id='task'
						name='task'
						values={values.task}
						onChange={handleInputChange}
						placeholder='Task Description'
					/>
					<input
						className={styles.input}
						type='text'
						id='category'
						name='category'
						values={values.category}
						onChange={handleInputChange}
						placeholder='Task Category'
					/>
					{/* <input
						className={styles.input}
						type='date'
						id='date'
						name='date'
						values={values.date}
						onChange={handleInputChange}
					/> */}

					<button className={styles.btn}>
						<FontAwesomeIcon icon={faCirclePlus} size='2x' title='Edit Task' />
						&nbsp; Add Task
					</button>
				</form>
			</Modal>
			<Link href='#'>
				<a className={styles.add} onClick={() => [setShowModal(true), setShowMenu(false)]}>
					<FontAwesomeIcon icon={faPlus} size='2x' title='Add Task' />
				</a>
			</Link>
			<ToastContainer />
		</section>
	);
}

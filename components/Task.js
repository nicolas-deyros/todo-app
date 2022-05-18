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
	return (
		<>
			{tasks &&
				tasks.data.map((task) => {
					return (
						<motion.div
							className={styles.task}
							initial='hidden'
							animate='visible'
							variants={variants}
							key={task.id}>
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
								<FontAwesomeIcon className={styles.edit} icon={faPenToSquare} title='Edit Task' />
								<FontAwesomeIcon className={styles.check} icon={faSquareCheck} title='Check Task' />
								<FontAwesomeIcon className={styles.trash} icon={faTrashCan} title='Delete Task' />
							</div>
						</motion.div>
					);
				})}
		</>
	);
}

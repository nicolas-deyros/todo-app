// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare, faSquareCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
// import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';
import styles from '@/styles/Categories.module.css';

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

export default function Categories({ tasks }) {
	return (
		<>
			{tasks &&
				tasks.data.map((task) => {
					return (
						<motion.div
							className={styles.category}
							initial='hidden'
							animate='visible'
							variants={variants}
							key={task.id}>
							<small className={styles.task__number}>tasks</small>
							<label>{task.attributes.category}</label>
							<progress className={styles.category__business} max='100' value='70'>
								70%
							</progress>
						</motion.div>
					);
				})}
		</>
	);
}

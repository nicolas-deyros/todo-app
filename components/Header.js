import { useState } from 'react';
import { useTasks } from '@/contexts/taskContext';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faXmark,
	faMagnifyingGlass,
	faCircleChevronLeft,
	faHome,
	faArrowRightToBracket,
	faCirclePlus,
	faList,
	faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';

export default function Header() {
	const { showModal, setShowModal } = useTasks();
	const { showMenu, setShowMenu } = useTasks();
	const [showSearch, setShowSearch] = useState(false);
	const [showIcon, setShowIcon] = useState(true);

	return (
		<header className={styles.header}>
			<nav className={styles.header__nav}>
				<div className={styles.header__left}>
					<a>
						<FontAwesomeIcon
							icon={faBars}
							size='2x'
							onClick={() => [setShowMenu(true), setShowSearch(false), setShowIcon(true)]}
						/>
					</a>
				</div>
				<div className={styles.header__right}>
					{showSearch ? (
						<div className={styles.header__search}>
							<div className={styles.header__search_submit}>
								<input
									type='text'
									id='search'
									className={styles.search}
									placeholder='Insert your query'
								/>
								<button className={styles.header__search_submit__btn}>
									<FontAwesomeIcon icon={faMagnifyingGlass} />
								</button>
							</div>
							<FontAwesomeIcon
								icon={faXmark}
								size='2x'
								onClick={() => [setShowSearch(false), setShowIcon(true), setShowMenu(false)]}
							/>
						</div>
					) : null}
					{showIcon ? (
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							size='2x'
							onClick={() => [setShowSearch(true), setShowIcon(false), setShowMenu(false)]}
						/>
					) : null}
					<FontAwesomeIcon icon={faBell} size='2x' />
				</div>
			</nav>
			{showMenu ? (
				<div className={styles.sidenav}>
					<FontAwesomeIcon
						onClick={() => [setShowMenu(false), setShowSearch(false), setShowIcon(true)]}
						icon={faCircleChevronLeft}
						className={styles.sidenav__close}
						size='3x'
					/>
					<div className={styles.user}>
						<img
							className={styles.avatar}
							src='https://randomuser.me/api/portraits/men/6.jpg'
							alt='avatar'
						/>
						<h2 className={styles.name}>Username</h2>
					</div>

					<nav className={styles.header__nav__sidebar}>
						<Link href='/'>
							<a onClick={() => setShowMenu(false)}>
								<FontAwesomeIcon icon={faHome} />
								&nbsp; Home
							</a>
						</Link>
						<Link href='/login'>
							<a onClick={() => setShowMenu(false)}>
								<FontAwesomeIcon icon={faArrowRightToBracket} /> &nbsp; Login
							</a>
						</Link>
						<Link href='/'>
							<a onClick={() => [setShowModal(true), setShowMenu(false)]}>
								<FontAwesomeIcon icon={faCirclePlus} /> &nbsp; Add Task
							</a>
						</Link>
						{/* <Link href='/about'>
							<a onClick={() => setShowMenu(false)}>
								<FontAwesomeIcon icon={faCircleInfo} /> &nbsp; About
							</a>
						</Link> */}
					</nav>
				</div>
			) : null}
		</header>
	);
}

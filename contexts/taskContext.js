import { createContext, useContext, useState } from 'react';

export const TaskContext = createContext();

export const useTasks = () => {
	const context = useContext(TaskContext);
	return context;
};

export const TaskProvider = ({ children }) => {
	const [showModal, setShowModal] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	return (
		<TaskContext.Provider value={{ showModal, setShowModal, showMenu, setShowMenu }}>
			{children}
		</TaskContext.Provider>
	);
};

import { FiSettings } from "react-icons/fi";

const SettingBtn = () => {
	return (
		<div className="flex relative dark:bg-main-dark-bg bg-emerald-500">
			<div className="fixed right-4 bottom-4 z-50">
				<button className="text-3xl p-3 hover:drop-shadow-lg rounded-full">
					<FiSettings />
				</button>
			</div>
		</div>
	);
};

export default SettingBtn;

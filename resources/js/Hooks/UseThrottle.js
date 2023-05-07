const useThrottle = (fn, throttleTime) => {
	let canRun = true;
	return function () {
		const ctx = this;
		if (canRun) {
			fn.call(ctx, ...arguments);
			canRun = false;
			setTimeout(() => {
				canRun = true;
			}, throttleTime);
		}
	};
};
export default useThrottle;

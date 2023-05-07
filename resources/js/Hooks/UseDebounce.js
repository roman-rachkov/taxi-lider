const useDebounce = (fn, debounceTime) => {
	let timeout;
	return function () {
		const ctx = this;
		const args = arguments;
		const func = () => {
			fn.call(ctx, ...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(func, debounceTime);
	};
};

export default useDebounce;

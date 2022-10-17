const handleError =
    (fn, defaultErrorMessage = '') =>
        (...params) => {
            return fn(...params).catch(error => {
                const errorMessage =
                    error?.response?.data?.message ||
                    error?.message ||
                    defaultErrorMessage ||
                    JSON.stringify(error);
                return [null, errorMessage];
            });
        };

export default handleError;
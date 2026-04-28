import type { FC } from "react";
import Spinner from "../Spinner/Spinner"; // Assuming Spinner is in a separate file

interface SubmitButtonProps {
    label: string;
    loading?: boolean;
    loadingLabel?: string;
    className?: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({
    label,
    loading = false,
    loadingLabel = "Loading...",
    className = "bg-linear-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white text-sm font-semibold cursor-pointer py-3 px-5 rounded-2xl shadow-lg shadow-cyan-200/40 transition duration-200 ease-in-out transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
}) => {
    return (
        <button
            type="submit"
            disabled={loading}
            className={`${className} ${loading ? 'disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100' : ''}`}
        >
            {loading ? (
                <div className="flex items-center justify-center gap-2">
                    <Spinner size="sm" />
                    <span>{loadingLabel}</span>
                </div>
            ) : (
                label
            )}
        </button>
    );
};

export default SubmitButton;
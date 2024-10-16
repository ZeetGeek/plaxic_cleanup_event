"use client";
import { toast } from "react-toastify";
const Button = () => {
    const notify = () => toast("Wow so easy !");
    return (
        <div>
            <button onClick={notify}>Tost</button>
        </div>
    );
};

export default Button;

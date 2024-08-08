import React from "react";
import { useForm } from "react-hook-form";

function PostForm() {
    const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
        defaultValues: {
            title: "",
        },
    });
    return <div>PostForm</div>;
}

export default PostForm;

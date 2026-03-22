import { useForm } from 'react-hook-form';
import "./PizzaForm.scss";

export default function PizzaForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Register your input and add validation rules */}
            <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="First Name" />
            {errors.firstName && <span>This field is required and max length is 20</span>}

            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder="Last Name" />
            {errors.lastName && <span>Only letters allowed</span>}

            <input type="submit" />
        </form>
    );
}

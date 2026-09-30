import { useForm } from 'react-hook-form';
import "./PizzaForm.scss";
import PizzaCreator from "../pizza-creator/PizzaCreator.tsx";
import PizzaSummary from "../pizza-summary/PizzaSummary.tsx";

export default function PizzaForm() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const { register, handleSubmit, formState: { errors } } = useForm();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="pizza-form">
            <h2>Enter your details</h2>
            <div className="section">
                <div className="input">
                    <label>
                        Name <span className="required">*</span>
                    </label>
                    <input {...register("name", {required: true, maxLength: 20})} type="text" placeholder="John Smith"/>
                </div>
                <div className="input">
                    <label>
                        Email <span className="required">*</span>
                    </label>
                    <input {...register("email", {required: true, maxLength: 20})} type="email" placeholder="Enter your email"/>
                </div>
                <div className="input">
                    <label>
                        Confirm <span className="required">*</span>
                    </label>
                    <input {...register("confirm", {required: true, maxLength: 20})} type="email" placeholder="Confirm your email"/>
                </div>
            </div>

            <div className="section">
                <div className="input">
                    <label>
                        Address <span className="required">*</span>
                    </label>
                    <input {...register("address", {required: true, maxLength: 20})} type="text" placeholder="44 Pizza Street"/>
                </div>
                <div className="input">
                    <label>
                        Postcode <span className="required">*</span>
                    </label>
                    <input {...register("postcode", {required: true, maxLength: 20})} type="text" placeholder="PI3 3AS"/>
                </div>
                <div className="input">
                    <label>
                        Contact Number <span className="required">*</span>
                    </label>
                    <input {...register("phone", {required: true, maxLength: 20})} type="text" placeholder="01234 567 890"/>
                </div>
            </div>

            <PizzaCreator></PizzaCreator>
            <PizzaSummary></PizzaSummary>

        </form>
    );
}

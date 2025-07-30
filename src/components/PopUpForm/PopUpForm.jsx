import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import s from "./PopUpForm.module.css";
import DatePicker from "react-datepicker";
import "./TimePickerStyles.css";
import toast from "react-hot-toast";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    phone: yup.string().required("Phone is required"),
    time: yup
        .date()
        .required("Meeting time is required")
        .typeError("Meeting time is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    comment: yup.string().required("Comment is required"),
});

const PopUpForm = ({onClose}) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = () => {
        toast.success("Successfuly send form");
        onClose();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <div className={s.errorBox}>
                <input {...register("name")} placeholder="Name" className={s.input} />
                {errors.name && <p className={s.error}>{errors.name.message}</p>}
            </div>
            <div className={s.dayTimeBox}>
                <div className={s.errorBox}>
                    <input
                        {...register("phone")}
                        placeholder="+380"
                        className={s.input}
                    />
                    {errors.phone && <p className={s.error}>{errors.phone.message}</p>}
                </div>

                <div className={s.errorBox}>
                    <div className={s.inputWrapper}>
                        <Controller
                            control={control}
                            name="time"
                            render={({ field }) => (
                                <DatePicker
                                    selected={field.value}
                                    onChange={(val) => field.onChange(val)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeCaption="Meeting time"
                                    timeIntervals={30}
                                    dateFormat="HH:mm"
                                    placeholderText="00:00"
                                    className={s.dateInput}
                                />
                            )}
                        />
                        {/* <img src={ClockSvg} alt="Date" className={css.dateSvg} /> */}
                    </div>
                    {errors.time && <p className={s.error}>{errors.time.message}</p>}
                </div>
            </div>

            <div className={s.errorBox}>
                <input {...register("email")} placeholder="Email" className={s.input} />
                {errors.email && <p className={s.error}>{errors.email.message}</p>}
            </div>

            <div className={s.errorBox}>
                <textarea
                    {...register("comment")}
                    placeholder="Comment"
                    rows={4}
                    maxLength={168}
                    className={s.textar}
                />
                {errors.comment && <p className={s.error}>{errors.comment.message}</p>}
            </div>

            <button type="submit" className={s.sendBtn}>
                Send
            </button>
        </form>
    );
};

export default PopUpForm;

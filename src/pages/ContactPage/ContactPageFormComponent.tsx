import React from 'react';
import { useForm } from 'react-hook-form';
import { Spinner } from '../../shared/Icons/Spinner';

export type ContactUsModel = {
    fullName: any;
    email: any;
    message: any;
};

export interface ContactUsFormProps {
    onSubmit: any;
    contactUsModel: ContactUsModel | null;
}

export const ContactPageFormComponent: React.FC<ContactUsFormProps> = (
    props
) => {
    const { contactUsModel, onSubmit } = props;
    const { fullName, email, message } = contactUsModel || {};

    const textRows = 5;
    const maxLengthMessageCount = 2000;
    const { register, handleSubmit, formState } = useForm({
        shouldUseNativeValidation: true,
        mode: 'onSubmit',
        defaultValues: {
            fullName,
            email,
            message,
        },
    });

    return (
        <>
            <div className="container-fluid">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mt-3">
                        <label className="col" htmlFor="fullName">
                            Full name
                        </label>
                        <input
                            className="col-8"
                            id="fullname"
                            {...register('fullName', {
                                required: 'Full name is required.',
                            })}
                        />
                    </div>

                    <div className="row mt-3">
                        <label className="col" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="col-8"
                            id="email"
                            {...register('email', {
                                required: 'Email is required.',
                            })}
                        />
                    </div>

                    <div className="row mt-3">
                        <label className="col" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="col-8"
                            placeholder="Leave your message here, maximum count is 2000"
                            maxLength={maxLengthMessageCount}
                            rows={textRows}
                            id="message"
                            {...register('message', {
                                required: 'Message is required.',
                            })}
                        />
                    </div>
                    <div className="row mt-3">
                        <button
                            type="submit"
                            className="btn btn-dark btn-block mt-2 mb-5"
                            disabled={formState.isSubmitting}
                        >
                            <span className="small">
                                {formState.isSubmitting ? <Spinner /> : 'Save'}
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

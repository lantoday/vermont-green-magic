import React from 'react';
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    const { register, handleSubmit } = useForm({
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
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Container fluid>
                        <Row className="mt-3">
                            <Col>
                                <label htmlFor="fullName">Full name</label>
                            </Col>
                            <Col xs md lg="3">
                                <input
                                    id="fullname"
                                    {...register('fullName', {
                                        required: 'Full name is required.',
                                    })}
                                />
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <label htmlFor="email">Email</label>
                            </Col>
                            <Col xs md lg="3">
                                <input
                                    id="fullname"
                                    {...register('fullName', {
                                        required: 'Full name is required.',
                                    })}
                                />
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <label htmlFor="email">Message</label>
                            </Col>
                            <Col xs md lg="3">
                                <textarea
                                    placeholder="Leave your message here, maximum count is 2000"
                                    maxLength={maxLengthMessageCount}
                                    rows={textRows}
                                    id="message"
                                    {...register('message', {
                                        required: 'Message is required.',
                                    })}
                                />
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <input type="submit" />
                        </Row>
                    </Container>
                </form>
            </div>
        </>
    );
};

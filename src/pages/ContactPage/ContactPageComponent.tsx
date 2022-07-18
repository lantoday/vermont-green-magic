import React from 'react';
import { ContactPageInfoComponent } from './ContactPageInfoComponent';
import { ContactPageFormComponent } from './ContactPageFormComponent';
// import emailjs from '@emailjs/browser';

export interface ContactUsProps {}

export const ContactPageComponent: React.FC = (props) => {
    const sendEmail = async (data: any) => {
        const fullName = data.fullName;
        const email = data.email;
        const message = data.message;

        console.log(
            `Send email(), full name : ${fullName}, email ${email}, message ${message}`
        );

        //TODO need to set up emailjs
        // emailjs
        //     .sendForm(
        //         'YOUR_SERVICE_ID',
        //         'YOUR_TEMPLATE_ID',
        //         form.current,
        //         'YOUR_PUBLIC_KEY'
        //     )
        //     .then(
        //         (result) => {
        //             console.log(result.text);
        //         },
        //         (error) => {
        //             console.log(error.text);
        //         }
        //     );
    };

    return (
        <>
            <div className="p-3">
                <p className="page_title">Contact us</p>
                <div className="container-fluid">
                    <div className="row p-2">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <ContactPageInfoComponent />
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <ContactPageFormComponent
                                {...props}
                                contactUsModel={null}
                                onSubmit={sendEmail}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

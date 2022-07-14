import React from 'react';
import { ContactPageInfoComponent } from './ContactPageInfoComponent';
import { ContactPageFormComponent } from './ContactPageFormComponent';
// import emailjs from '@emailjs/browser';

export interface ContactUsProps {}

export const ContactPageComponent: React.FC = (props) => {
    const sendEmail = (e: any) => {
        // e.preventDefault();

        console.log('send email');

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
                <div className="d-flex flex-wrap justify-content-center w-100">
                    <div className="contactus_item">
                        <ContactPageInfoComponent />
                    </div>
                    <div className="contactus_item">
                        {/* Do I need contact us model here? it suppose to be an empty form */}
                        <ContactPageFormComponent
                            {...props}
                            contactUsModel={null}
                            onSubmit={sendEmail}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

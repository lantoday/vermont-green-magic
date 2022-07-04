import React from 'react';
import sara01 from '../../images/testimonials/sara01.png';
import sara02 from '../../images/testimonials/sara02.png';
import threeTests from '../../images/testimonials/tests.png';
import ginny from '../../images/testimonials/ginny.png';
import kysa from '../../images/testimonials/kysa.png';
import './TestimonialsComponent.scss';

export const TestimonialsComponent: React.FC = () => (
    <>
        <h1>Testimonials</h1>
        <div className="testimonials_container">
            {/* Sara M. */}
            <img
                src={sara01}
                alt="Sara M's comment"
                className="image_comment"
            ></img>

            <p className="story_title">Sara M.’s Amazing Story</p>
            <div className="story_container">
                <p className="text-start">
                    Sara M. from Massachusetts bought our Vermont Green Magic
                    CBD oil for her dog Sam, a German Shepherd with hip
                    dysplasia. She found that the oil helped make his back legs
                    much more comfortable while relieving his anxiety, and was
                    so happy about this turn of events that she offered the oil
                    to her grandmother, whose knee pain kept her from getting a
                    good night’s sleep. Sara told us that the oil worked so well
                    that at first her grandmother thought it was a fluke. She
                    has been using the oil regularly and is not only sleeping
                    better, but her knees aren’t cramping painfully any longer.
                </p>
                <br />
                <p className="text-start">
                    Sara was so impressed that she wanted her aunt and uncle to
                    try our oil drops too. After explaining to them what CBD is
                    all about, Sara gave them a bottle of Vermont Green Magic’s
                    Therapeutic Oil Drops. This is what she wrote to us:
                </p>
                <br />
                <p className="text-start fw-bold">
                    “I wanted you to know that my aunt and uncle are now huge
                    believers! My uncle is in his 70’s and is feeling and doing
                    things like Father Time has turned back the clocks! He first
                    took a ¼ dropperful at bedtime, and the next day he went on
                    a walk for the first time in a long time and walked farther
                    than he has before. He did the dishes and a few other
                    things, and I can picture my aunt’s jaw on the floor. These
                    were almost unachievable for him to do weekly, never mind in
                    one day! There were times when he felt not very helpful, but
                    now it’s like he’s 20 years younger. My uncle is a new man –
                    happy because he doesn’t hurt anymore. It’s an amazing thing
                    to see!”
                </p>
                <br />
                <p className="text-start fw-bold">
                    “My aunt has terrible arthritis and back pain and the oil
                    also helps her a great deal. Her friend tried it and wants
                    to order a bottle too. We can never thank you enough! You
                    have made their quality of life so much better. You have an
                    amazing gift to share, better than gold, my friends. We are
                    blessed.”
                </p>
                <br />
                <img
                    src={sara02}
                    alt="Sara M' and her dog"
                    className="image_dog"
                ></img>
                <p>Sara M. with her dog Sam</p>
            </div>
            <br />
            {/* Three tests */}
            <img
                src={threeTests}
                alt="Sara M's comment"
                className="image_comment"
            ></img>
            <br />
            <br />
            <br />
            <div className="story_container">
                <p className="text-start">
                    Johnathan C. in California had been battling Parkinson’s
                    disease for several years, before he discovered CBD. He
                    brought a bottle of Vermont Green Magic Therapeutic Oil to
                    his doctor before starting to take it, and wrote this email
                    to us after his appointment:
                </p>
                <br />
                <p className="text-start fw-bold">
                    “I just wanted to let you know that I took the double
                    strength bottle to be tested by the doctor who does my stem
                    cell treatments. She has a special device that she uses to
                    test all the supplements I take, and she confirmed that the
                    oil is an excellent addition to my supplement regime.”
                </p>
            </div>
            {/* Ginny R. */}
            <br />
            <img
                src={ginny}
                alt="Sara M's comment"
                className="image_comment"
            ></img>
            <br />
            <br />
            <br />
            <div className="story_container">
                <p className="text-start">
                    From customer Jeff L. in Connecticut:
                </p>
                <br />
                <p className="text-start fw-bold">
                    “My wife and I have been aware of the many benefits of CBD
                    oil for quite some time. In fact, our principal care
                    physician endorsed its use for the treatment of chronic
                    pain! The problem we faced was finding sources that were
                    reasonably priced, but more importantly, safe. I was
                    introduced to Vermont Green Magic Products through a friend
                    and we have been regular customers for over two years. We
                    have been thoroughly satisfied with the quality of their
                    products and would recommend them to anyone considering
                    CBD!”
                </p>
            </div>
            {/* Kysa D. */}
            <br />
            <img
                src={kysa}
                alt="Sara M's comment"
                className="image_comment"
            ></img>
        </div>
    </>
);

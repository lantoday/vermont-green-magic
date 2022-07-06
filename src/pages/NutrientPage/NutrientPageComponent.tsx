import React from 'react';
import grow01 from '../../images/nutrientInfo/early.png';
import grow02 from '../../images/nutrientInfo/late.png';

export const NutrientPageComponent: React.FC = () => (
    <>
        <p className="page_title">Nutrient and Growing Info</p>
        <div className="mw-100 p-2">
            <p className="fs-5 lh-lg text-start">
                Here are two easy, tried and true feeding schedules that have
                produced fantastic results for our plants:
            </p>
            <img
                src={grow01}
                alt="grow chart early"
                className="w-100 p-2"
            ></img>
            <br />
            <br />
            <img src={grow02} alt="grow chart late" className="w-100 p-2"></img>
            <br />
            <br />
            <div>
                <p className="text-start fw-bold lh-lg fs-5 text-decoration-underline">
                    Planting Outdoors
                </p>
                <p className="text-start lh-lg fs-5">
                    To ensure unobstructed lateral root growth, break up and
                    remove a 3 foot wide circle of the top layer of soil onto a
                    tarp or other container. Break up subsoil at least one foot
                    deep. Add 1/2 of a bag of our 20 quart Deep Woods Super Mix
                    soil and mix well, then add second half to topsoil and mix
                    again, then refill the hole. Wait a few days before planting
                    to allow for chipmunks, skunks, and other critters to check
                    out the hole, so they won’t dig up your plant when they
                    inevitably come to investigate the freshly tilled earth (we
                    learned the hard way!). Once your plant is in the ground, do
                    not over water or over food.
                </p>
            </div>
            <br />
            <br />
            <div>
                <p className="text-start fw-bold lh-lg fs-5 text-decoration-underline">
                    What is Mineral Bliss Plant Ferment?
                </p>
                <p className="text-start lh-lg fs-5">
                    Mineral Bliss Plant Ferment starts with sun-drenched plants,
                    harvested at the height of summer and full of chlorophyll
                    and vigorous summer growth. Silica-rich stinging nettles,
                    deep-rooted white clover, yarrow, and plantain are some of
                    the plants we use for their many growth-enhancing and
                    bio-stimulating properties. After adding large amounts of
                    kelp, we allow it all to slow-brew in fresh spring water.
                </p>
                <br />
                <p className="text-start lh-lg fs-5">
                    The chlorophyll in our Mineral Bliss Plant Ferment acts like
                    a healthy green drink and further boosts the plants’
                    resistance to pests and diseases. The broken-down kelp
                    provides broad spectrum micro-nutrients, enzymes, amino
                    acids, and growth-stimulating hormones that activate
                    vigorous root growth and overall plant vigor.
                </p>
                <br />
                <p className="text-start lh-lg fs-5">
                    We’ve found Mineral Bliss Plant Ferment so good that we’ve
                    added it to all of our nutrient formulas, not to mention our
                    wildly popular Deep Woods Super Mix enhanced growing medium!
                </p>
            </div>
            <br />
            <br />
            <div>
                <p className="text-start fw-bold lh-lg fs-5 text-decoration-underline">
                    What is Deep Woods Compost Tea?
                </p>
                <p className="text-start lh-lg fs-5">
                    It starts with mineral-packed wood chips, repeating flushes
                    of mushrooms and multiple generations of earthworm colonies,
                    all working to become a richly decomposed mix of broken down
                    cellulose, microbes, castings, and mycorrhizae. After 2
                    years of this process, what’s left is a crumbly, dark brown,
                    sweet-smelling and bioactive medium. Allowed to soak and
                    ferment, this rich tea becomes the foundation of our Deep
                    Woods Brew and Bloom Dazzler plant nutrients.
                </p>
                <br />
                <p className="text-start lh-lg fs-5">
                    The earthworm castings in Deep Woods Compost Tea provide a
                    perfect balance of N-P-K. Heavily concentrated humic acids
                    help support plant health and immunity, plus increase
                    nutrient and mineral uptake. This enhances growth, which in
                    turn enhances yields – the more nutrients a plant can take
                    up, the bigger the plant gets.
                </p>
            </div>
            <br />
            <br />
            <div>
                <p className="text-start fw-bold lh-lg fs-5 text-decoration-underline">
                    Mealworm Frass
                </p>
                <p className="text-start lh-lg fs-5">
                    Our Bloom Dazzler, Deep Woods Brew, and Deep Woods Super Mix
                    growing products are supplementally enriched with mealworm
                    frass, locally raised several towns over from us by the good
                    folks at Vermont Mealworm Farm. In our trials, we were very
                    impressed with the boost in vigor and vitality that our
                    plants showed after adding the frass. We also observed
                    greater upward growth with a stronger supporting and
                    branching framework. The chitin in the frass combined with
                    the silica from our Mineral Bliss Plant Ferment aided our
                    plants in creating stronger cell walls. Stronger cell walls
                    make for stronger branches, which are then able to support
                    huge crops!
                </p>
            </div>
        </div>
    </>
);

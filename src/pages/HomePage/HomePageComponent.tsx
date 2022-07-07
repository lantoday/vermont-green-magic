import React from 'react';
import { CarouselComponent } from './CarouselComponent';
import { ContentComponent } from './ContentComponent';

export const HomePageComponent: React.FC = () => (
    <>
        <div className="p-2">
            <CarouselComponent />
            <br />
            <ContentComponent />
        </div>
    </>
);

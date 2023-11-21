import React from 'react';
import Title from '../Layouts/Title';
import {
    staffconn,
    the_venue,
    landing,
    amazon,
    restaurant,
    travel,
} from '../../assets/index';

import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    className="fit-contain"
                    title="STAFFCONN"
                    des="A social media Fullstack website where users can post gif and articles with comments and likes"
                    src={staffconn}
                    gitRepo="https://github.com/goodnessaig1/TeamWork-Frontend"
                    live="https://deploy-preview-23--bright-hotteok-98a99b.netlify.app/"
                />
                <ProjectsCard
                    title="Amazone Clone"
                    des="This is a Fullstack E-commerce website where users can purchase varitey of items ranging from electronics, computer, fashion items, health care products"
                    src={amazon}
                    gitRepo="https://github.com/goodnessaig1/amazon_clone_frontend"
                    live="https://amazon-clone-g.vercel.app/ "
                />
                <ProjectsCard
                    title="The Avenu"
                    des="This is an app for an event, like a party that contains the countdown to the main event"
                    src={the_venue}
                    gitRepo="https://github.com/goodnessaig1/The_venue_events"
                    live="https://arrogant-offer.surge.sh/"
                />
                <ProjectsCard
                    title="Landing Page"
                    des="Landing page for a site where you can search for hotels and book them for a nignt or months"
                    src={landing}
                    gitRepo="https://github.com/goodnessaig1/first-landing-projectII"
                    live="http://gentle-cars.surge.sh/"
                />
                <ProjectsCard
                    title="Goody Restaurant"
                    des="This is a responsive restaurant website where users can view our food menu, view our special list and also see our awards"
                    src={restaurant}
                    gitRepo="https://github.com/goodnessaig1/goody-restaurant"
                    live="https://goody-restaurant.vercel.app/"
                />
                <ProjectsCard
                    title="Travel App"
                    des=" This is a website to book places for aventure, picnics or tourist visit"
                    src={travel}
                    gitRepo="https://github.com/goodnessaig1/Travel-Website"
                    live="https://travel-website-lime-three.vercel.app/"
                />
            </div>
        </section>
    );
};

export default Projects;

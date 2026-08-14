import React from 'react';
import Title from '../Layouts/Title';
import {
    staffconn,
    the_venue,
    landing,
    amazon,
    restaurant,
    travel,
    gruve,
    expressodds,
    flypro,
    lenvor,
    manorr,
    venstoc,
    yummyyou,
    texis,
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
                    title="Gruve events"
                    des="Gruve events is a ticketing platform that allows event hosts to create an event with tickets that can be free or paid. Attendees can pay for events, register for tickets and all."
                    src={gruve}
                    gitRepo=""
                    live="https://www.gruve.events/"
                />
                <ProjectsCard
                    className="fit-contain"
                    title="Venstoc - Mobile App"
                    des="SaaS platform that enables businesses to manage product inventory, sales, services, and invoices. I worked across the mobile application, backend, and DevOps for this product."
                    src={venstoc}
                    gitRepo=""
                    live="https://apps.apple.com/ng/app/venstoc/id6791424852"
                />
                <ProjectsCard
                    className="fit-contain"
                    title="Expressodds"
                    des="Expressodds is a betting platform that allows users view betslips or rollovers, purchase tips either free or paid, get refunded for lost bets. It also gives tipsters the ability to make money from won predictions"
                    src={expressodds}
                    gitRepo="https://github.com/efosdan/expressodds"
                    live="https://www.expressodds.net/"
                />
                <ProjectsCard
                    className="fit-contain"
                    title="Lenvor - Mobile App"
                    des="Lenvor is a SaaS learning management application designed for students and learners. It provides course management, learning resources, quizzes, and AI-generated assessments."
                    src={lenvor}
                    gitRepo=""
                    live="https://play.google.com/store/apps/details?id=com.texishq.lenvor"
                />
                <ProjectsCard
                    className="fit-contain"
                    title="Texis"
                    des="A modern, responsive landing page for Texis built with best practices in front-end development to showcase products and services."
                    src={texis}
                    gitRepo=""
                    live="https://texishq.com/"
                />
                <ProjectsCard
                    className="fit-contain"
                    title="FlyPro"
                    des="FlyPro is an Ai-powered travel companion-simplified website."
                    src={flypro}
                    gitRepo=""
                    live="https://www.flypro.io/"
                />
                <ProjectsCard
                    className="fit-contain"
                    title="Manorr - Mobile App"
                    des="An estate management and security application designed to help estates manage residents, visitors, and security operations. I contributed to the application development and deployment."
                    src={manorr}
                    gitRepo=""
                    live="https://play.google.com/store/apps/details?id=org.sydani.manorr"
                />
                <ProjectsCard
                    className="fit-contain"
                    title="STAFFCONN"
                    des="A social media Fullstack website where users can post gif and articles with comments and likes"
                    src={staffconn}
                    gitRepo="https://github.com/goodnessaig1/TeamWork-Frontend"
                    live="https://deploy-preview-23--bright-hotteok-98a99b.netlify.app/"
                />
                <ProjectsCard
                    className="fit-contain"
                    title="YummyYou - Mobile App"
                    des="A mobile application I worked on, demonstrating my experience across the full product development lifecycle."
                    src={yummyyou}
                    gitRepo=""
                    live="https://apps.apple.com/ng/app/yummyyou/id6744980001"
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
            </div>
        </section>
    );
};

export default Projects;

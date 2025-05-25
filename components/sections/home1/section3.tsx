'use client'
import Link from 'next/link'
import { useState } from "react"

// Reusable EventCard Component
interface EventCardProps {
    imgSrc: string;
    time: string;
    location: string;
    title: string;
    description: string;
    link: string;}

const EventCard: React.FC<EventCardProps> = ({ imgSrc, time, location, title, description, link }) => (
    <div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={800}>
        <div className="row align-items-center">
            <div className="col-lg-4">
                <div className="img1">
                    <img src={imgSrc} alt={`Event image for ${title}`} />
                </div>
            </div>
            <div className="col-lg-8">
                <div className="content-area">
                    <ul>
                        <li>
                            <Link href="/#">
                                <img src="/assets/img/icons/clock1.svg" alt="Clock icon" /> {time} <span> | </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#">
                                <img src="/assets/img/icons/location1.svg" alt="Location icon" /> {location}
                            </Link>
                        </li>
                    </ul>
					<div className="space20" />
                    <Link href={link} className="head">{title}</Link>
                    <div className="space16" />
                    <p>{description}</p>
                    <div className="space32" />
                    <div className="btn-area1">
                        <Link href="/pricing-plan" className="vl-btn1">Purchase Ticket Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default function Section3() {
    return null; // Removed the entire Event Schedule Plan section
}

import React from "react";
import AboutSection from "../sections/AboutSection";
import About2Section from "../sections/About2Section";
import HomeSection from "../sections/HomeSection";
import CauseSection from "../sections/CauseSection";
import HowCanHelpSection from "../sections/HowCanHelpSection";
import DonationSection from "../sections/DonationSection";
import BecomeVolunteer from "../sections/BecomeVolunteer";
import CompletedProjectSection from "../sections/CompletedProjectSection";
import VolunteerSection from "../sections/VolunteerSection";
import GallerySection from "../sections/GallerySection";
import BlogSection from "../sections/BlogSection";
import ClientSection from "../sections/ClientSection";

export default function MainContent() {
  return (
    <div className="main-content">
      <HomeSection />
      <AboutSection />
      <About2Section />
      <CauseSection />
      <HowCanHelpSection />
      <DonationSection />
      <BecomeVolunteer />
      <CompletedProjectSection />
      <VolunteerSection />
      <GallerySection />
      <BlogSection />
      <ClientSection />
    </div>
  );
}

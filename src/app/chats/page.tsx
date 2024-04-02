"use client";
import React from "react";
import { HoverEffect } from "../../Components/ui/card-hover-effect";

 function page() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-12">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Respect and Civility",
    description:
      "Treat all users with respect and maintain a civil tone during conversations. Avoid using offensive language, making derogatory remarks, or engaging in disrespectful behavior.",
  },
  {
    title: "No Harassment or Bullying",
    description:
      "Harassment, bullying, or any form of intimidation is strictly prohibited. This includes but is not limited to personal attacks, threats, stalking, or unwanted solicitation of personal information.",
   
  },
  {
    title: "Keep Conversations Appropriate",
    description:
      "Ensure that conversations remain appropriate for all users, regardless of age or background. Avoid discussing explicit or inappropriate topics.",
   
  },
  {
    title: "Privacy and Security",
    description:
      "Respect the privacy and security of others. Do not share personal information such as full name, address, phone number, email address, or social media accounts during conversations. ",
    
  },
  {
    title: "Consent and Boundaries",
    description:
      " Always obtain consent before engaging in any form of interaction, such as screen sharing, exchanging contact information, or switching to a private chat. ",
   
  },
  {
    title: "Report Suspicious Behavior",
    description:
      "If you encounter any suspicious or inappropriate behavior, report it immediately to the website administrators or moderators. ",
   
  },
];
export default page
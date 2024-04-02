import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      title: "Convenient pickup and drop-off options",
      content:
        "Select from our convenient pickup or drop-off options. Schedule a pickup for larger items or choose a nearby drop-off point for smaller devices.",
    },
    {
      title: "Diverse payment methods",
      content:
        "Our platform offers diverse payment methods, including credit/debit cards, mobile wallets, and bank transfers, ensuring seamless transactions and accommodating users' preferences for convenience and accessibility.",
    },
    {
      title: "Instant valuation algorithm",
      content:
        "Our instant valuation algorithm swiftly determines the value of electronic devices, considering factors like model, condition, and market demand, ensuring fair and transparent assessments for users.",
    },
    {
      title: "Secure data destruction services",
      content:
        "Our secure data destruction services guarantee comprehensive and reliable eradication of sensitive information from electronic devices, ensuring compliance with data protection regulations and safeguarding confidentiality for businesses and individuals.",
    },
    {
      title: "Environmental impact report",
      content:
        "Our environmental impact report succinctly outlines our efforts to minimize ecological footprint and enhance sustainability practices, aligning with regulatory standards and corporate responsibility goals.",
    },
  ];
  return (
    <div className="flex items-center justify-between">
      <div className="w-1/2">
        <Accordion type="single" collapsible>
          {features.map((feature, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger>{feature.title}</AccordionTrigger>
              <AccordionContent>{feature.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div>
        <Image
          src="/assets/images/image.png"
          alt="Accessibility image"
          height={600}
          width={500}
        />
      </div>
    </div>
  );
};

export default Features;

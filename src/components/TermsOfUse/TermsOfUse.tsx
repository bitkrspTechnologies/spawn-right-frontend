"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 sm:px-6 lg:px-8 mt-16">
      <div className="bg-black/50 rounded-xl shadow-md p-6 md:p-8 min-h-[70vh] overflow-y-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white">Terms of Use</h1>
          <p className="mt-2 text-gray-400">Effective May 15, 2025</p>
        </div>

        <Accordion defaultValue={["item-1"]}>
          <AccordionItem value="item-1">
            <AccordionHeader customIcon>
              1. Acceptance of Terms{" "}
              <Plus className="group-data-[active]:rotate-45 transition-transform" />
            </AccordionHeader>
            <AccordionPanel>
              By using Spawn Right, you acknowledge that you have read,
              understood, and agreed to be bound by these Terms of Use and our
              Privacy Policy. If you do not agree, please do not use the
              platform.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionHeader customIcon>
              2. Use of the Platform{" "}
              <Plus className="group-data-[active]:rotate-45 transition-transform" />
            </AccordionHeader>
            <AccordionPanel>
              You agree to use Spawn Right only for lawful purposes. You may
              not: Use our services to post, transmit, or distribute any content
              that is defamatory, obscene, or infringing on others rights.
              Attempt to disrupt or compromise the security of the platform.
              Copy, reproduce, or exploit any part of our website without our
              express written consent.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionHeader customIcon>
              3. Intellectual Property{" "}
              <Plus className="group-data-[active]:rotate-45 transition-transform" />
            </AccordionHeader>
            <AccordionPanel>
              All content on Spawn Right including logos, graphics, statistics,
              articles, player rankings, and tournament data is our intellectual
              property or licensed to us. Unauthorized use is prohibited.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionHeader customIcon>
              4. User-Generated Content{" "}
              <Plus className="group-data-[active]:rotate-45 transition-transform" />
            </AccordionHeader>
            <AccordionPanel>
              Users may submit content (e.g., comments, match predictions,
              community interactions). By submitting, you: Grant Spawn Right a
              non-exclusive, royalty-free license to use, publish, and display
              your content. Confirm that your content does not infringe upon any
              third-party rights.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionHeader customIcon>
              5. Third-Party Links{" "}
              <Plus className="group-data-[active]:rotate-45 transition-transform" />
            </AccordionHeader>
            <AccordionPanel>
              Spawn Right may link to third-party websites (e.g., YouTube,
              Discord, sponsor sites). We are not responsible for the content or
              privacy practices of those sites.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionHeader customIcon>
              6. Termination{" "}
              <Plus className="group-data-[active]:rotate-45 transition-transform" />
            </AccordionHeader>
            <AccordionPanel>
              We reserve the right to terminate access to any user who violates
              these terms without prior notice.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionHeader customIcon>
              7. Modifications{" "}
              <Plus className="group-data-[active]:rotate-45 transition-transform" />
            </AccordionHeader>
            <AccordionPanel>
              Spawn Right reserves the right to modify these Terms at any time.
              Updated versions will be posted on this page.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionHeader customIcon>
              8. Governing Law{" "}
              <Plus className="group-data-[active]:rotate-45 transition-transform" />
            </AccordionHeader>
            <AccordionPanel>
              These Terms are governed by the laws of India. Any disputes shall
              be subject to the exclusive jurisdiction of the courts in Mumbai,
              Maharashtra.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
};

export default TermsAndConditions;

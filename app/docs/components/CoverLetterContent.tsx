'use client';

import React from 'react';

export default function CoverLetterContent() {
  return (
    <div className="space-y-6 prose prose-invert max-w-none">
      <h2 className="text-center text-3xl font-bold">[Applicant Letterhead]</h2>
      <p>April 20, 2025</p>
      <p>
        Hawaii Community Development Authority<br />
        547 Queen Street<br />
        Honolulu, HI 96813
      </p>
      <p>
        <strong>RE: Commercial Event Permit Application - ZAMNA Hawaii 2026</strong>
      </p>
      <p>Dear HCDA Board Members and Staff:</p>
      <p>
        On behalf of Zamna Events LLC, I am pleased to submit this application for a Commercial Event Permit to host the inaugural ZAMNA Hawaii 2026 festival at Kakaʻako Waterfront Park on October 3, 2026 (with October 4, 2026 as a backup date in case of inclement weather).
      </p>
      <p>
        ZAMNA Hawaii 2026 will be a one-day electronic dance music (EDM) festival that celebrates the unique cultural and natural beauty of Hawaii while providing a world-class entertainment experience. Our event will feature international and local artists, sustainable practices, and significant economic benefits for the local community.
      </p>
      <h3 className="text-xl font-bold mt-6">Event Overview</h3>
      <ul>
        <li><strong>Date:</strong> October 3, 2026 (Primary) / October 4, 2026 (Backup)</li>
        <li><strong>Hours:</strong> 2:00 PM - 10:00 PM</li>
        <li><strong>Expected Attendance:</strong> 5,000 attendees</li>
        <li><strong>Target Demographic:</strong> 25-45 year old professionals, both residents and visitors</li>
      </ul>
      <h3 className="text-xl font-bold mt-6">Community Benefits</h3>
      <p>
        ZAMNA Hawaii 2026 will provide numerous benefits to the local community, including:
      </p>
      <ul>
        <li>Economic impact of approximately $2.5 million through direct spending</li>
        <li>Creation of 200+ temporary jobs for local residents</li>
        <li>Partnerships with 20+ local food and merchandise vendors</li>
        <li>Showcase platform for local artists alongside international headliners</li>
        <li>Promotion of Hawaii as a cultural destination to a global audience</li>
        <li>Implementation of industry-leading sustainability practices</li>
      </ul>
      <h3 className="text-xl font-bold mt-6">Commitment to Responsible Event Management</h3>
      <p>
        Our team is committed to ensuring that ZAMNA Hawaii 2026 is executed with the highest standards of safety, environmental stewardship, and community respect. We have developed comprehensive plans for:
      </p>
      <ul>
        <li>Traffic management and shuttle services to minimize local impact</li>
        <li>Noise mitigation strategies to respect neighboring communities</li>
        <li>Waste management targeting 90% diversion from landfill</li>
        <li>Security and medical services exceeding industry standards</li>
        <li>Post-event park restoration and cleaning</li>
      </ul>
      <p>
        Enclosed with this application, you will find our complete event plan, including site layouts, security plans, insurance certificates, and all other required documentation. Our team has extensive experience producing similar events internationally, and we are committed to working closely with HCDA and all relevant agencies to ensure a successful and compliant event.
      </p>
      <p>
        We believe that ZAMNA Hawaii 2026 aligns perfectly with HCDA&apos;s mission to create vibrant communities while respecting the cultural and environmental significance of Kakaʻako. We look forward to the opportunity to bring this world-class event to Hawaii and to establishing a long-term relationship with HCDA and the local community.
      </p>
      <p>
        Thank you for your consideration of our application. Please feel free to contact me directly with any questions or requests for additional information.
      </p>
      <p className="mt-8">
        Sincerely,<br /><br /><br />
        [Signature]<br />
        Yuki Hamada<br />
        Event Director, ZAMNA Hawaii 2026<br />
        Phone: (808) 555-1234<br />
        Email: yuki@zamnahawaii.com
      </p>
      <div className="border-t border-gray-600 pt-4 mt-8">
        <p className="text-sm">
          <strong>Enclosures:</strong> Commercial Event Permit Application, Site Plan, Security Plan, Insurance Certificate, Noise Mitigation Plan, Traffic Management Plan, Waste Management Plan
        </p>
      </div>
    </div>
  );
}
import React, { useEffect } from "react";

const VisaRequirements = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
  return (
    <div className="visa-requirements container my-5 py-4">
      <h3 className="mb-4 ">Visa Requirements for Traveling to India</h3>

      <h4 className="mb-3 h5">1. Types of Visas Available</h4>
      <ul className="mb-4">
        <li className="fs-6">
          <strong>Tourist Visa</strong> - This visa is for individuals visiting
          India for leisure, sightseeing, or visiting family and friends. It is
          typically valid for 30 days, 6 months, or 1 year, depending on your
          nationality.
        </li>
        <li className="fs-6">
          <strong>E-Visa</strong> - Eligible travelers can apply for an e-Visa
          online, which is valid for short-term tourism. E-Visas are available
          for 30 days, 1 year, or 5 years, and must be applied for before your
          trip.
        </li>
        <li className="fs-6">
          <strong>Business Visa</strong> - If you're traveling to India for
          business purposes, you'll need a Business Visa, which is usually valid
          for up to 1 year.
        </li>
        <li className="fs-6">
          <strong>Medical Visa</strong> - This visa is for individuals seeking
          medical treatment in India. It can be granted for the duration of
          treatment plus an additional period for recovery.
        </li>
      </ul>

      <h4 className="mb-3 h5">2. How to Apply for a Visa</h4>
      <ul className="mb-4">
        <li className="fs-6">
          <strong>Online Application</strong> - For e-Visas, you can apply
          through the official Indian government visa website. Fill out the
          application form, upload required documents, and pay the fee.
        </li>
        <li className="fs-6">
          <strong>Embassy/Consulate</strong> - For other visa types, visit the
          nearest Indian Embassy or Consulate. You will need to complete a visa
          application form, provide supporting documents, and pay the applicable
          fee.
        </li>
      </ul>

      <h4 className="mb-3 h5">3. Required Documents</h4>
      <ul className="mb-4">
        <li className="fs-6">
          A valid passport with at least six months’ validity beyond your
          intended stay.
        </li>
        <li className="fs-6">Recent passport-sized photographs.</li>
        <li className="fs-6">Proof of travel itinerary (flight bookings).</li>
        <li className="fs-6">Accommodation details (hotel bookings).</li>
        <li className="fs-6">
          Financial proof (bank statements) to show sufficient funds for your
          stay.
        </li>
        <li className="fs-6">Additional documents may be required based on the visa type.</li>
      </ul>

      <h4 className="mb-3 h5">4. Visa Processing Time</h4>
      <ul className="mb-4">
        <li className="fs-6">
          <strong>E-Visa</strong> - Typically processed within 72 hours, but
          it’s best to apply at least 4-7 days before your travel date.
        </li>
        <li className="fs-6">
          <strong>Regular Visa</strong> - Processing times may vary depending on
          the Embassy or Consulate, usually ranging from 3 to 10 business days.
        </li>
      </ul>

      <h4 className="mb-3 h5">5. Important Tips</h4>
      <ul className="mb-4">
        <li className="fs-6">
          Apply for your visa well in advance of your trip to avoid any
          last-minute issues.
        </li>
        <li className="fs-6">
          Ensure all information on your application is accurate to prevent
          delays or rejections.
        </li>
        <li className="fs-6">
          Keep copies of all documents submitted and received for your records.
        </li>
      </ul>

      <h4 className="mb-3 h5">6. Visa Extensions</h4>
      <p className="fs-6">
        If you need to extend your stay in India, you can apply for an extension
        at the Foreigners Regional Registration Office (FRRO) in India. Be sure
        to do this before your current visa expires.
      </p>
    </div>
  );
};

export default VisaRequirements;

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'

const AccountingAutomation = ({ id }: { id?: string }) => {
  return (
    <div
      id={id}
      className="min-h-[600px] container-padding py-20 bg-[#f3f3f3] scroll-mt-20"
    >
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="flex-1 flex flex-col gap-3 md:px-4">
          <h1 className="text-3xl md:text-4xl poppins-bold mb-5 text-[#1b4962]">
            Accounting System Automation
          </h1>
          <p>
            Automating your accounting system offers transformative benefits
            that drive efficiency, accuracy, and strategic insight. By
            automating routine tasks such as invoice processing, bank
            reconciliations, transaction recording, expense tracking, and
            financial reporting, businesses can significantly reduce manual
            errors, accelerate financial close cycles, and ensure greater
            consistency in their financial data. Automation not only improves
            day-to-day operations but also strengthens your ability to scale and
            adapt in a competitive business environment.
          </p>
          <p>
            At NovaHills Consulting, we assess your current financial workflows
            to recommend and implement the most suitable accounting software
            that aligns with your business needs. Our technology stack includes
            leading software such as Zoho Books, QuickBooks Online, Sage
            Accounting, Xero and Tally ERP.
          </p>
          <p>
            {" "}
            These tools facilitate the seamless automation of core accounting
            processes, including invoicing, expense tracking, bank
            reconciliations, transaction recording, payroll management, and
            financial reporting.
          </p>
          <span>
            Our team also provides hands-on training and ongoing support to
            equip your staff with the knowledge they need to ensure a smooth
            transition to a more efficient system.
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-5 text-center items-center">
          <Image
            src="https://res.cloudinary.com/dk5mfu099/image/upload/v1760727247/a-man-makes-the-word-acronym-abbreviation-cfo-chief-financial-officer-financial-management-in_a5v0ua.jpg"
            width={500}
            height={500}
            alt=""
            className="object-cover w-full md:h-[400px]"
          />
          <h2>
            Transform your financial operations with automation. Schedule a
            consultation to explore the ideal accounting system tailored to your
            business needs.
          </h2>
          <Button className="uppercase">Contact us</Button>
        </div>
      </div>
    </div>
  );
}

export default AccountingAutomation
import HeroSection from "@/components/hero-section";
import { businessRegistrationData, cfoData, outsourcedAccountData, supplyChainData } from "@/data";
import AccountingAutomation from "@/feature/service-section/accounting-automation";
import Servicecomponent from "@/feature/service-section/service-component";
import ServicecomponentBeta from "@/feature/service-section/service-component-beta";
import ServiceContentOne from "@/feature/service-section/service-section-one";
import React from "react";

export default function ServicePage() {
  const url =
    "https://res.cloudinary.com/dk5mfu099/image/upload/v1760704322/financial-audit-financial-management-business-account-tax-report-auditor-use-laptop-with_b72eno.jpg";
  console.log("service page rendered", cfoData);
  return (
    <div>
      <HeroSection title="Services" url={url} />
      <ServiceContentOne />
      <Servicecomponent
        id="fractional-cfo-service"
        title="Fractional CFO Services"
        desc="Access expert financial leadership on a part-time basis. Engaging a Fractional CFO is a smart, cost-effective way to gain high-level financial expertise exactly when you need it. This flexible solution adapts to your business growth, providing strategic planning, cash flow optimization, budgeting, and detailed financial reporting tailored to help you make informed decisions."
        subTitle="Our CFO services offer strategic financial leadership, which includes:"
        data={cfoData}
        param="Need expert financial leadership without hiring full-time? Book a consultation with one of our Fractional CFOs and take the first step toward smarter financial advisory"
        imgUrl={
          "https://res.cloudinary.com/dk5mfu099/image/upload/v1760704322/financial-audit-financial-management-business-account-tax-report-auditor-use-laptop-with_b72eno.jpg"
        }
      />
      <ServicecomponentBeta
        id="outsourced-accounting"
        title="Outsourced Accounting Services"
        desc="Let our expert accountants manage your day-to-day financial operations by handling your bookkeeping, payroll, financial reporting, and tax filings. We leverage advanced accounting software to keep your finances seamless, accurate, and fully compliant. Experience reliable accounting services, delivered by professionals."
        subTitle="Our services include:"
        data={outsourcedAccountData}
        param="Let us handle the numbers! Contact us today for accurate, timely, and compliant accounting services"
        imgUrl={
          "https://res.cloudinary.com/dk5mfu099/image/upload/v1760612977/woman-showing-tablet-to-serious-man_aehxcd.jpg"
        }
      />
      <AccountingAutomation id="accounting-system-automation" />
      <ServicecomponentBeta
        id="company-registration-compliance"
        title="Business Registration and Compliance"
        desc="We manage the entire business setup process from name reservation and legal incorporation to tax registration and regulatory compliance, so you can launch your business smoothly and with confidence."
        subTitle="We simplify your business setup with:"
        data={businessRegistrationData}
        param="Launch your business the right way. Connect with us to get your company registered quickly and hassle-free."
        imgUrl={
          "https://res.cloudinary.com/dk5mfu099/image/upload/v1760612977/woman-showing-tablet-to-serious-man_aehxcd.jpg"
        }
      />
      <Servicecomponent
        id="supply-chain-management"
        title="Supply Chain Management"
        desc="Streamline and optimize your supply chain with our comprehensive, end-to-end solutions. From strategic vendor sourcing and precise inventory planning to seamless logistics coordination, we ensure your operations run smoothly with on-time delivery and cost-effective processes."
        subTitle="Our key supply chain solutions include:"
        data={supplyChainData}
        param="Start your journey to smarter supply chain management. Connect with us to tailor solutions that keep your business moving forward."
        imgUrl={
          "https://res.cloudinary.com/dk5mfu099/image/upload/v1760612977/woman-showing-tablet-to-serious-man_aehxcd.jpg"
        }
      />
    </div>
  );
}

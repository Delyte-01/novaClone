interface coreValueTypes {
  id: number;
  title: string;
  subTitle: string;
  text: string;
}
interface ChooseArryTypes {
  title: string;
  text: string;
}

interface FAQTypes {
  question: string;
  answer: string;
}
interface CFODataTypes
{
  title: string;
  desc: string;
}
export const coreValues: coreValueTypes[] = [
  {
    id: 1,
    title: "Fractional CFO Services",
    subTitle: "Strategic Financial Leadership Without the Full-Time Cost",
    text: "Our Fractional CFO services offer executive-level financial guidance tailored to your growth stage and goals. Gain the strategic insight of a CFO without the expense of a full-time hire.",
  },
  {
    id: 2,
    title: "Outsourced Accounting Services",
    subTitle: "Reliable and Scalable End-to-End Accounting Support",
    text: "Let our experts manage your books with precision. Our outsourced accounting solutions are tailored to fit your operations, ensuring accuracy, timeliness, and compliance",
  },
  {
    id: 3,
    title: "Accounting System Automation",
    subTitle: "Streamline Your Finance Operations with Smart Automation",
    text: "Transform your manual accounting processes into a tech-enabled and efficient workflow. Our team assesses your current systems and implements solutions that save time and reduce errors.",
  },
  {
    id: 4,
    title: "Business Registration and Compliance",
    subTitle: "Start Your Business Right, from Day One",
    text: "Navigating the legal and regulatory requirements for business formation can be complex. Our business registration services simplify the process, offering end-to-end support to ensure you are fully compliant and ready to operate.",
  },
  {
    id: 5,
    title: "Supply Chain Management",
    subTitle: "Build an Agile, Transparent, and Efficient Supply Chain",
    text: "A well-managed supply chain is crucial for operational success. We offer strategic supply chain management services that align your procurement, logistics, and inventory functions with your business objectives.",
  },
];

export const ChooseArry: ChooseArryTypes[] = [
  {
    title: "Expertise Across Domains",
    text: "Our team combines deep knowledge of finance, accounting, business operations and supply chain management to provide comprehensive solutions.",
  },
  {
    title: "Commitment to Excellence",
    text: "Accuracy, integrity, and timely delivery are at the core of everything we do, so you can focus on growing your business with confidence and ease.",
  },
  {
    title: "Customized Solutions",
    text: "We tailor our services to fit your unique business needs, ensuring relevant and effective support at every stage of growth.",
  },
  {
    title: "Technology-Driven Efficiency",
    text: "By leveraging the latest automation and digital tools, we streamline your operations to boost efficiency.",
  },
  {
    title: "Trusted Partnerships",
    text: "We collaborate closely with you to deliver seamless, end-to-end services with full transparency.",
  },
];

export const FaqArry: FAQTypes[] = [
  {
    question: "What types of businesses can benefit from your services?",
    answer:
      "Our services are ideal for Small and Medium-sized Enterprises (SMEs) and Startups across various industries. Whether you are launching a new business or scaling your operations, we provide customized support tailored to your business size, structure, and goals.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply reach out through our contact form to schedule a free consultation. We will discuss your needs and recommend a custom solution that aligns with your goals.",
  },
  {
    question:
      "What is a fractional CFO and how is it different from a full-time CFO?",
    answer:
      "A fractional CFO provides high-level financial strategy, forecasting, and oversight on a part-time or project basis. This allows your business to benefit from expert financial leadership without the long-term commitment or cost of hiring a full-time executive.",
  },
  {
    question:
      "Which accounting platforms do you support for outsourced bookkeeping?",
    answer:
      "We work with widely used platforms such as QuickBooks Online, Sage Accounting, Xero, Tally ERP, Zoho Books, and custom ERP systems. Our team ensures seamless integration and accurate financial reporting, regardless of the system your business uses.",
  },
  {
    question: "How does your accounting system automation service work?",
    answer:
      "We assess your current accounting automation processes, identify inefficiencies, and implement automation tools to streamline operations. This includes automating invoicing, expense management, reporting, and compliance tracking.",
  },
  {
    question: "Do you handle customs and compliance in foreign procurements?",
    answer:
      "Yes. We collaborate with a dedicated international logistics partner that specializes in customs brokerage and regulatory compliance. Once your purchase order is confirmed, our partner takes the lead on import documentation, duty calculations, and real-time clearance tracking. This arrangement ensures every shipment meets all legal requirements and reaches you on schedule, while we stay in close coordination and keep you fully informed throughout the process.",
  },
  {
    question: "Can you manage our entire supply chain?",
    answer:
      "Absolutely. We offer end-to-end supply chain solutions from vendor sourcing and order management to logistics coordination and performance monitoring.",
  },
];

export const industries: string[] = [
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Retail",
  "Construction",
  "Transportation",
  "Hospitality",
  "Entertainment",
  "Real Estate",
  "Agriculture",
  "Marketing & Advertising",
  "Telecommunications",
  "Energy & Utilities",
];

export const cfoData: CFODataTypes[] = [
  {
    title: "Financial Planning & Forecasting",
    desc: "Creating detailed budgets and forecasting future financial performance to support informed growth strategies.",
  },
  {
    title: "Cash Flow & Working Capital Management",
    desc: "Managing cash inflows and outflows to maintain liquidity and ensure financial stability at every stage of your business.",
  },
  {
    title: "Budgeting & Performance Analysis",
    desc: "Monitoring key financial metrics and identifying trends to guide insightful and data-driven decision-making.",
  },
  {
    title: "Fundraising Support & Investor Relations",
    desc: "Assisting with capital-raising efforts and managing communications with investors and stakeholders.",
  },
  {
    title: "Risk Management & Compliance Oversight",
    desc: "Identifying financial risks, strengthening internal controls, and keeping your business aligned with regulatory requirements.",
  },
];
export const supplyChainData: CFODataTypes[] = [
  {
    title: "Vendor Sourcing and Relationship Management",
    desc: "Leveraging our network of reliable vendors to source quality products and services while fostering strong, collaborative partnerships.",
  },
  {
    title: "Inventory Planning and Demand Forecasting",
    desc: "Accurately predicting stock requirements to prevent shortages and reduce excess inventory.",
  },
  {
    title: "Order Processing and Fulfilment Coordination",
    desc: "Managing the entire order lifecycle, from placement through to timely delivery.",
  },
  {
    title: "Logistics and Transportation Management",
    desc: "Organizing the movement of goods across locations.",
  },
  {
    title: "Performance Monitoring and Continuous Improvement",
    desc: "Tracking key performance indicators and continuously refining processes to boost efficiency.",
  },
];
export const outsourcedAccountData: CFODataTypes[] = [
  {
    title: "Bookkeeping & Financial Reporting",
    desc: "Ensuring every financial transaction is recorded in a timely manner and preparing audited or unaudited financial statements.",
  },
  {
    title: "Accounts Payable & Receivable Management",
    desc: "Efficiently managing your incoming and outgoing payments to maintain organized cash flow.",
  },
  {
    title: "Payroll Processing & Statutory Remittances",
    desc: "Handling salary calculations, statutory deduction processing, and remittance to the appropriate authorities.",
  },
  {
    title: "Filing Taxes",
    desc: "Preparing and submitting tax returns (e.g., Corporate Tax, Personal Income Tax, and VAT) on schedule to keep your business tax-compliant.",
  },
  {
    title: "Budget Monitoring & Financial Projections",
    desc: "Tracking expenses against budgets and analyzing financial trends to provide reliable forecasts and strategic insights.",
  },
  {
    title: "Digital Document Organization",
    desc: "Systematically managing financial records in secure and easily accessible digital formats.",
  },
  {
    title: "Internal Audit & Compliance",
    desc: "Conducting thorough reviews of financial processes and controls to identify risks, ensure regulatory compliance, and strengthen financial integrity.",
  },
  {
    title: "Liaison with External Auditors and Tax Authorities",
    desc: "Assisting during audits by promptly providing all requested information."
  },
];

export const businessRegistrationData: CFODataTypes[] = [
  {
    title: "Business Name Search and Reservation",
    desc: "Verifying and securing your desired business name.",
  },
  {
    title: "Filing Incorporation Documents",
    desc: "Handling all legal documentation required to officially register your business with the Corporate Affairs Commission.",
  },
  {
    title: "Registration for Tax Identification Number",
    desc: "Registering your business with the relevant tax authorities and obtaining the necessary tax identification numbers.",
  },
  {
    title: "Post-Incorporation Services",
    desc: "Filing returns and making official updates to your registered business, including changes to the business name, directors, shareholding structure, contact details, and other statutory records.",
  },
  {
    title:
      "Application for Special Control Unit Against Money Laundering (SCUML) Certificate",
    desc: "Handling SCUML registration for Designated Non-Financial Businesses and Professions (DNFBPs), a mandatory step for compliance with anti-money laundering laws and for opening corporate bank accounts.",
  },
];
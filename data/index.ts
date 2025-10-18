

 interface coreValueTypes {
  id: number;
  title: string;
  subTitle: string;
  text: string;
}
interface ChooseArryTypes
{
  title: string;
  text: string;
}

interface FAQTypes
{
  question: string;
  answer:string
}


export const coreValues:coreValueTypes[] = [
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


export const ChooseArry:ChooseArryTypes[] = [
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
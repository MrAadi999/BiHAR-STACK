import { Metadata } from "next";
import ServiceDetailLayout, { ServicePageMasterData } from "@/components/services/ServiceDetailLayout";
import { 
  AIAutomationIllustration, 
  SocialMediaIllustration, 
  DigitalMarketingIllustration, 
  WebTechIllustration 
} from "@/components/services/ServiceIllustrations";

export const metadata: Metadata = {
  title: "AI & Workflow Automation Agency | BiharStack",
  description: "Custom AI Chatbots, WhatsApp Business Cloud API, CRM Auto-Sync, Autonomous Agents & Process Workflows.",
};

const serviceData: ServicePageMasterData = {
  slug: "ai-automation",
  categoryLabel: "AI & AUTOMATION SERVICES",
  title: "AI & Workflow Automation",
  headline: "AI & Workflow Automation",
  subheadline: "Your team is doing robot work. Let robots do it. We build intelligent systems that work 24/7 while you sleep—answering inquiries, processing orders, and syncing data with zero human delay.",
  overviewTags: [
    "Custom AI Chatbots",
    "WhatsApp Cloud API",
    "CRM Auto-Sync",
    "Autonomous Agents",
    "Workflow Pipelines"
  ],
  heroIllustration: <AIAutomationIllustration />,

  rows: [
    // 1. Custom AI Chatbots
    {
      id: "custom-ai-chatbots",
      title: "Custom AI Chatbots & Knowledge Bases",
      illustration: <AIAutomationIllustration />,
      description: [
        "Generic chatbots frustrate customers with canned responses. We build custom Retrieval-Augmented Generation (RAG) AI assistants trained on your actual product catalogs, PDF manuals, pricing policies, and FAQs.",
        "Our bots understand Hindi, English, and regional dialects, remember user context, recommend products intelligently, and gracefully route complex inquiries to human reps with full chat transcripts.",
        "Put customer support and lead qualification on complete 24/7 autopilot."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Custom+AI+Chatbots"
    },

    // 2. WhatsApp Business API Automation
    {
      id: "whatsapp-automation",
      title: "WhatsApp Cloud API & CRM Automation",
      illustration: <SocialMediaIllustration />,
      description: [
        "WhatsApp is where India communicates. We connect your business to the official Meta WhatsApp Cloud API to enable automated interactive catalogs, order booking, payment link dispatch, and instant CRM sync on complete autopilot.",
        "When a lead clicks your ad, they receive an instant WhatsApp greeting within 15 seconds, qualification questions, and appointment calendar links without human intervention.",
        "Turn WhatsApp into an autonomous revenue engine."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=WhatsApp+Automation"
    },

    // 3. Business Process & Operations Automation
    {
      id: "process-automation",
      title: "Business Process & Operations Automation",
      illustration: <DigitalMarketingIllustration />,
      description: [
        "Eliminate soul-crushing manual work. We automate your repetitive back-office processes—such as extracting data from vendor invoices, updating inventory records, routing approvals, and triggering supplier reorders.",
        "Your staff shifts their focus from manual data entry to strategic growth, customer relationships, and revenue generation."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Business+Process+Automation"
    },

    // 4. Autonomous AI Agents
    {
      id: "autonomous-ai-agents",
      title: "Autonomous AI Agents",
      illustration: <AIAutomationIllustration />,
      description: [
        "AI agents that don't just chat—they execute multi-step business tasks independently. They research competitor pricing, draft and schedule social content, triage support tickets, and trigger API calls across your tech stack.",
        "Equipped with persistent memory and tool-calling capabilities, autonomous agents act as tireless digital employees."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Autonomous+AI+Agents"
    },

    // 5. Zapier, Make & n8n Workflow Pipelines
    {
      id: "zapier-make-pipelines",
      title: "Zapier, Make & n8n Integration Pipelines",
      illustration: <WebTechIllustration />,
      description: [
        "Connect your apps and make them communicate without human intervention. We architect robust no-code and low-code integration pipelines between Shopify, Meta Ads, Google Sheets, Stripe, WhatsApp, and your internal databases.",
        "We build advanced routers, error-handling fallbacks, and webhook dispatchers that ensure no lead or order is ever lost."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Zapier+and+Make+Pipelines"
    }
  ],

  faqs: [
    {
      q: "Will AI automation replace our existing human staff?",
      a: "No. AI automation eliminates low-value, repetitive tasks (such as repetitive FAQ answering, data entry, invoice copying, and follow-up logging) so your human team can focus on closing deals, high-touch client relationships, and business strategy."
    },
    {
      q: "Can the AI understand and answer in Hindi and Hinglish?",
      a: "Yes, 100%. We train models specifically on your business context with robust multi-lingual support, understanding English, pure Hindi, and conversational Hinglish commonly used by Indian customers."
    },
    {
      q: "How long does a complete WhatsApp & CRM automation take to deploy?",
      a: "A standard knowledge-base chatbot takes 3 to 5 business days. A complete WhatsApp Cloud API, CRM synchronization, and automated invoice workflow is deployed within 1 to 2 weeks with full team training."
    }
  ],

  ctaHeadline: "Ready to put your business operations on autopilot?",
  ctaSubheadline: "Tell us about your manual bottlenecks. We'll map an automation blueprint that saves your team 40+ hours every week."
};

export default function AIAutomationPage() {
  return <ServiceDetailLayout data={serviceData} />;
}

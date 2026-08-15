import { Metadata } from "next";
import ServiceDetailLayout, { ServicePageMasterData } from "@/components/services/ServiceDetailLayout";
import { 
  AIAutomationIllustration, 
  WhatsAppCloudIllustration, 
  WorkflowPipelinesIllustration, 
  LeadGenIllustration, 
  SocialMediaIllustration, 
  SaaSCloudIllustration, 
  PerformanceMarketingIllustration, 
  WebTechIllustration 
} from "@/components/services/ServiceIllustrations";

export const metadata: Metadata = {
  title: "AI & Workflow Automation Agency | BiharStack",
  description: "Explore all 8 AI & Automation engines: Custom AI Chatbots, WhatsApp Cloud API, Business Process Automation, Autonomous Agents, AI Pipelines, Zapier/Make Workflows, and Enterprise AI.",
};

const serviceData: ServicePageMasterData = {
  slug: "ai-automation",
  categoryLabel: "AI & WORKFLOW AUTOMATION",
  title: "AI & Workflow Automation",
  headline: "AI & Workflow Automation",
  subheadline: "Your team is doing robot work. Let robots do it. We build intelligent systems that work 24/7 while you sleep—answering inquiries, qualification funnels, syncing CRM records, and executing multi-step business workflows with zero human delay.",
  overviewTags: [
    "AI Chatbots",
    "WhatsApp Cloud API",
    "Process Automation",
    "Autonomous Agents",
    "AI Content Pipelines",
    "Zapier & Make",
    "Lead Nurturing",
    "Enterprise AI"
  ],
  heroIllustration: <AIAutomationIllustration />,

  rows: [
    // 1. Custom AI Chatbots & Knowledge Bases
    {
      id: "custom-ai-chatbots",
      title: "Custom AI Chatbots & Knowledge Bases",
      illustration: <AIAutomationIllustration />,
      description: [
        "Generic chatbots frustrate customers with rigid decision trees. We build custom Retrieval-Augmented Generation (RAG) AI assistants trained on your actual product catalogs, PDF manuals, pricing policies, and FAQs.",
        "Our bots understand Hindi, English, and Hinglish, remember user context, recommend products intelligently, and gracefully route complex inquiries to human reps with full chat transcripts."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Custom+AI+Chatbots"
    },

    // 2. WhatsApp & CRM Automation
    {
      id: "whatsapp-crm-automation",
      title: "WhatsApp & CRM Automation",
      illustration: <WhatsAppCloudIllustration />,
      description: [
        "WhatsApp is where your customers communicate. We connect your business to the official Meta WhatsApp Cloud API to enable automated interactive catalogs, order booking, payment link dispatch, and instant CRM sync on complete autopilot.",
        "When a lead clicks your ad, they receive an instant WhatsApp greeting within 15 seconds, qualification questions, and appointment calendar links without human intervention."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=WhatsApp+and+CRM+Automation"
    },

    // 3. Business Process Automation
    {
      id: "business-process-automation",
      title: "Business Process Automation",
      illustration: <WorkflowPipelinesIllustration />,
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

    // 5. AI Content & Copy Pipelines
    {
      id: "ai-content-copy-pipelines",
      title: "AI Content & Copy Pipelines",
      illustration: <SocialMediaIllustration />,
      description: [
        "Scale your content output 10x without sacrificing quality. We build custom AI pipelines that generate SEO-optimized blog drafts, social media hook variants, and multilingual ad copy tailored to your brand voice.",
        "Equipped with automated fact-checking and human-in-the-loop review queues, your content publishing velocity skyrockets."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=AI+Content+Pipelines"
    },

    // 6. Zapier, Make & n8n Workflows
    {
      id: "zapier-make-n8n-workflows",
      title: "Zapier, Make & n8n Workflows",
      illustration: <WorkflowPipelinesIllustration />,
      description: [
        "Connect your apps and make them communicate without human intervention. We architect robust integration pipelines between Shopify, Meta Ads, Google Sheets, Stripe, WhatsApp, and your internal databases.",
        "We build advanced routers, error-handling fallbacks, and webhook dispatchers that ensure no lead or order is ever lost."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Zapier+and+Make+Workflows"
    },

    // 7. Lead Enrichment & Auto-Nurturing
    {
      id: "lead-enrichment-auto-nurturing",
      title: "Lead Enrichment & Auto-Nurturing",
      illustration: <LeadGenIllustration />,
      description: [
        "Automatically research, score, and qualify inbound leads the second they submit a form. Our AI enriches contact profiles with company revenue, LinkedIn profiles, and buyer intent before alerting your sales team.",
        "Cold leads receive tailored multi-channel follow-up sequences via WhatsApp and email that systematically warm them up until they book a meeting."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Lead+Enrichment+and+Nurturing"
    },

    // 8. Enterprise AI Integration
    {
      id: "enterprise-ai-integration",
      title: "Enterprise AI Integration",
      illustration: <SaaSCloudIllustration />,
      description: [
        "Deploy private, secure Large Language Models (LLMs) and custom AI algorithms inside your existing enterprise infrastructure.",
        "With on-premise vector databases, strict role permissions, and SOC-2 compliant data privacy safeguards, your sensitive company intelligence stays 100% confidential and secure."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Enterprise+AI+Integration"
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

export interface WhatsAppMessageOptions {
  phoneNumber?: string;
  type?: "GENERAL" | "PROJECT" | "ESTIMATE" | "ENQUIRY_FOLLOWUP" | "SITE_VISIT" | "COMMERCIAL";
  projectTitle?: string;
  projectCategory?: string;
  customerName?: string;
  estimateNumber?: string;
  customMessage?: string;
}

export function cleanPhoneNumber(rawPhone: string): string {
  // Strip all non-digit characters
  return (rawPhone || "").replace(/\D/g, "");
}

export function generateWhatsAppUrl(options: WhatsAppMessageOptions): string {
  const phone = cleanPhoneNumber(
    options.phoneNumber || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919850291262"
  );

  let messageText = "";

  if (options.customMessage) {
    messageText = options.customMessage;
  } else {
    switch (options.type) {
      case "SITE_VISIT":
        messageText =
          "Hello Dnyaneshwar Pawale, I would like to schedule an on-site consultation with Shree Samarth Krupa Enterprises. Please share available dates.";
        break;
      case "COMMERCIAL":
        messageText =
          "Hello, I am inquiring about commercial civil contracting and development services from Shree Samarth Krupa Enterprises. Please share details.";
        break;
      case "PROJECT":
        messageText = `Hello! I am interested in your construction project "${
          options.projectTitle || "Construction Project"
        }". I would like to schedule a site consultation.`;
        break;
      case "ESTIMATE":
        messageText = `Hello Dnyaneshwar Pawale, I am inquiring about construction planning and architectural execution with Shree Samarth Krupa Enterprises. I would like to schedule a project discussion.`;
        break;
      case "ENQUIRY_FOLLOWUP":
        messageText = `Hello ${
          options.customerName || "there"
        }, thank you for reaching out to Shree Samarth Krupa Enterprises regarding your construction requirements. How can we assist you today?`;
        break;
      case "GENERAL":
      default:
        messageText = `Hello Dnyaneshwar Pawale, I am interested in your turnkey construction and development services (${
          options.projectCategory ? options.projectCategory.toLowerCase() : "builders & developers"
        }) with Shree Samarth Krupa Enterprises. Please connect with me.`;
        break;
    }
  }

  const encodedMessage = encodeURIComponent(messageText);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

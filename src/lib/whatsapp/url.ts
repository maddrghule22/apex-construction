export interface WhatsAppMessageOptions {
  phoneNumber?: string;
  type?: "GENERAL" | "PROJECT" | "ESTIMATE" | "ENQUIRY_FOLLOWUP" | "TANKER" | "INDUSTRIAL";
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
    options.phoneNumber || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917276484671"
  );

  let messageText = "";

  if (options.customMessage) {
    messageText = options.customMessage;
  } else {
    switch (options.type) {
      case "TANKER":
        messageText =
          "॥ श्रीराम समर्थ ॥ नमस्ते Shravan ji / Dnyaneshwar ji, I need to book a Water Tanker (Potable/Construction site curing water supply) from Sree Samarth Krupa Enterprises. Please share rates and availability.";
        break;
      case "INDUSTRIAL":
        messageText =
          "॥ श्रीराम समर्थ ॥ Hello, I am inquiring about industrial supplies & construction raw materials from Sree Samarth Krupa Enterprises. Please share details.";
        break;
      case "PROJECT":
        messageText = `॥ श्रीराम समर्थ ॥ Hello! I am interested in your construction project "${
          options.projectTitle || "Construction Project"
        }". I would like to schedule a site consultation.`;
        break;
      case "ESTIMATE":
        messageText = `॥ श्रीराम समर्थ ॥ Hello, I generated a construction cost estimate${
          options.estimateNumber ? ` (#${options.estimateNumber})` : ""
        } on your website. I would like to review the drawings and get a formal quotation.`;
        break;
      case "ENQUIRY_FOLLOWUP":
        messageText = `॥ श्रीराम समर्थ ॥ Hello ${
          options.customerName || "there"
        }, thank you for reaching out to Sree Samarth Krupa Enterprises regarding your construction and supply requirements. How can we assist you today?`;
        break;
      case "GENERAL":
      default:
        messageText = `॥ श्रीराम समर्थ ॥ Hello Shravan ji / Dnyaneshwar ji, I am interested in your construction and development services (${
          options.projectCategory ? options.projectCategory.toLowerCase() : "builders & developers"
        }) with Sree Samarth Krupa Enterprises. Please contact me.`;
        break;
    }
  }

  const encodedMessage = encodeURIComponent(messageText);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

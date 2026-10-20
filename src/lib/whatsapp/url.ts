export interface WhatsAppMessageOptions {
  phoneNumber?: string;
  type?: "GENERAL" | "PROJECT" | "ESTIMATE" | "ENQUIRY_FOLLOWUP";
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
    options.phoneNumber || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "15552345678"
  );

  let messageText = "";

  if (options.customMessage) {
    messageText = options.customMessage;
  } else {
    switch (options.type) {
      case "PROJECT":
        messageText = `Hello! I am interested in your project "${options.projectTitle || "Construction Project"}". I would like more details and consultation.`;
        break;
      case "ESTIMATE":
        messageText = `Hello, I generated a construction cost estimate${
          options.estimateNumber ? ` (#${options.estimateNumber})` : ""
        } on your website. I would like to review the drawings and get a formal quotation.`;
        break;
      case "ENQUIRY_FOLLOWUP":
        messageText = `Hello ${options.customerName || "there"}, thank you for reaching out to us regarding your construction project. How can we assist you today?`;
        break;
      case "GENERAL":
      default:
        messageText = `Hello, I am interested in your construction services. I would like to discuss a ${
          options.projectCategory ? options.projectCategory.toLowerCase() : "residential/commercial"
        } construction project. Please contact me.`;
        break;
    }
  }

  const encodedMessage = encodeURIComponent(messageText);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

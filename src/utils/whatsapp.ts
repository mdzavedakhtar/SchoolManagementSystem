export const WHATSAPP_CONTACT_NUMBER = "919934795178";

export const DEFAULT_WHATSAPP_MESSAGE = 
  "Hello, I would like to enquire about MG Oriental School and New Era Coaching Centre.";

/**
 * Returns a properly URL-encoded WhatsApp link with a custom or default message.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const messageText = customMessage || DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent(messageText)}`;
}

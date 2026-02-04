import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneForWhatsApp(phone: string): string {
  return phone.replace(/\D/g, "")
}

export function generateWhatsAppUrl(
  phoneNumber: string,
  message: string
): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

export function generatePhoneUrl(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`
}

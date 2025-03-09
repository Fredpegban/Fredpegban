import { supabase } from "./supabase";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
        },
      ])
      .select();

    if (error) {
      console.error("Error submitting contact form:", error);
      throw new Error("Failed to submit contact form");
    }

    return { success: true, data };
  } catch (error) {
    console.error("Exception submitting contact form:", error);
    return { success: false, error };
  }
}

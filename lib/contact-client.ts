// Client-side contact form handler for static exports
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // For static exports, you can use one of these approaches:
    
    // Option 1: Email service like EmailJS
    // This requires setting up EmailJS account
    // const response = await emailjs.send(
    //   'your_service_id',
    //   'your_template_id',
    //   formData,
    //   'your_public_key'
    // );
    
    // Option 2: Use Netlify Forms (if hosting on Netlify)
    // This automatically handles form submissions
    // const response = await fetch('/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: new URLSearchParams({
    //     'form-name': 'contact',
    //     ...formData
    //   }).toString()
    // });
    
    // Option 3: Direct mailto (simple fallback)
    const mailtoLink = `mailto:damianoschirinzi.dev@gmail.com?subject=${encodeURIComponent(
      `Portfolio Contact: ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    return {
      success: true,
      message: "Opening email client...",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
}

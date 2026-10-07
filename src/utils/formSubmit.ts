export const submitToGoogleSheet = async (
  formName: string,
  formData: Record<string, any>
) => {
  const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
  
  if (!scriptUrl) {
    console.warn('VITE_GOOGLE_APPS_SCRIPT_URL is not defined. Form submission simulated.');
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true };
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script requires no-cors for simple form posts from browser
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formName,
        timestamp: new Date().toISOString(),
        ...formData
      }),
    });

    // Since mode is no-cors, we won't be able to read the response. 
    // We just assume success if it didn't throw an error.
    return { success: true };
  } catch (error) {
    console.error('Error submitting form to Google Sheets:', error);
    throw error;
  }
};

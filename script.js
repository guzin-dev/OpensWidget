async function postContactToken() {
  try {
    const response = await fetch('https://auth.test.opens.com.br/contact-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Gustavo Braga',
        companyId: 'c3fd21c9-c91a-4c66-baa5-c3e050c2cc74',
        phone: '5548996781734',
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting to contact-token:', error);
    throw error;
  }
}

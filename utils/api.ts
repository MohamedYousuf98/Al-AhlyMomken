export const fetchConsumerData = async () => {
  try {
    const response = await fetch('https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/consumer');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('API response:', data); // Log the response for debugging
    return data.data; // Ensure this matches the actual structure of your API response
  } catch (error) {
    console.error('Error fetching consumer data:', error);
    return { header: null, images: [] }; // Ensure default structure matches expected structure
  }
};



export const fetchPosData = async () => {
  try {
    const response = await fetch('https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/pos', {
      headers: {
        'Accept-Language': 'en'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('API response:', data); // Log the response for debugging

    // Verify that data.data exists and has the correct structure
    if (data && data.data) {
      return data.data;
    } else {
      throw new Error('Invalid data structure');
    }

  } catch (error) {
    console.error('Error fetching POS data:', error);
    return {
      header: { background_image: '', title: '', sub_title: '', description: '' },
      section: { image: '', title: '', description: '' },
      features: [],
      cards: [],
      streamline: []
    }; // Default structure
  }
};




import axios from 'axios';

export const fetchGovernmentData = async (): Promise<any> => {
  try {
    const response = await axios.get('https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/industries/educaion', {
      headers: {
        'Accept-Language': 'en'
      },
      params: {
        industry_name: 'education'
      }
    });
    console.log('API response:', response.data); // Debugging log
    return response.data.data;
  } catch (error: any) {
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else {
      console.error('Error message:', error.message);
    }
    return { header: { background_image: '', title: '', sub_title: '', description: '' }, sections: [], streamline: [] };
  }
};



export const fetchPaymentSolutionData = async (): Promise<any> => {
  try {
    const response = await axios.get('https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/solution/app', {
      headers: {
        'Accept-Language': 'en'
      },
      params: {
        type: 'app'
      }
    });
    console.log('API response:', response.data); // Debugging log
    return response.data.data;  // Return the data object directly
  } catch (error: any) {
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else {
      console.error('Error message:', error.message);
    }
    // Return a default structure instead of null
    return {
      header: { title: '', sub_title: '', description: '', image: '' },
      momkn_payment: { id: '', title: '', description: '', image: '', features: [] },
      cards: { id: '', image: '', title: '', description: '' },
      streamline: []
    };
  }
};


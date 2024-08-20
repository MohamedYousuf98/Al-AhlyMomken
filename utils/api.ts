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
    const response = await axios.get('https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/industries/solutions/app', {
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




export const fetchData = async () => {
  try {
    const response = await fetch('https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/our-story', {
      headers: {
        'Accept-Language': 'en',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('API response:', data);

    if (data && data.data) {
      return data.data;
    } else {
      throw new Error('Invalid data structure');
    }

  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      get_our_story: { title: '', description: '', subtitle: '',  image: '' },
      get_our_Quate: { title: '', description: '', image: '' },
      get_Our_mission: { title: '', description: '', image: '' },
      get_What_WeDo: { title: '', description: '', image: '' },
      our_missions: { title: '', description: '' },
      our_values: { title: '', description: '' },
      get_What_WeAre: { title: '', description: '', image: '' },
    };
  }
};





export const fetchBrands = async (): Promise<string[]> => {
  try {
    const response = await fetch('https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/clients');
    const data = await response.json();
    return data.data.brands.map((brand: { image: string }) => brand.image);
  } catch (error) {
    console.error('Failed to fetch brands', error);
    return [];
  }
};







const API_BASE_URL = 'https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1';


interface Author {
  image: string;
  name: string;
}

interface NewsItem {
  id: string;
  image: string;
  home_title: string;
  home_description: string;
  author: Author;
  date: string;
  category: string;
}

interface NewsResponse {
  message: string | null;
  data: {
    news: NewsItem[];
    current_page: number;
    first_page_url: string;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
  code: number;
}

export const fetchNews = async (page: number, type: string): Promise<NewsResponse> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/last-news`, {
      headers: {
        'Accept-Language': 'en'
      },
      params: {
        page: page.toString(),
        type: type
      }
    });
    console.log('API response:', response.data); // Debugging log
    return response.data; // Return the data object directly
  } catch (error: any) {
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
};






//Article
const NEWS_API_BASE_URL = 'https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/news';

export const getNews = async () => {
  try {
    const response = await axios.get(NEWS_API_BASE_URL, {
      headers: {
        'Accept-Language': 'en',
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};


// podcast and magazine

export async function fetchPodcasts(page: number): Promise<any> {
  const response = await fetch(`https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/podcasts?page=${page}`, {
    headers: {
      'Accept-Language': 'en',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
}


// Careers
export const fetchVacancies = async (category: string, searchTerm: string) => {
  try {
    const response = await fetch(
      `https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/vacancies?type=${category}&search=${searchTerm}`,
      {
        headers: {
          'Accept-Language': 'en',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const result = await response.json();
    console.log('Fetched data:', result); 
    return result.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};


// Magazine
const API_URL = 'https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/magazines';

export const fetchMagazines = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Accept-Language': 'en'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching magazines:', error);
    throw error;
  }
};





// PodcastinnerPage
const API_URL_Podcast = 'https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/podcasts/1';

export const getPodcastinner = async () => {
  try {
    const response = await axios.get(API_URL_Podcast, {
      headers: {
        'Accept-Language': 'en',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching podcast data:', error);
    return null;
  }
};


// Vacancies Career
const API_URL_VACANCY = 'https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/vacancies/1'; 

export const getVacancyDetails = async () => {
  try {
    const response = await axios.get(API_URL_VACANCY, {
      headers: {
        'Accept-Language': 'en',
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};



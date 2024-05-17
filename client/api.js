const API_URL = "http://192.168.1.175:3000";

export const fetchData = async (endpoint, options = {}) => {
  try {
    let url = `${API_URL}/${endpoint}`;
    const params = new URLSearchParams({
      ...(options.sort && { sort: JSON.stringify(options.sort) }),
      ...(options.limit && { limit: options.limit }),
    });
    if (params.toString()) {
      url += `?${params.toString()}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

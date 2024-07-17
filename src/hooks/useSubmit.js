import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const simulateApiCall = async (data) => {
    await wait(2000); // Simulate API call delay

    const random = Math.random();
    if (random < 0.5) {
      throw new Error("Something went wrong");
    }

    return {
      type: 'success',
      message: `Thanks for your submission ${data.firstName}, I will get back to you shortly!`,
    };
  };

  const submit = async (data) => {
    setLoading(true);
    try {
      const apiResponse = await simulateApiCall(data);
      setResponse(apiResponse);
      return apiResponse;
    } catch (error) {
      console.error('Submit error:', error);
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
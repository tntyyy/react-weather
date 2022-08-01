export const getApiResource = async (url: string) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error('Could not fetch. ', response.status);
      return false;
    }

    return await response.json();
  } catch (error: any) {
    console.error('Could not fetch. ', error.message);
  }
};

export const convertToCelsius = (temp: number) => {
  temp = Number(temp);
  return (temp - 273).toFixed(0);
};

export const getTimeOfDay = (hour: number) => {
  if (hour > 0 && hour < 6) {
    return 'night';
  }
  if (hour > 6 && hour < 12) {
    return 'sunrise';
  }
  if (hour > 12 && hour < 18) {
    return 'noon';
  }
  if (hour > 18) {
    return 'sunset';
  }
};

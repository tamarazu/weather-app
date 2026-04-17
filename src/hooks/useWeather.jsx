import { useState } from "react";

export const useWeather = () => {
  const API_KEY = "78bbe6e941df4fa7afc5923c2bb74f9d";
  const [weatherData, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const toFetchWeather = async (city) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=id`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("kota tidak ditemukan");
      }
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchByLocation = async (city) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}&lang=id`
        );
        const data = await response.json();
        setWeather(data);
      });
    } else {
      toFetchWeather("jakarta");
    }
  };
  return { weatherData, loading, toFetchWeather, fetchByLocation };
};

import { useEffect, useState } from "react";

const useWeather = (city = 'Madrid') => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49db267b8509f095b2d836d7f44d00c5&units=metric`)
            .then(response => response.json())
            .then(json => {
                setLoading(false);
                setError(null);
                setData({
                    city,
                    temp: json.main.temp,
                    temp_min: json.main.temp_min,
                    temp_max: json.main.temp_max
                });
            })
            .catch(error => {
                setData(null);
                setError(error);
            })
    }, [city]);

    return [data, loading, error];

}

export default useWeather;

//http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=49db267b8509f095b2d836d7f44d00c5&units=metric
import React, { useState } from 'react';
import axiosApi from "../../axiosApi";
import {Link} from "../../types";

const FormLink: React.FC = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortenedUrl] = useState('');

    const toShortClick = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axiosApi.post('/links', { originalUrl });
            const data: Link = response.data;
            setShortenedUrl(data.shortUrl);
        } catch (e) {
            console.error(e);
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
        setOriginalUrl(e.target.value);
    };

    return (
        <div>
            <form onSubmit={toShortClick}>
                <input
                    type='text'
                    name='text'
                    id='text'
                    placeholder='Enter URL'
                    value={originalUrl}
                    required
                    onChange={onChange}
                />
                <button type='submit'>Shorten</button>
            </form>
            {shortUrl && (
                <div>
                    <h4>Short URL:</h4>
                    <a href={`http://localhost:8000/${shortUrl}`} >
                        http://localhost:8000/{shortUrl}
                    </a>
                </div>
            )}
        </div>
    );
};

export default FormLink;


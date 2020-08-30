import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RedirectProps } from '@/@types/router';
export default ({ to }: RedirectProps) => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(to);
    }, [navigate, to]);
    return null;
};
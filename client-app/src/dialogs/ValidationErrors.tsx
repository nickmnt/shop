import { Typography } from '@mui/material';
import React from 'react';

interface Props {
    errors: any;
}

export default function ValidationErrors({ errors }: Props) {
    if (!errors) {
        return null;
    }

    return (
        <>
            {errors.map((err: any, i: any) => (
                <Typography color="red" key={i}>
                    {err}
                </Typography>
            ))}
        </>
    );
}

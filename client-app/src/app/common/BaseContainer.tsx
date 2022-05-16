import React from 'react';

export interface Props {
    children: React.ReactNode;
}

export default function BaseContainer({ children }: Props) {
    return <div style={{ margin: '10rem 2.5rem' }}>{children}</div>;
}

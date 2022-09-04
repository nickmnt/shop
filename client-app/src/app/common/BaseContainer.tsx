import React from 'react';

export interface Props {
    children: React.ReactNode;
}

export default function BaseContainer({ children }: Props) {
    return <div style={{ margin: '4rem' }}>{children}</div>;
}

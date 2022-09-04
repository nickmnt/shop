import React from 'react';

export interface Props {
    children: React.ReactNode;
}

export default function CenterContainer({ children }: Props) {
    return <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>{children}</div>;
}

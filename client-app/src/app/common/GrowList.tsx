import { BoxProps, Grow } from '@mui/material';
import React from 'react';

export interface GrowListProps extends BoxProps {
    interval?: number;
}

export function GrowList(props: GrowListProps) {
    const { interval = 200, children } = props;

    return (
        <>
            {React.Children.map(children, (child, index) =>
                React.isValidElement(child) ? (
                    <Grow in timeout={(index + 1) * interval}>
                        {child}
                    </Grow>
                ) : null
            )}
        </>
    );
}

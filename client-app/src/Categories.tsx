import Stack from '@mui/material/Stack/Stack';
import BottomNav from './BottomNav';
import Category from './Category';

export default function Categories() {
    return (
        <div style={{ width: '100%' }}>
            <Stack direction="column" sx={{ width: '100%' }}>
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
                <Category />
            </Stack>
            <BottomNav value={1} />
        </div>
    );
}

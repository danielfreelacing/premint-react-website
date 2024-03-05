import { useState } from 'react';
import {
    Stack,
    Typography,
    Button,
    Checkbox
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Overallocate ({setStep, setProject, project}) {
    const theme =  useTheme();
    const [allocate, setAllocate] = useState(false);

    const onChangeAllocate = () => {
        setAllocate(!allocate);
    } 

    const handle = (e) => {
        e.preventDefault();
        const data = {}
        setStep(4);
    }

    return (
        <Stack gap={3}>
            <Typography variant="h5">Will you be overallocating?</Typography>
            <Typography>
                Collectors who win PREMINT expect a guarnateed spot, so you need to tell them if that's not the case.
                If you overallocate without being clear, you will be flagged on PREMINT.
            </Typography>
            <Stack 
                gap={5}
                sx={{
                    bgcolor: theme.palette.background.paper,
                    border: '1px solid #F1F4F9',
                    boxShadow: '0px 17px 26px -9px #E2E8F0',
                    borderRadius: 1,
                    p: 4
                }}
            >
                <Stack flexDirection="row" justifyContent="flex-start" gap={1.5}>
                    <Checkbox fontSize='small' 
                        onChange={onChangeAllocate}
                        sx={{ 
                            color: '#4D82F3', 
                            alignItems: 'flex-start', 
                            p:0 
                        }} 
                    />
                    <Stack gap={.5}>
                        <Typography>This project's mint will be overallocated.</Typography>
                        <Typography variant="caption">
                            This means that your allowlist will have more people on it than there are NFTs.
                            so minting will be first come first serve.
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack flexDirection="row" justifyContent="flex-end">
                <Button variant="contained" 
                    onClick={() => setStep(4)}
                    sx={{
                        bgcolor: '#BB86FC',
                        textTransform: 'uppercase'
                    }}
                >Next</Button>
            </Stack>
        </Stack>
    );
}
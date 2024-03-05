import { useState } from 'react';
import {
    Stack,
    Typography,
    Button,
    OutlinedInput,
    Checkbox
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import request from '../../../utils/request';

export default function Spot ({setStep, setProject, project}) {
    const theme = useTheme();
    const [supply, setSupply] = useState(0);
    const [spot, setSpot] = useState(0);

    const onChangeSupply = (e) => {
        setSupply(e.target.value);
    }

    const onChangeSpot = (e) => {
        setSpot(e.target.value);
    }

    const handle = async (e) => {
        e.preventDefault();
        const data = {
            _id: project._id,
            supply: supply,
            spot: spot
        };

        // const response = await request('/project/update', {
        //     method: 'POST',
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })
        // console.log(response);
        // setProject(response.success.project);
        setStep(3);
    }
    return (
        <Stack gap={3} component="form" onSubmit={handle}>
            <Typography variant="h5">How big is the collection and how many people will get spots?</Typography>
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
                <Stack gap={1.5}>
                    <Typography>What is the total token supply for this collection?</Typography>
                    <OutlinedInput 
                        size="small"
                        sx={{
                            bgcolor: '#fff'
                        }}
                        placeholder="What is the total token supply for this collection?"
                    />
                    <Typography variant='body2'>
                        If you plan to have 10,000 NFTs minted, this would be 10,000.
                    </Typography>
                </Stack>
                <Stack gap={1.5}>
                    <Typography>How many spots are you giving away via this PREMINT list?</Typography>
                    <OutlinedInput 
                        size="small"
                        sx={{
                            bgcolor: '#fff'
                        }}
                        placeholder="How many spots are you giving away via this PREMINT list?"
                    />
                    <Typography variant="body2">
                        This is the number of guarnateed spots that will be granted to participants of this list.
                    </Typography>
                </Stack>
            </Stack>
            
            <Stack flexDirection="row" justifyContent="flex-end">
                <Button variant="contained"
                    type="submit"
                    sx={{
                        bgcolor: '#BB86FC',
                        textTransform: 'uppercase'
                    }}
                >Next</Button>
            </Stack>
        </Stack>
    );
}
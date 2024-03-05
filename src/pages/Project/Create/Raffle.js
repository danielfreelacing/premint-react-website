import { useState } from 'react';
import {
    Stack,
    Typography,
    Button,
    OutlinedInput,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import request from '../../../utils/request';

export default function Raffle ({setStep, setProject, project}) {
    const theme = useTheme();
    const [raffleDate, setRaffleDate] = useState();

    const onChangeRaffleDate = (e) => {
        setRaffleDate(e.target.value);
    }

    const handle = async (e) => {
        e.preventDefault();
        const data = {
            _id: project._id,
            raffleDate: raffleDate
        };

        // const response = await request('/project/update', {
        //     method: "POST",
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })

        // setProject(response.success.project);
        setStep(5);
    }
    return (
        <Stack gap={3} component="form" onSubmit={handle}>
            <Typography variant="h5">When do you plan to run the raffle?</Typography>
            <Typography>
                Collectors like to know when they should find out if they've got a spot.
                We encourage you to enter a date, but this is optional.
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
                <Stack gap={1.5}>
                    <Typography>Planned Raffle Time</Typography>
                    <OutlinedInput 
                        size="small"
                        sx={{
                            bgcolor: '#fff'
                        }}
                        onChange={onChangeRaffleDate}
                        type="datetime-local"
                        placeholder="Planned Raffle Time"
                    />
                    <Typography variant='body2'>
                        This doesn't happen automatically, but if you intend to pick winners from this list.
                        When will they be selected?
                        Most collectors really appreciate knowing when they'll find out if they won or not.
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
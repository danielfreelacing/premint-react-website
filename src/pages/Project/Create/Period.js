import { useState, useSyncExternalStore } from 'react';
import {
    Stack,
    Typography,
    Button,
    OutlinedInput,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import request from '../../../utils/request';

export default function Period ({setStep, setProject, project}) {
    const theme = useTheme();
    const [openDate, setOpenDate] = useState();
    const [closeDate, setCloseDate] = useState();
    const [limit, setLimit] = useState(0)

    const onChangeOpenDate = (e) => {
        setOpenDate(e.target.value);
    }

    const onChangeCloseDate = (e) => {
        setCloseDate(e.target.value);
    }

    const onChangeLimit = (e) => {
        setLimit(e.target.value);
    }

    const handle = async (e) => {
        e.preventDefault();
        const data = { _id: project._id, limit: limit };
        if (openDate) data.openDate = openDate;
        if (closeDate) data.openDate = closeDate;

        // const response = await request('/project/update', {
        //     method: 'POST',
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })
        // setProject(response.success.project);
        setStep(4);
    }
    return (
        <Stack gap={3} component="form" onSubmit={handle}>
            <Typography variant="h5">When do you want your PREMINT list opne/closed?</Typography>
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
                    <Typography>Registration start date</Typography>
                    <OutlinedInput 
                        size="small"
                        sx={{
                            bgcolor: '#fff'
                        }}
                        type="datetime-local"
                        onChange={onChangeOpenDate}
                        placeholder="10/06/2022 02:14"
                    />
                    <Typography variant='body2'>
                        When should people be able to join your list?
                    </Typography>
                </Stack>
                <Stack gap={1.5}>
                    <Typography>Registration end date</Typography>
                    <OutlinedInput 
                        size="small"
                        sx={{
                            bgcolor: '#fff'
                        }}
                        type="datetime-local"
                        onChange={onChangeCloseDate}
                        placeholder="Registration end date"
                    />
                    <Typography variant="body2">
                        When should registration close for your list?
                    </Typography>
                </Stack>
                <Stack gap={1.5}>
                    <Typography>Close registration once it hits this many entries:</Typography>
                    <OutlinedInput 
                        size="small"
                        onChange={onChangeLimit}
                        sx={{
                            bgcolor: '#fff'
                        }}
                        type="number"
                        placeholder="Registration end date"
                    />
                    <Typography variant="body2">
                        Leave this blank for unlimited
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
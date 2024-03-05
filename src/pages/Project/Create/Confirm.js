import { 
    Stack, 
    Typography, 
    OutlinedInput, 
    Button, 
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import request from '../../../utils/request';

export default function Confirm ({setStep, setProject, project}) {
    const theme = useTheme();
    const navigate = useNavigate();

    const handle = async () => {
        const data = {
            _id: project._id,
            deleted: false
        }
        // const response = await request('/project/update', {
        //     method: "POST",
        //     headers: {
        //         "Content-type": "application/json",
        //     },
        //     body: JSON.stringify(data)
        // })

        navigate('/project');
    }

    return (
        <Stack gap={3}>
            <Typography variant="h5">Confirm Project Details</Typography>
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
                    <Stack flexDirection="row" justifyContent="center">
                        <Button variant="contained" 
                            onClick={() => handle()}
                            sx={{
                                bgcolor: '#BB86FC',
                                textTransform: 'uppercase'
                            }}
                        >Confirm</Button>
                    </Stack>
                    <Typography variant='body2' sx={{ textAlign: 'center' }}>
                        It's very important to confirm accuracy of this information so we can properly se expectations with collectors
                    </Typography>
                </Stack>
            </Stack>
            
        </Stack>
    )
}
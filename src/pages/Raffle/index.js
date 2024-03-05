import {
    Box,
    Button,
    Stack,
    Typography,
    OutlinedInput,
    useMediaQuery
} from '@mui/material';
import { useTheme } from "@mui/material/styles";

export default function Raffle () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box
        >
            <Box sx={{ py: 4 }}>
                <Typography>
                    Use PREMINT to randomly choose people who will be guaranteed a spot on your list and those who are waitlisted. 
                    You are solely responsible for ensuring that any promotion you administer using PREMINT’s tools comply with all applicable laws.
                </Typography>
            </Box>
            <Box>
                <Typography variant="h5">Total Raffle Spots</Typography>
                <Stack flexDirection={matchUpMd ? "row" : "column"} gap={5} sx={{ pt: 3 }}>
                    <Stack gap={2.5} flex={1}>
                        <Typography>How many winners?</Typography>
                        <OutlinedInput 
                            size="small"
                            sx={{
                                bgcolor: '#fff'
                            }}
                        />
                        <Typography variant="body2">
                            These are the people who will be guaranteed a spot to mint. 
                            This should not be a number larger than the total supply.
                        </Typography>
                    </Stack>
                    <Stack gap={2.5} flex={1}>
                        <Typography>How many for the whitelist?</Typography>
                        <OutlinedInput 
                            size="small"
                            sx={{
                                bgcolor: '#fff'
                            }}
                        />
                        <Typography variant="body2">
                            You can use the waitlist however you'd like. 
                            Typically projects have a winner mint time, and a waitlist mint time before opening up to the public.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack flexDirection="row" justifyContent="flex-end" sx={{ pt: 8 }}>
                    <Button variant="contained" 
                        sx={{
                            bgcolor: '#BB86FC',
                            textTransform: 'uppercase'
                        }}
                    >Pick Winners</Button>
                </Stack>
            </Box>
        </Box>
    );
}
import { useState } from 'react';
import { 
    Box, 
} from '@mui/material';
import Detail from './Detail';
import Spot from './Spot';
import Overallocate from './Overallocate';
import Period from './Period';
import Raffle from './Raffle';
import Confirm from './Confirm';

export default function Create () {
    const [step, setStep] =  useState(1);
    const [project, setProject] = useState({});
    return (
        <Box>
            {
                step == 1
                ? <Detail setStep={setStep} setProject={setProject} project={project} />
                : step == 2 
                ? <Spot setStep={setStep} setProject={setProject} project={project} />
                : step == 3
                // ? <Overallocate setStep={setStep} setProject={setProject} project={project} />
                // : step == 4
                ? <Period setStep={setStep} setProject={setProject} project={project} /> 
                : step == 4
                ? <Raffle setStep={setStep} setProject={setProject} project={project} />
                : step == 5
                ? <Confirm setStep={setStep} setProject={setProject} project={project} />
                : <></>
            }
        </Box>
    );
}
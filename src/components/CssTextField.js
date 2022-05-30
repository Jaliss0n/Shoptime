import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const CssTextField = styled(TextField)(({  }) => ({
    '& .MuiOutlinedInput-root': {
        '&:hover, & .MuiOutlinedInput-input,': {
            color: 'white'
        },
        '& fieldset': {
        borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
            borderWidth: 4
        },
        '&.Mui-focused fieldset': {
        borderColor: 'white',
        },
    },
    '& .MuiFilledInput-input':{
        color:'white'
    }
}));

export default CssTextField;
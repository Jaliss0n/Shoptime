import styled from "@emotion/styled";
import { Box } from "@mui/system";
import theme from "../theme";


const Bodycss = styled(Box)(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '240px',
    height: '100vh',
    width: '100% - 240',
    [theme.breakpoints.down('sm')]: {
        paddingLeft: '0',
        height: '130vh'
    }
}))

export default Bodycss;
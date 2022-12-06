import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    box_first: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    box_firstTxt: {
        width: '310px',
    },
    input: {
        height: 43,
        backgroundColor: '#f4f4f4',
        border: 'none'
    },
    box_two: {
        display: 'flex',
        justifyContent: 'flex-end',
        cursor: 'pointer'
    },
    addBtn: {
        '&.css-1e6y48t-MuiButtonBase-root-MuiButton-root': {
            color: 'black',
            padding: '10px 20px',
            backgroundColor: '#f4f4f4'
        },
    },
    addTask: {
        '&.css-1e6y48t-MuiButtonBase-root-MuiButton-root': {
            color: 'black',
            padding: '10px 20px',
            backgroundColor: '#f4f4f4'
        },
    },
    addTxt: {
        backgroundColor: '#f4f4f4',
    },
    dataBox: {
        width: '450px',
        border: '1px solid #EEEDE7',
        margin: '20px 0px',
        padding: '20px 10px'
    },
    closeIcn: {
        float: 'right',
        cursor: 'pointer'
    },
    dataTxt: {
        overflow: 'hidden',
        textAlign: 'left'
    },
  
}))

export { useStyles };
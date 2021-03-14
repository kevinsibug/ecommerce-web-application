import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({ 
    root: {
        // maxWidth: '70%',
        height: '100%',
        borderRadius: '16px 16px 0px 0px',
        display: 'flex',
        flexDirection: 'column',
    },
    media: {
        height: 0,
        paddingTop: '50%',
    },
    cardActions: {
        margin: 'auto 0 0',
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },

}));
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({ 
    root: {
        maxWidth: '70%'
    },
    media: {
        height: 0,
        paddingTop: '50%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },

}));
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './SimpleModal.css'
import {NavLink} from "react-router-dom";
import joy from '../../img/modal-joy.png'
import Basket from "../../pages/Basket/Basket";

// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #DA3B5E',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);


    const showGoods = () => {
        localStorage.setItem('showGoods', JSON.stringify(props.storage))
    }

    const handleOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
        showGoods()
    };

    const body = (
        <div style={modalStyle} className={classes.paper} id={'modal__id'}>
            <h2 id="simple-modal-title">Вы успешно оформили заказ</h2>
            <img src={joy} alt=""/>
            <p onClick={handleClose} id="simple-modal-description">
                <NavLink exact to={'/ShowGoods'}>посмотреть товары</NavLink>
            </p>
        </div>
    );

    return (
        <div>
            <button type="button" onClick={e => {
                handleOpen(e)
            }}>
                заказать
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

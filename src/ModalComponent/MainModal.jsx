import React from 'react'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import UpdateVisitor from '../WidgetComponent/UpdateVisitor';
import NewEntryVisitor from '../WidgetComponent/NewEntryVisitor';
import NewSociety from '../WidgetComponent/NewSociety';
import UpdateSociety from '../WidgetComponent/UpdateSociety';


const MainModal = (props) => {

    return (
        <>
            <Dialog
                open={props.isDialogOpen}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                {props.modalType === 'newEntry' ?
                    <DialogTitle>Add New visitor</DialogTitle>

                    : props.modalType === 'entryDetails' ?
                        <DialogTitle>Visitor's Details</DialogTitle>
                        : props.modalType === 'newEntrySociety' ?
                            <DialogTitle>Add New Society</DialogTitle>
                            : props.modalType === 'entryDetailsSociety' ?
                                <DialogTitle>Society's Details</DialogTitle>
                                : null
                }

                <DialogContent>
                    <hr className="mt-0 mb-4" />
                    {props.modalType === 'newEntry' ?
                        <NewEntryVisitor />
                        : props.modalType === 'entryDetails' ?
                            <UpdateVisitor />
                            : props.modalType === 'newEntrySociety' ?
                                <NewSociety />
                                : props.modalType === 'entryDetailsSociety' ?
                                    <UpdateSociety />
                                    : null
                    }
                    <hr />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.closeModal()} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default MainModal;
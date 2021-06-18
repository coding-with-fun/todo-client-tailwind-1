import { Backdrop, Button, Fade, Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    inputField: {
        margin: theme.spacing(1, 0),
    },

    submitButton: {
        margin: theme.spacing(1, 0),
    },
}));

const AddToDoModal = ({ handleToggleAddToDoModal, isAddModalOpen }) => {
    const classes = useStyles();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        shouldFocusError: true,
    });

    const onSubmit = (data) => {
        console.log(data);
        handleToggleAddToDoModal();
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="flex items-center justify-center"
            open={isAddModalOpen}
            onClose={handleToggleAddToDoModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={isAddModalOpen}>
                <div className="bg-white rounded-md shadow-sm p-6 mx-4 sm:mx-0 w-full sm:w-4/6 md:w-2/6">
                    <div className="flex justify-end">
                        <CloseIcon
                            onClick={handleToggleAddToDoModal}
                            className="cursor-pointer"
                        />
                    </div>

                    <div className="text-3xl text-center p-4">Add new ToDo</div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col items-center sm:px-5 px-0"
                    >
                        <TextField
                            className={classes.inputField}
                            variant="outlined"
                            margin="dense"
                            placeholder="Enter title"
                            fullWidth
                            label="Title"
                            name="title"
                            {...register("title", {
                                required: "Title is required",
                            })}
                            error={Boolean(errors.title)}
                            helperText={errors.title?.message}
                        />

                        <TextField
                            className={classes.inputField}
                            variant="outlined"
                            margin="dense"
                            placeholder="Enter description"
                            fullWidth
                            label="Description"
                            name="description"
                            {...register("description")}
                        />

                        <Button
                            variant="outlined"
                            color="primary"
                            type="submit"
                            className={`${classes.submitButton} focus:outline-none`}
                        >
                            Add
                        </Button>
                    </form>
                </div>
            </Fade>
        </Modal>
    );
};

export default AddToDoModal;

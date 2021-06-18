import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    inputField: {
        margin: theme.spacing(1, 0),

        "& .MuiOutlinedInput-root": {
            borderRadius: 20,
            paddingRight: 10,
            paddingLeft: 10,
        },
    },
}));

const SearchToDo = () => {
    const classes = useStyles();
    return (
        <div className="container mx-auto w-3/4 lg:w-1/3 sm:w-1/2">
            <TextField
                variant="outlined"
                margin="dense"
                placeholder="Search..."
                fullWidth
                name="search"
                className={classes.inputField}
            />
        </div>
    );
};

export default SearchToDo;

import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions } from '@mui/material';
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    backgroundColor: 'blue',
    color: 'blue',
    fontWeight: '800',
    fontFamily: 'Arial',
    border: '2px solid blue', // Add a white border
    '&:hover': {
        backgroundColor: 'transparent',
    },
}));

const StyledGrid = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(2),
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
}));

const categories = ['Academic and Career Focus', 'Geographic and Campus Preferences', 'Support and Services', 'Diversity and Inclusivity', 'Learning Environment and Opportunities', 'Campus Facilities and Lifestyle'];

const CategoryButtons = () => {
    const [open, setOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('');

    const handleClickOpen = (category: string) => {
        setActiveCategory(category);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <StyledGrid>
            {categories.map((category) => (
                <StyledButton color="primary"  onClick={() => handleClickOpen(category)} key={category}>
                    {category}
                </StyledButton>
            ))}

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Suggested Questions for {activeCategory}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Here are some suggested questions...
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </StyledGrid>
    );
};

export default CategoryButtons;
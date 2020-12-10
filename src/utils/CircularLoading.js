import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

import Box from "@material-ui/core/Box";


export function CircularLoading() {
    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <CircularProgress disableShrink size={90} sm={6} />
            </Box>
        </div>
    )
}

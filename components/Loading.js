import { CircularProgress } from '@material-ui/core'
import React from 'react'

const Loading = () => {
    return (
        <div style={{width: "100%", height: "50vh", display: "grid" ,placeItems: "center"}}>
            <CircularProgress />
        </div>
    )
}

export default Loading

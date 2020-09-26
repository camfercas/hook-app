import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('Me llamo');

    return (
        <small>
            {value}
        </small>
    )
}
)
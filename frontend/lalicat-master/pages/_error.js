import React from "react"

const Error = ({statusCode}) => {
    return (
        <h1>Error: {statusCode}</h1>
    )
}

Error.getInitialProps = ({res}) => {
    const statusCode = res?.statusCode || 500;

    return {statusCode}
}

export default Error
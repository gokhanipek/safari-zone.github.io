import React from 'react'

export default class Failure extends React.Component {
    render() {
        return (
            <div>
                Scoreboard and Prize
                <h1>Hello { this.props.location.userName }</h1>
                you lost
            </div>
        )
    }
}

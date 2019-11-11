import React from 'react'

class Tracker extends React.Component {

constructor(props) {
    super(props)
    this.state = {
        data: []
    }
}

render () {

    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label for='mood-select'>How are you feeling?</label>
                <select id='mood-select'>
                    <option value=''>Select your mood</option>
                    <option value='good'>Good</option>
                    <option value='bad'>Bad</option>
                    <option value='neutral'>Neutral</option>
                </select>
                <input type='text' name='notes' placeholder='Additional Notes'></input>
                <button type="submit">Record Mood</button>
            </form>
        </div>
    )

}

}

export default Tracker
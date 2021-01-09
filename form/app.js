let TextInput = () => {
    return (
    <div>
    <input type="text" style={{color:"blue"}} />
    </div> 
    )
}

let YesNoRadio = () => {
    return (
        <div>
        <input type="radio" value="yes"/>yes<input type="radio" value="no"/>no
        </div>
    )
}

let SubmitButton = () => {
    return(
        <div>
            <input type="submit" style={{color:"blue"}} />
        </div>
    )
}

let Form = () => {
    return(
        <form>
            <TextInput />
            <TextInput />
            <TextInput />
            <YesNoRadio />
            <YesNoRadio />
            <SubmitButton />
        </form>
    )
}


ReactDOM.render(<Form />, document.getElementById('root'))
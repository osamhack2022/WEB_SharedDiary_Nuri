export { Signup };

function Signup() {
    const onSubmit = ({username, email, password}) => {

    }
    return (
        <>
            <div className="signup">
                <input type="text" name="username" placeholder="username"/>
                <input type="text" name="email" placeholder="email"/>
                <input type="password" name="password" placeholder="password"/>
            </div>
            <button>button</button>
        </>  
    );      
}
import React, { useState } from 'react'
import Resetpassword from '../../components/auth/resetpassword/Resetpassword'
import Forgotpassword from '../../components/auth/forgotpassword/Forgotpassword'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'

function Loginhelp() {
    let history = useHistory();
    const [reset, setReset] = useState(false)
    const [error, setError] = useState(null)

    // handle forgot password || generate code
    async function handle__forgot__password(username) {
        await Auth.forgotPassword(username).then(() => {
            setReset(true)
        }).catch(err => {
            setReset(false)
            setError(err.message)
        });
    }

    // handle reset password
    async function handle__reset__password(values) {
        const username = values.email 
        const code = values.code 
        const new_password = values.password
        await Auth.forgotPasswordSubmit(username, code, new_password)
            .then(() => {
                history.push("/login"); // send to login
            })
            .catch(err => {
                setError(err.message)
            });
    }
    return (
        <div>
            { reset ? (
                <Resetpassword error={error} reset={reset} handle__reset__password={handle__reset__password} />
            ) : (
                <Forgotpassword error={error} reset={reset} handle__forgot__password={handle__forgot__password} />
            )
            }
        </div>
    )
}

export default Loginhelp

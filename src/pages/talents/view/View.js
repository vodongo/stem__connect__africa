import React from 'react'
import { useParams } from "react-router-dom";
import Header from '../../../components/parts/header'

function ViewTalents() {
    let { id } = useParams();
    return (
        <div>
            <Header />
            <div>ID {id}</div>
        </div>
    )
}

export default ViewTalents

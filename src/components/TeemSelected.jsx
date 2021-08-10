import React from "react";
import Substitutes from "./Substitutes";
import Titulaires from "./Titulaires"

const TeemSelected = ({players}) => (
    <section>
        <Substitutes />
        <Titulaires />
    </section>
)

export default TeemSelected
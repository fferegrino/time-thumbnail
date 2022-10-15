import "./style.css"
import React, { useState } from 'react'
import { InputsForm } from "./InputsForm"
import { calculateTz } from "./timeHelpers"
import { TimesPanel } from "./TimesPanel"


export default function App() {

    const [image, setImage] = useState('')
    const [data, setData] = useState(new Array());
    const updateSettings = (inputDate) => {
        const sortedTimes = calculateTz(inputDate);
        setData(sortedTimes)
    }
    const updateImage = (image) => (
        setImage(image)
    );

    return (
        <div>
            <InputsForm updateSettings={updateSettings} updateImage={updateImage} />
            <div id="main">
                <div id="header">
                    🔴 EN VIVO
                </div>
                <div id="cover">
                    <img id="thumbnail" src={image} />
                </div>
                <div id="footer">
                    <div id="dates">

                    </div>
                    <TimesPanel data={data} />
                </div>
            </div>
            <a download="image-name.png" id="download">download img</a>
        </div>
    )
}
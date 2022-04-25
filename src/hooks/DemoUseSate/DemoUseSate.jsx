import React, { useState } from 'react'
import TangGIamFontChu from '../TangGIamFontChu/TangGIamFontChu';

export default function DemoUseSate() {

    const [number, setNumer] = useState(1);
    const [imgSrc, setImgSrc] = useState('https://i.pravatar.cc?u=1');
    console.log('rednder')
    return (
        <div className='container'>
            <h3>Number:{number}</h3>
            <button className="btn btn-success mr-2" onClick={() => setNumer(number + 1)}>+</button>
            <button className="btn btn-success mr-2" onClick={() => setNumer(number - 1)}>-</button>
            <hr />
            <div className="card w-25">
                <img src={imgSrc} alt="..." className='w-100' />
                <div className="card-body">
                    <button className="btn btn-outline-danger" onClick={() => {

                        let numberRandom = Math.floor(Math.random() * 100);
                        let newLink = `https://i.pravatar.cc?u=${numberRandom}`;
                        setImgSrc(newLink)
                    }}>Random</button>
                </div>
            </div>

            <br />
            <hr />
            <h3>Bài tập tăng giảm font chữ</h3>
            <TangGIamFontChu/>
        </div>
    )
}

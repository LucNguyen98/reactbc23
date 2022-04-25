import React, { useEffect, useMemo, useState } from 'react';


const arrDiaDiem = [
    {
        id: 'HCM',
        name: 'TP.Hồ Chí Minh',
        arrayQuanHuyen: [
            { id: '01', name: 'Quận 1' },
            { id: '02', name: 'Quận 2' },
            { id: '03', name: 'Quận 3' },
        ]
    },
    {
        id: 'HN',
        name: 'Hà Nội',
        arrayQuanHuyen: [
            { id: '04', name: 'Hai Bà Trưng' },
            { id: '05', name: 'Hoàn Kiếm' },
            { id: '06', name: 'Ba Đình' },
        ]
    }
];

let newObj = arrDiaDiem.reduce((acc, current) => {
    let id = current.id;
    if (!acc[id]) {
        acc[id] = {
            name: current.name,
            arrayQuanHuyen: current.arrayQuanHuyen

        }
    }
    return acc

}, {});



export default function DemoUseEffect() {
    const [number, setNumber] = useState(1);
    const [like, setLike] = useState(1);
    const [idTP, setIdTP] = useState('');
    const [arrQH, setArrQH] = useState([]);
    // useEffect(() => {
    //     console.log('reRender')

    //     return () => {
    //         console.log('unmount')
    //     }
    // })

    useEffect(() => {
        let timeOut = setInterval(() => {
            console.log('call api')
        }, 1000);

        return () => clearInterval(timeOut)
    }, [])

    useEffect(() => {
        setLike(like + 1)
    }, [number]);

    // useEffect(() => {
    //     let arrayQuanHuyen = newObj[idTP].arrayQuanHuyen || [];
    //     setArrQH(arrayQuanHuyen);
    // }, [idTP]);


    const renderQuanHuyen = (arrQH) => {
        if (!Array.isArray(arrQH) || arrQH?.length === 0) {
            return <option value={''}>Hãy chọn thành phố</option>
        }
        return arrQH.map(qh => (
            <option key={qh.id} value={qh.id}>{qh.name}</option>
        ))
    }

    let arrayQuanHuyen = useMemo(() => newObj[idTP]?.arrayQuanHuyen || [], [idTP])

    return (
        <div className='container'>
            DemoUseEffect
            <h3>Number: {number}</h3>
            <button className="btn btn-success mr-2" onClick={() => setNumber(number + 1)}>+</button>

            <hr />
            <div className="form-group">
                <label >Chọn thành phố</label>
                <select className="form-control form-control-sm" value={idTP} onChange={(event) => {
                    const { value } = event.target;
                    setIdTP(value)
                }}>
                    <option value={''}>Chọn thành phố</option>
                    <option value={'HCM'}>Hồ Chí Minh</option>
                    <option value={'HN'}>Hà Nội</option>
                </select>
            </div>

            <div className="form-group">
                <label >Chọn quận huyện</label>
                <select className="form-control form-control-sm" name="" id="">
                    {renderQuanHuyen(arrayQuanHuyen)}
                </select>
            </div>
        </div>
    )
}

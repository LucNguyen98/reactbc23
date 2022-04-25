import React, { useState } from 'react'

function TangGIamFontChu() {
    const [fontSize, setFontSize] = useState(14);
    return (
        <div className='container pb-5'>
            <p style={{
                fontSize: fontSize + 'px'
            }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quasi nam dignissimos laboriosam saepe assumenda explicabo rem blanditiis at tempora consequuntur deserunt, accusamus magni porro nihil ea fugit repellat impedit?
                Vitae voluptatem quae explicabo repellendus iusto similique quia sapiente reprehenderit voluptates autem doloribus sed in eius saepe, voluptas exercitationem quos ab obcaecati voluptatum aperiam! Voluptatum ut quasi alias quidem commodi.
                Ut ab odio, maxime delectus, officia explicabo, exercitationem vero numquam est magnam provident iure eius iusto minima expedita excepturi! Excepturi explicabo earum, fugit provident nostrum nobis voluptas vero molestiae beatae.
            </p>

            <button className="btn btn-primary" onClick={() => setFontSize(fontSize + 1)}>+</button>
            <button className="btn btn-primary ml-2" onClick={() => setFontSize(fontSize - 1)}>-</button>
        </div>
    )
}
export default React.memo(TangGIamFontChu)
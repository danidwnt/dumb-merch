import React from 'react'
import { Button } from 'react-bootstrap'
import NavbarComponent from '../components/NavbarComponent'

const DetailProduct = () => {
    return (
        <div className='background'>
            <NavbarComponent />

            <div className='content-detail-product'>
                <div className='side-left-product'>
                    <img src="assets/Rectangle4.png" alt="" />
                </div>
                <div className='side-right-product'>
                   <h1>Mouse</h1>
                <p>Stock : 600</p>

                <p>- Wireless Mouse <br />
                    - Konektivitas wireless 2.4 GHz <br />
                    - Jarak wireless hingga 10 m <br />
                    - Plug and Play <br />
                    - Baterai tahan hingga 12 bulan 

                    <br />

                    Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.</p> 

                    <h3 className='harga'>RP. 300.900</h3>

                    <Button style={{backgroundColor: '#F74D4D', border:'none'}} className='btn-beli'>Buy</Button>
                </div>
                
            </div>
        </div>
    )
}

export default DetailProduct

import React from 'react'
import { firestore, storage } from '../index'
import { Products } from './Products'
import ChangeCart from './ChangeCart'
import { data } from './ChangeCart'
import firebase from 'firebase'
import { useState } from 'react'
import { InputGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { title } from 'process'
import Table from 'react-bootstrap/Table'

export const IndividualChangeProduct = ({ individualChangeProduct }) => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleUpload = () => {
        const uploadTask = storage.ref(`product-images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("product-images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url);
                    });
            }
        );
    };
    console.log("image: ", image);












    const funcUpdateImage = () => {
        // var myValue = document.getElementById("inputGroup-sizing-lg").value={title};
        //const inpu= document.getElementById("file").value;




        return (
            firestore.collection("Products").doc(individualChangeProduct.ID).update({
                "url": url
            })
                .then(() => {
                    // console.log("Document successfully updated!");
                }))
    }


    const funcUpdateTitle = () => {
        // var myValue = document.getElementById("inputGroup-sizing-lg").value={title};
        const input = window.prompt("", individualChangeProduct.title);




        return (
            firestore.collection("Products").doc(individualChangeProduct.ID).update({
                "title": input
            })
                .then(() => {
                    // console.log("Document successfully updated!");
                }))
    }

    const funcUpdateDisc = () => {
        // var myValue = document.getElementById("inputGroup-sizing-lg").value={title};
        const description = window.prompt("", individualChangeProduct.description);




        return (
            firestore.collection("Products").doc(individualChangeProduct.ID).update({
                "description": description
            })
                .then(() => {
                    // console.log("Document successfully updated!");
                }))
    }

    const funcUpdatePrice = () => {
        // var myValue = document.getElementById("inputGroup-sizing-lg").value={title};
        const price = Number(window.prompt("", individualChangeProduct.price));




        return (
            firestore.collection("Products").doc(individualChangeProduct.ID).update({
                "price": price
            })
                .then(() => {
                    console.log(price);
                }))
    }

    const funcUpdateData = () => {
        // var myValue = document.getElementById("inputGroup-sizing-lg").value={title};
        const data = window.prompt("", 0);




        return (
            firestore.collection("Products").doc(individualChangeProduct.ID).update({
                "date": data
            })
                .then(() => {
                    console.log("Document successfully updated!");
                }))
    }

    const funcUpdateSell = () => {
        //  var myValue = document.getElementById("title").title;
        const sell = window.prompt("", individualChangeProduct.sell);


        return (
            firestore.collection("Products").doc(individualChangeProduct.ID).update({
                "sell": sell
            })
                .then(() => {
                    console.log(individualChangeProduct.ID);
                }))
    }





    const deletePost = async (name) => {
        const snapshot = await firestore.collection('Products').limit(1).where('title', '==', name).get();

        const doc = snapshot.docs[0];
        doc.ref.delete();
        return doc.id;
    }








    return (

        <div className='product'>

            <div className='product-img'>
                <img src={individualChangeProduct.url} alt="product-img" />
            </div>


            <div style={{ margin: '0 0 0 50px' }}>
                <div>
                    <hr width='85%' />
                    <br />

                    <p>Изменение изображения</p>
                    <input type="file" onChange={handleChange} />
                    <br />
                    <button className='btn btn-danger  cart-btn' type='submit' onClick={handleUpload}>Загрузить выбраное изображение</button>
                    <br />
                    <progress value={progress} max="100" style={{ margin: '0 0 0 50px' }} />
                    <br />

                </div>

            </div>
            <div className='btn btn-danger btn-md cart-btn' type='submit' onClick={() => funcUpdateImage()} >Изменить изображение</div>
            <hr width='85%' />

            <div className='product-text title' style={{ color: 'black' }}>{individualChangeProduct.title}</div>
           

            <div className='btn btn-danger btn-md cart-btn'  type='submit' onClick={() => funcUpdateTitle()} >Изменить название</div>
            <hr width='85%' />

            <div className='product-text description'>{individualChangeProduct.description}</div>
          

            <div className='btn btn-danger btn-md cart-btn'  type='submit' onClick={() => funcUpdateDisc()} >Изменить описание</div>
            <hr width='85%' />

            <div className='product-text price'>$ {individualChangeProduct.price}</div>
        

            <div className='btn btn-danger btn-md cart-btn'  type='submit' onClick={() => funcUpdatePrice()} >Изменить цену</div>
            <hr width='85%' />

            <div className='product-text price'>{individualChangeProduct.date}</div>
           

            <div className='btn btn-danger btn-md cart-btn'  type='submit' onClick={() => funcUpdateData()} >Изменить дату скидки</div>
            <hr width='85%' />
            <div className='product-text price'>{individualChangeProduct.sell}</div>
           

            <div className='btn btn-danger btn-md cart-btn'  type='submit' onClick={() => funcUpdateSell()} >Изменить % скидки</div>
            <hr width='85%' />



            <div className='btn btn-danger btn-md cart-btn' onClick={() => deletePost(individualChangeProduct.title)}>Удалить товар</div>

        </div>

    )
}


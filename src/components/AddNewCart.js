import React, { Component } from 'react'
import { useState } from "react";
import { firestore, storage } from '../index';

const AddNewCart = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [sell, setSell] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState('');
    const types = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG'];

    const handleProductImg = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && types.includes(selectedFile.type)) {
                setImage(selectedFile);
                setImageError('');
            }
        }
    }

    const handleAddProducts = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${image.name}`).put(image);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(progress);
        }, error => setUploadError(error.message), () => {
            storage.ref('product-images').child(image.name).getDownloadURL().then(url => {
                firestore.collection('Products').add({
                    title,
                    description,
                    price: Number(price),
                    sell: Number(sell),
                    date: Number(date),
                    url
                }).then(() => {
                    setSuccessMsg('Товар добавлен');
                    setTitle('');
                    setDescription('');
                    setPrice('');
                    setSell('');
                    setDate('');
                    document.getElementById('file').value = '';
                    setImageError('');
                    setUploadError('');
                    setTimeout(() => {
                        setSuccessMsg('');
                    }, 3000)
                }).catch(error => setUploadError(error.message));
            })
        })
    }

    const [successMsg, setSuccessMsg] = useState('');
    const [uploadError, setUploadError] = useState('');
    return (
        <div className='container'>
            <br></br>
            <br></br>
            <h1>Добавление товара</h1>
            <hr></hr>
            {successMsg && <>
                <div className='success-msg'>{successMsg}</div>
            </>}
            <br></br>
            <form autoComplete='off' className='form-group' onSubmit={handleAddProducts}>
                <label>Имя товара</label>
                <input type='text' className='form-control' required minlength="20" maxLength="60"
                    onChange={(e) => setTitle(e.target.value)} value={title}></input>
                <br></br>
                <label>Описание товара</label>
                <input type='text' className='form-control' maxLength="200"
                    onChange={(e) => setDescription(e.target.value)} value={description}></input>
                <br></br>
                <label>Цена товара</label>
                <input type='number' className='form-control' required
                    onChange={(e) => setPrice(e.target.value)} value={price}></input>
                <br></br>
                <label>Скидка</label>
                <input type='number' className='form-control'
                    onChange={(e) => setSell(e.target.value)} valu e={sell}></input>
                <br></br>
                <label>Дата окончания скидки (Формат ГГГГ.ММ.ДД)</label>
                <input type='text' className='form-control' 
                    onChange={(e) => setDate(e.target.value)} value={date}></input>
                <br></br>
                <label>Изображение</label>
                <input type='file' id='file' className='form-control' required
                    onChange={handleProductImg} ></input>
                {imageError && <>
                    <br></br>
                    <div className='error-msg'>{imageError}</div>
                </>}
                <br></br>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type='submit' className='btn btn-success btn-md'>
                        Добавить
                    </button>
                </div>
            </form>
            {uploadError && <>
                <br></br>
                <div className='error-msg'>{uploadError}</div>
            </>}
        </div>
    );
};
export default AddNewCart;
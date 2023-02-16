import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddChild from './AddChild';
import Guidelines from './Guidelines';
import Form from './Form';
import Test from './Exel';
export default function MyRouter() {

    return (
        <div className="nav nav-tabs" >
            <Routes>
                <Route path='/' element={<Guidelines />} />
                <Route path='/addChild' element={<AddChild />} />
                <Route path='/form' element={<Form/>} />
                <Route path='/exel' element={<Test/>} />
            </Routes>
        </div>
    );
}
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Article from './pages/article'
import Contact from './pages/contact'
import Auth from './pages/auth'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element=<Article /> />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Auth isLogin={true} />} />
            <Route path="/register" element={<Auth isLogin={false} />} />

        </Routes>
    )
}

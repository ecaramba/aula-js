import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'

import "bootstrap/dist/css/bootstrap.css"

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Links from './Links';
import Pokedex from './Pokedex';
import Ola from './Ola';
import Cidades from './Cidades'
import Tarefas from './Tarefas';
import Login from './Login';

const rotas = createBrowserRouter([
    {
        path: "/",
        element: <h1>Exemplos feitos em aula</h1>
    },
    {
        path: "/pokedex",
        element: <Pokedex />
    }, 
    {
        path: "/ola",
        element: <Ola />
    },
    {
        path: "/cidades",
        element: <Cidades />
    }, 
    {
        path: "/tarefas",
        element: <Tarefas />
    },
    {
        path: "/login",
        element: <Login />
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div className='container'>
        <Links />
        <RouterProvider router={ rotas }></RouterProvider>

    </div>

);



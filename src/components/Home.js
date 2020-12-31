import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Progress, Button, Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './home.css'


const Home = () => {

    const { Header, Footer, Content } = Layout;
    const { SubMenu } = Menu;

    const [current, setCurrent ] = useState('mail');

    const handleClick = e => {
        setCurrent( e.key );
      };


    useEffect(() => {
        window.onscroll = function (){
            if (window.pageYOffset > 0){
                if (document.getElementById('header')){
                    document.getElementById('header').style.height = '70px'
                    document.getElementById('header').style.backgroundColor = '#f2f2f2'
                    document.getElementById('header').style.transition = "height 1.2s, background-color 1.2s";
                    if(document.getElementById('header-title')){
                        document.getElementById('header-title').style.color = 'grey'
                    }
                    if (document.getElementById('header-link')){
                        document.getElementById('header-link').style.color = 'grey'
                    }
                    if(document.getElementById('header-servers')){
                        document.getElementById('header-servers').style.color = 'grey'
                    }
                    if(document.getElementById('hola')){
                        document.getElementById('hola').style.color = 'grey'
                    }
                }
            }else{
                if(document.getElementById('header')){
                    document.getElementById('header').style.height = '80px'
                    document.getElementById('header').style.backgroundColor = 'transparent'
                    document.getElementById('header').style.transition = "height 1.2s, background-color 1.2s";
                    if(document.getElementById('header-title')){
                        document.getElementById('header-title').style.color = 'white'
                    }
                    if (document.getElementById('header-link')){
                        document.getElementById('header-link').style.color = 'white'
                    }
                    if(document.getElementById('header-servers')){
                        document.getElementById('header-servers').style.color = 'white'
                    }
                    if(document.getElementById('hola')){
                        document.getElementById('hola').style.color = 'white'
                    }
                }
            }
        }

        let progressBar = document.getElementById('progress');
        function ScrollProgressBar(){
            let scrollTop =    document.documentElement.scrollTop;
            let scrollHeight = document.documentElement.scrollHeight;
            let clientHeight = document.documentElement.clientHeight;
            
            let windowHeight = scrollHeight - clientHeight;
            let porcentaje = scrollTop / windowHeight * 100;

            progressBar.style.width = porcentaje + '%';
  }
            window.addEventListener('scroll',  ScrollProgressBar);
      
    }, [])
   
    return ( 
        <h1>Home</h1>

     );
}
 
export default Home;
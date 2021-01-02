import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Progress, Button, Menu } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../components/home.css'


const LayoutBasic = ({ routes }) => {

    const { SubMenu } = Menu;


    const { Header, Footer, Content, Sider } = Layout;

    const [collapsed, setCollapsed] = useState(false);

    const [current, setCurrent] = useState('');
    const [login, setLogin] = useState(true);

    const handleClick = e => {
        setCurrent(e.key);
    };

    useEffect(() => {
        window.onscroll = function () {
            if (window.pageYOffset > 0) {
                if (document.getElementById('header')) {
                    document.getElementById('header').style.height = '70px'
                    document.getElementById('header').style.backgroundColor = '#f2f2f2'
                    document.getElementById('header').style.transition = "height 1.2s, background-color 1.2s";
                    if (document.getElementById('header-title')) {
                        document.getElementById('header-title').style.color = 'grey'
                    }
                    if (document.getElementById('header-link')) {
                        document.getElementById('header-link').style.color = 'grey'
                    }
                    if (document.getElementById('header-servers')) {
                        document.getElementById('header-servers').style.color = 'grey'
                    }
                    if (document.getElementById('hola')) {
                        document.getElementById('hola').style.color = 'grey'
                    }
                }
            } else {
                if (document.getElementById('header')) {
                    document.getElementById('header').style.height = '80px'
                    document.getElementById('header').style.backgroundColor = 'transparent'
                    document.getElementById('header').style.transition = "height 1.2s, background-color 1.2s";
                    if (document.getElementById('header-title')) {
                        document.getElementById('header-title').style.color = 'white'
                    }
                    if (document.getElementById('header-link')) {
                        document.getElementById('header-link').style.color = 'white'
                    }
                    if (document.getElementById('header-servers')) {
                        document.getElementById('header-servers').style.color = 'white'
                    }
                    if (document.getElementById('hola')) {
                        document.getElementById('hola').style.color = 'white'
                    }
                }
            }
        }

        let progressBar = document.getElementById('progress');
        function ScrollProgressBar() {
            let scrollTop = document.documentElement.scrollTop;
            let scrollHeight = document.documentElement.scrollHeight;
            let clientHeight = document.documentElement.clientHeight;

            let windowHeight = scrollHeight - clientHeight;
            let porcentaje = scrollTop / windowHeight * 100;

            progressBar.style.width = porcentaje + '%';
        }
        window.addEventListener('scroll', ScrollProgressBar);

    }, [])


    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };


    return (
        <Layout className="layout ">
<Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }} id="header">
    <div style={{ width: 256 }}
        style={{ position: 'absolute', top: '0', left: '0' }}>
        <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
        >
            <SubMenu key="sub1" icon={<MailOutlined />} title="Counter Strike">
                <Menu.Item key="1"><Link to="/Counter-Strike">Counter Strike 1.6</Link></Menu.Item>
                <Menu.Item key="2">Source</Menu.Item>
                <Menu.Item key="3">Condition Zero</Menu.Item>
                <Menu.Item key="4"><Link to="/CS-GO">Counter Strike Global Offensive</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="5" icon={<ContainerOutlined />}>
            <Link to="/Farcry">Farcry 3</Link>
</Menu.Item>
            <SubMenu key="sub2" icon={<MailOutlined />} title="MMORPG">
                <Menu.Item key="6">Argentum Online</Menu.Item>
                <Menu.Item key="7">Mu</Menu.Item>
                <Menu.Item key="8">Diablo 3</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub4" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </SubMenu>
        </Menu>
    </div>
    <Link to="/" onClick={() => setCurrent('HOME')}><h1 className="header-title" id="header-title">OCTARI</h1></Link>
    <Link to="/admin" className="header-link" id="header-link"> {login ? 'Octavio' : <Button type="primary">Ingresar</Button>} </Link>
    <Progress id="progress" percent={100} size="small" status="exception" style={{ position: 'absolute', left: '0', bottom: '0', marginBottom: '-5px', width: "0" }} showInfo={false} />
</Header>
<Content style={{ marginTop: '80px' }}>
    <LoadRoutes routes={routes} />
</Content>
<Footer className="footer">Todos los derechos reservados. OCTARY 2020 &copy;</Footer>
</Layout>
    );
}

const LoadRoutes = ({ routes }) => {

    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    );
}

export default LayoutBasic;
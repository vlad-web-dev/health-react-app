import {Layout, Menu} from 'antd';
import './App.css'
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Appointments from "./components/Appointments";
import Events from "./components/Events";
import Doctors from "./components/Doctors";
import Clients from "./components/Clients";
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const {Sider} = Layout;


export default function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                    >
                        <div className="logo"/>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<UserOutlined/>}>
                                <Link to="/appointments">Appointments</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                                <Link to="/events">Events</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UploadOutlined/>}>
                                <Link to="/doctors">Doctors</Link>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<UserOutlined/>}>
                                <Link to="/clients">Clients</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>

                    <Switch>
                        <Redirect exact  from="/" to="/appointments" />

                        <Route path="/appointments">
                            <Appointments/>
                        </Route>
                        <Route path="/events">
                            <Events/>
                        </Route>
                        <Route path="/doctors">
                            <Doctors/>
                        </Route>
                        <Route path="/clients">
                            <Clients/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

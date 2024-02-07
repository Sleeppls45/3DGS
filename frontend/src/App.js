import React from 'react';
import './App.css';
import { Loading3QuartersOutlined, HighlightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function App () {
    return (
        <div className={"app"}>
            <div className={"content"}>
                <div className={"row"}>
                    <div className={"tool"}>
                        <Button icon={<Loading3QuartersOutlined />}>套索</Button>
                        <Button icon={<HighlightOutlined />}>画笔</Button>
                    </div>
                    <div className={"block"} id={"block1"}>1</div>
                    <div className={"block"} id={"block2"}>2</div>
                    <div className={"block"} id={"block3"}>3</div>
                </div>
                <div className={"row"}>
                    <div className={"block"} id={"block4"}>4</div>
                </div>
            </div>
        </div>
    );
}

export default App;
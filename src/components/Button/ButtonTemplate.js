import React from 'react';
import "./button.css";
import { Button } from 'antd';
import {  useDispatch } from 'react-redux'

export const ButtonTemplate = (props) => {
    const dispatch = useDispatch();

    return <Button htmlType={props.htmlType} onClick={() => dispatch(props.actionBtn())} className={props.className} type={props.type}>{props.children}</Button>
}
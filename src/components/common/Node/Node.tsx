import React from 'react';
import { AiOutlineFileText } from 'react-icons/ai';
import classes from './node.module.css';

interface IProps {
    name: string;
}

const Node: IProps = ({ name }: IProps) => {
    return (
        <div className={classes.nodeWrapper}>
            <AiOutlineFileText size={24}/>
            <li className={classes.node}>{name}</li>
        </div>
    )
};

export default Node

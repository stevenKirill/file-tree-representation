import React, { useState } from 'react';
import { IChild } from '../../../models/models';
import classes from './folder.module.css';
import { AiFillFolderAdd, AiOutlineMinusCircle, AiOutlineFileText } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';
import Node from '../../common/Node/Node';

interface IProps {
    data: IChild | null
    root: boolean;
};

export const Folder = ({ data, root }: IProps) => {
    const [opened,setisOpened] = useState<boolean>(false);
    const hasChildren = data?.children;

    const renderer = () => {
        if (hasChildren) {
            return (
                <ul>
                    <div className={classes.openerWrapper}>
                        {root && <span className={classes.rootNode}>{data.name}</span>}
                        {!opened ?
                            <BsPlusCircle 
                                size={24} className='pointer'
                                onClick={() => setisOpened(true)}
                            /> 
                            : 
                            <AiOutlineMinusCircle 
                                size={24} className='pointer'
                                onClick={() => setisOpened(false)}
                            />
                        }
                    </div>
                    {opened && data.children?.map((child, idx) => {
                        if (child.children && child.children.length > 0) {
                            return (
                                <>
                                    <div className={classes.node}>
                                        <AiFillFolderAdd size={24}/>
                                        <span>{child.name}</span>
                                        <Folder data={child} key={idx} root={false}/>
                                    </div>
                                </>
                            )
                        } else if(child.children && child.children.length === 0) {
                            return (
                                <div className={classes.node}>
                                    <AiFillFolderAdd size={24}/>
                                    <span>{child.name}</span>
                                    <Folder data={child} key={idx} root={false}/>
                                </div>
                            )

                        } else {
                            return (
                                <div className={classes.nodeWrapper}>
                                    <AiOutlineFileText size={24}/>
                                    <li className={classes.node}>{child?.name}</li>
                                </div>
                            )
                        }

                    })}
                </ul>
            )
        } else {
            return (
                <div className={classes.nodeWrapper}>
                    <AiOutlineFileText size={24}/>
                    <li className={classes.node}>{data?.name}</li>
                </div>
            )
        }
    }
    return (
        <>
            {renderer()}
        </>
    )
}

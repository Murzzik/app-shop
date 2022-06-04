import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../store';


const RepositoryCard: React.FC = () => {
    const dispatch: any = useDispatch()
    const { item } = useSelector((state: StoreState) => state.gitHubDetailRepositories)
    console.log(item)
    const { userId } = useParams()
    console.log(userId)

    return (
            <div className="repositoryCardWrapper">
                <Card
                        className="repositoryCard"
                        hoverable
                        cover={<img alt="example" src='https://www.thesprucepets.com/thmb/MSM1DIkbE1cePUU__IY0iddwbJw=/1080x1080/filters:no_upscale():max_bytes(150000):strip_icc()/31878200_171911650157470_2552192489247211520_n-5ba0559b4cedfd0025a1b9ac.jpg' />}
                >
                    <Meta title='Im little corgi' description='Wanna be your friend' />
                </Card>
            </div>
    );
};

export default RepositoryCard;


import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';


const RepositoryCard: React.FC = () => {

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


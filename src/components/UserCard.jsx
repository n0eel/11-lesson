import React from 'react';
import { DeleteOutlined, EditOutlined, EllipsisOutlined, } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;
const UserCard = ({item, deleteStudent}) => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img className='w-[170px]'
        alt="example"
        src={item.img}
      />
    }
    actions={[
      <DeleteOutlined onClick={() => deleteStudent(item.id)} className='scale-[1.4] hover:!text-red-500' key="delete" />,
      <EditOutlined className='scale-[1.4]' key="edit" />,
      <EllipsisOutlined className='scale-[1.8] hover:!text-black' key="ellipsis" />,
    ]}
  >
    <Meta
      title={<h2 className='text-[18px]'>{`${item.name} ${item.surname} - ${item.age} y.o`}</h2>}
      description={<p className='text-[15px]'>{`Studies: At ${item.study}`}</p>}
    />
  </Card>
);
export default UserCard;
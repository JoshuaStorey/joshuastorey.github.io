import React, { FunctionComponent, PropsWithChildren } from 'react';

type Props = {};
interface dividerProps {
  title: string;
}
const Divider: FunctionComponent<PropsWithChildren<dividerProps>> = ({
  title,
}) => {
  return (
    <div id='divider' className='text-right px-14 '>
      <p className='text-xs font-bold'>{title}</p>
      <hr className='h-px my-4 bg-gray-400 border-0 dark:bg-gray-900' />
    </div>
  );
};

export default Divider;

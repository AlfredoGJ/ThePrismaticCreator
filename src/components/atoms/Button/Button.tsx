import * as React from 'react';

export interface IAppProps {

}

export default function Button(props: IAppProps) {
    return (
        <button className=" p-2 bg-purple-900 rounded text-white border border-purple-200 bg-purple" >
            hello world
        </button>
    );
}

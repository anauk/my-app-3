const initialState = {
    pages: [
        {
            title: 'First page',
            id: 'first-page',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            title: 'Second page',
            id: 'second-page',
            content: 'Asperiores consequatur debitis dolorem adipisicing elit.'
        },
        {
            title: 'Third page',
            id: 'third-page',
            content: 'ipsam, modi nisi officiis quae quasi quod reiciendis repellendus.'
        }
        ]
};

export default function page(state=initialState, action){
    return state;
}
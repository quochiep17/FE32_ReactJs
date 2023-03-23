import './styles.css'

const Hello = ({ content, gender, children }) => {
    return <div className='title'>
        {children}
        {content} -
        Gioi tinh: {gender}
    </div>;
}

export default Hello;
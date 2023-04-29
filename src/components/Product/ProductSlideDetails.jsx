import HTMLString from 'react-html-string';

const ProductSlideDetails = ({ html }) => {

    // const components = {
    //     a: props => <a {...props} style={{ color: 'red' }} />,
    //     h1: Heading,
    // };

    return (
        <HTMLString html={html} />
    )
}

export default ProductSlideDetails
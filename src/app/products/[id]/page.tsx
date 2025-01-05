import Card from "./../../components/card";
export default async function Product({ params }: { params: { id: string } }) {
    const { id } = await params;
    return (
        <div>
            <h1>Product: {id}</h1>;
            <Card
            heading="Card Heading"
            subHeading="This is a subheading describing the content of the card."
            imageUrl="https://via.placeholder.com/150"
            / >
        </div>
    
    
    );
}
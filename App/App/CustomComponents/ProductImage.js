const ProductImage = ({ imageData }) => {
    // Extract imageData properties
    const { contentType, imageBytes } = imageData;

    // Construct base64 image data URI
    const base64Uri = `data:${contentType};base64,${imageBytes}`;

    return (
        <View>
            <Image
                style={{ width: 200, height: 200 }} // Adjust dimensions as needed
                source={{ uri: base64Uri }}
            />
        </View>
    );
};


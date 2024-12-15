import axios from 'axios';

export const convertFile = async (file) => {
    if (!file) {
        Alert.alert('No file selected');
        return;
    }

    const formData = new FormData();
    formData.append('file', {
        uri: file.uri,
        name: file.fileName,
        type: file.type,
    });

    try {
        const response = await axios.post('YOUR_OCR_API_ENDPOINT', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        // Handle the response and download the converted file
    } catch (error) {
        console.error(error);
        Alert.alert('Error converting file');
    }
};

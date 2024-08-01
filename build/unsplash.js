document.addEventListener('DOMContentLoaded', function() {
    const accessKey = 'up7S9dPQnkG7yZAiS4vFgsmJnML7JJUy2lWlKzzCKc8';
    const defaultImages = {
        'image1': 'https://media.es.wired.com/photos/64aed23f721d1170b8ceb337/16:9/w_1600,c_limit/IA%201467639088.jpg" alt="Passion for Technology" class="responsive-img',
        'image2': 'https://www.esic.edu/sites/default/files/2024-05/innovacion%20abierta.jpeg'
    };

    const fetchImage = async (keyword, imageId) => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/random', {
                params: { query: keyword, client_id: accessKey }
            });
            const imageUrl = response.data.urls.regular;
            document.getElementById(imageId).src = imageUrl;
        } catch (error) {
            console.error(`Error fetching image for ${keyword}:`, error);
            document.getElementById(imageId).src = defaultImages[imageId];
        }
    };

    // Fetch images for the specified keywords
    fetchImage('artificial intelligence', 'image1');
    fetchImage('Computer technological innovation', 'image2');
});

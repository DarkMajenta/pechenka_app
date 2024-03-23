const getPhrase = async () => {
    try {
        const response = await fetch('https://spectacular-babka-7aa6e1.netlify.app/phrase');
        if (!response.ok) throw new Error('Failed to fetch phrase');
        return response.json();
    } catch (error) {
        console.error(error);
        return { phrase: 'Failed to fetch phrase' };
    }
};

export default getPhrase;

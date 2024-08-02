const token = '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'; // Reemplaza con tu token real

// Prefijo para las solicitudes de generación de texto
const promptPrefix = "Generate a very very short creative and engaging text based on the following quote: ";

// Textos originales para cada cita
const originalText1 = "AI is the engine of the future, and I am excited to see where it takes us";
const originalText2 = "Innovating is seeing what everyone has seen and thinking what no one has thought";

// Genera el texto completo de entrada
function generatePrompt(text) {
    return promptPrefix + text;
}

async function fetchGeneratedText() {
    try {
        // Primera llamada a la API para generar texto para el primer blockquote
        const response1 = await axios.post('https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B', {
            inputs: generatePrompt(originalText1),
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        // Extraer el texto generado y limpiar cualquier prefijo no deseado
        const generatedText1 = extractGeneratedText(response1.data?.[0]?.generated_text, generatePrompt(originalText1)) || originalText1;
        updateTextContent(generatedText1, 0);

        // Segunda llamada a la API para generar texto para el segundo blockquote
        const response2 = await axios.post('https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B', {
            inputs: generatePrompt(originalText2),
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        // Extraer el texto generado y limpiar cualquier prefijo no deseado
        const generatedText2 = extractGeneratedText(response2.data?.[0]?.generated_text, generatePrompt(originalText2)) || originalText2;
        updateTextContent(generatedText2, 1);

    } catch (error) {
        console.error("Error fetching generated text:", error);
        updateTextContent(originalText1, 0);
        updateTextContent(originalText2, 1);
    }
}

function extractGeneratedText(fullText, promptText) {
    // Verifica que el texto generado esté presente
    if (fullText) {
        // Divide el texto generado en base al texto original utilizado
        const startIndex = fullText.indexOf(promptText);
        if (startIndex !== -1) {
            // Extrae el texto después del texto original
            const splitText = fullText.substring(startIndex + promptText.length).trim();
            return splitText;
        }
    }
    return "";
}

function updateTextContent(text, index) {
    const blockquotes = document.querySelectorAll('blockquote');
    // Actualiza el texto dentro del blockquote correspondiente
    if (blockquotes.length > index) {
        blockquotes[index].innerHTML = `"${text}"`;
    } else {
        console.log(`No blockquote found for index ${index}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchGeneratedText();
});
